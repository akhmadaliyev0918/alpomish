import React from 'react';
import Lottie from 'react-lottie';
import deleteIconData from '../delete.json'; // To'liq yo'lni tekshiring

const DeleteIcon = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: deleteIconData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return <Lottie options={defaultOptions} height={48} width={48} />;
};

export default DeleteIcon;
