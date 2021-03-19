import React, {Fragment, useState} from 'react';
import DatePicker from './DatePicker';
import RangePicker from "./RangePicker";
import Icon from "../Icon";

const defaultProps = {
    addTag: () => {},
    uploadFile: () => {},
    onBlurVideoLink: () => {},
    removeArrValue: () => {},
    onChangeRange: () => {},
    fieldValue: ''
};

const RenderField = (_props) => {
    const props = {...defaultProps, ..._props};
    const { input, meta: { touched, error }, item, addTag, onBlurVideoLink, onChangeRange, uploadFile, removeArrValue, fieldValue} = props;
    const [allTags, setAllTags] = useState(false);

    switch (item.type) {
        case 'text':
        case 'email':
        case 'number':
            return (
                <div className={item.class}>
                    <input {...input} type={item.type} onBlur={(e) => onBlurVideoLink(e)} placeholder={item.placeholder} />
                    {touched && error && <span>{error}</span>}
                </div>
            );
        case 'textarea':
            return (
                <div className={item.class}>
                    <textarea {...input} placeholder={item.placeholder} />
                    {touched && error && <span>{error}</span>}
                </div>
            );
        case 'select':
            return (
                <div className={item.class}>
                    <select {...input}>
                        <option value="">{item.placeholder}</option>
                        {item.options.map((option, index) =>
                            <option key={index} value={option.value} dangerouslySetInnerHTML={{ __html: option.label }}/>
                        )}
                    </select>
                    {touched && error && <span>{error}</span>}
                </div>
            );
        case 'radio':
            return (
                <div className={item.class + " wpcf-inline-radio-group"}>
                    {item.options.map((option, index) =>
                        (
                            <label key={index} className={"wpcf-radio-inline " + option.class}>
                                <div className="wpcf-radio-inner">
                                    <input {...input} type={item.type} value={option.value} checked={option.value==fieldValue}/>
                                    <Icon name="check"/>
                                    {option.label && <span>{option.label}</span>}
                                </div>
                                {option.desc && <small>{option.desc}</small>}
                            </label>
                        )
                    )}
                    {touched && error && <span>{error}</span>}
                </div>
            );
        case 'checkbox':
            return (
                <div className={item.class}>
                    {item.options.map((option, index) =>
                        <label key={index} className="checkbox-inline">
                            <input {...input} type={item.type} value={option.value} checked={option.value==fieldValue}/> {option.label}
                        </label>
                    )}
                    {touched && error && <span>{error}</span>}
                </div>
            );
        case 'tags':
            return (
                <div className={item.class}>
                    <div className="wpcf-input-tags-btns top-btns">
                        {input.value && input.value.map( (item, index) =>
                            <button type="button" key={index} onClick={() => removeArrValue('tag', index, input.name, input.value)}>- {item.label}</button>
                        )}
                    </div>
                    <input
                        type='text'
                        onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                                e.preventDefault();
                                const value = e.target.value.toLowerCase();
                                const tag = { value, label: e.target.value };
                                addTag(tag, input.name, input.value);
                                e.target.value = '';
                            }
                        }}
                        placeholder={item.placeholder}/>
                    <div className={"wpcf-input-tags-btns " + item.class}>
                        {(allTags === false ? item.options.slice(0, 3) : item.options).map((tag, index) =>
                            <button type="button" key={index} onClick={() => addTag(tag, input.name, input.value)}>+ {tag.label}</button>
                        )}
                    </div>
                    {
                        item.options.length > 3 && (
                            allTags === false ? (
                                <button className="wpcf-input-tags-more" type="button" onClick={() => setAllTags(true)}>Show more</button>
                            ) : (
                                <button className="wpcf-input-tags-less" type="button" onClick={() => setAllTags(false)}>Show less</button>
                            )
                        )
                    }

                </div>
            );
        case 'image':
        case 'video':
            const is_media = item.is_media ? item.is_media : false;
            return (
                <div className={item.class}>
                    <div className="wpcf-form-attachments">
                        {input.value && input.value.map( (item, index) =>
                            <div key={index} className="wpcf-form-attachment">
                                <Icon name="png"/>
                                {item.name}
                                <button onClick={() => removeArrValue(item.type, index, input.name, input.value, is_media)}>
                                    <Icon name="cross"/>
                                </button>
                            </div>
                        )}
                    </div>
                    <button
                        className="wpcf-btn wpcf-btn-round wpcf-primary-light-btn"
                        type="button"
                        onClick={() => uploadFile(item.type, input.name, input.value, item.multiple, is_media)}
                    >
                        {item.icon && <Icon name={item.icon} className="wpcf-icon"/>}
                        {item.button}

                    </button>
                    {touched && error && <span>{error}</span>}
                </div>
            );
        case 'range':
            const range = (typeof fieldValue == 'object');
            return (
                <div className={'range-picker-parent ' + item.class}>
                    <RangePicker
                        min={item.minVal}
                        max={item.maxVal}
                        step={item.step}
                        value={input.value}
                        onChange={input.onChange}/>

                    <div className={"range-picker-value " + (range ? 'wpcf-multiple' : 'wpcf-single')}>
                        {range ? (
                            <Fragment>
                                <input type="text" name={input.name} range="min" value={input.value.min}  onChange={(e) => onChangeRange(e)}/>
                                <input type="text" name={input.name} range="max" value={input.value.max}  onChange={(e) => onChangeRange(e)}/>
                            </Fragment>
                        ) : (
                            <input type="text" name={input.name} range="false" value={input.value}  onChange={(e) => onChangeRange(e)}/>
                        )}
                        <span dangerouslySetInnerHTML={{ __html: WPCF.currency.symbol }}/>
                    </div>
                </div>
            );
        case 'date':
            return (
                <div className="wpcf-date-picker">
                    <DatePicker
                        label={item.label}
                        name={input.name}
                        value={input.value}
                        onChange={input.onChange}
                        placeholder={item.placeholder}/>
                    {touched && error && <span>{error}</span>}
                </div>
            )
        default:
            return '';
    }
}

export default RenderField;

