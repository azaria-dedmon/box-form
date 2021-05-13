import React from 'react';


const Box = ({ width, height, backgroundColor, handleRemove, id }) => {
    const px = 'px'
    const boxStyle = {
        width: width+px,
        height: height+px,
        backgroundColor: backgroundColor
    }
    const removeBox = () => handleRemove(id)
    return (
        <>
            <div style={boxStyle}></div>
            <button onClick={removeBox}>X</button>
        </>
    )

}

export default Box