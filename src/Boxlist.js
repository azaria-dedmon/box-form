import React, { useState } from 'react';
import NewBoxForm from './Newboxform';
import Box from './Box';


const Boxlist = () => {
    const INITIAL_STATE = []
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox }])
    }
    const remove = (id) => {
        setBoxes(boxes.filter(box => box.id !== id))
    }
    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxes.map( box  => <Box id={box.id} width={box.width} height={box.height} backgroundColor={box.backgroundColor} handleRemove={remove} />)}
        </div>
    );
}


export default Boxlist;