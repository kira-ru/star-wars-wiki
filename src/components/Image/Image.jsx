import React, {useState} from 'react';
import fallbackImage from './img/fallbackImage.webp'

const Image = (props) => {

    const [isError, setIsError] = useState(false)
    const [src, setSrc] = useState(props.src)

    function errorHandler() {
        if (!isError) {
            console.log('error')

            setIsError(true)
            setSrc(fallbackImage)
        }
    }

    console.log('render')
    return (
        <img
            {...props}
            src={src}
            onError={() => errorHandler()}
        />
    );
};

export default Image;