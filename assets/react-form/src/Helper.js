import { __ } from '@wordpress/i18n';
export const required = value => value ? undefined : __('Please fill the required field', 'wp-crowdfunding');
export const isYoutubeUrl = value => !value ? undefined : value && getYotubeVideoID(value) ? undefined : __('Invalid video url', 'wp-crowdfunding');
export const isEmail = value => !value ? undefined : value && validateEmail(value) ? undefined : __('Invalid email address', 'wp-crowdfunding');

export const uploadFiles = (type, sFiles, multiple) => {
    return new Promise((resolve, reject) => {
        const prevFiles = sFiles ? [...sFiles] : [];
        const mediaLibrary = wp.media({
            multiple,
            library: { type }
        });
        mediaLibrary.on('open', () => {
            const selectionAPI = mediaLibrary.state().get('selection');
            prevFiles.forEach( item => {
                const attachment = wp.media.attachment( item.id );
                selectionAPI.add( attachment ? [ attachment ] : []);
            });
        });
        mediaLibrary.on('select', () => {
            const length = mediaLibrary.state().get('selection').length;
            const files = mediaLibrary.state().get('selection').models;
            let selectedFiles = [];
            for(let i = 0; i < length; i++) {
                const file = files[i].changed;
                const name = file.name;
                const fileName = (name.length>10) ? name.substr(0, 10)+'...' : name+'.';
                selectedFiles.push({
                    id: files[i].id,
                    type: file.type,
                    src: file.url,
                    mime: file.mime,
                    name: fileName+file.subtype,
                    thumb: (type == 'image') ? file.sizes.thumbnail.url : '',
                });
            }
            resolve(selectedFiles);
        });
        mediaLibrary.open();
    });
};

export const removeArrValue = (values, index) => {
    values = [...values];
    values.splice(index, 1);
    return values;
}

export const validateEmail = value => {
    if(value && (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))) {
        return true;
    }
    return false;
}

export const getYotubeVideoID = value => {
    if(!value) return false;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = value.match(regExp);
    if (match && match[2].length == 11) {
        return match[2];
    }
    return false;
}

export const multiIndex = (obj, is) => {
    return is.length ? multiIndex(obj[is[0]], is.slice(1)) : obj;
}

export const getRaisedPercent = (goal, funded) => {
    let parcent = 0
    if (goal > 0 && funded > 0  ) {
        parcent = parseFloat(funded/goal*100).toFixed(2);
    }
    return parcent;
}

export const wcPrice = (price=0) => {
    const { symbol, d_separator, t_separator, decimals } = WPCF.currency;
    price = parseFloat(price).toFixed(decimals);
    price = price.replace(".", d_separator);
    var splitPrice = price.split(d_separator);
    splitPrice[0] = splitPrice[0].replace(/\B(?=(\d{3})+(?!\d))/g, t_separator);
    price = splitPrice.join(d_separator);
    return symbol+price;
}

export const ExceptionHandler = (res) => {
    if(res.status==401) { //Unauthorize access
        location.reload();
    }
}
