import React from 'react';
import iconsSprait from '../../assets/images/icons-spait.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props:IconPropsType) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprait}#${props.iconId}`} />
        </svg>
    );
};

export default Icon;