import React, { useState } from 'react';

const ShowMoreText = (props) => {
    const { length, content } = props;
    const [ expand, setExpand ] = useState(false);
    if( content.length > length ) {
        const className = expand ? 'wpcf-expand wpcf-showmore' : 'wpcf-collapse wpcf-showmore';
        const buttonText = expand ? 'See Less' : 'See More';
        return (
            <div className={className}>
                <div className="wpcf-reward-content-inner" dangerouslySetInnerHTML={{__html: content}}/>
                <span tabIndex="0" onClick={() => setExpand( !expand )}>{ buttonText }</span>
            </div>
        );
    } else {
        return (
            <div dangerouslySetInnerHTML={{__html: content}}/>
        );
    }
}

export default ShowMoreText;
