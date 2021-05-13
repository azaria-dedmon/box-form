import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        width: 0,
        height: 0,
        backgroundColor: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        })) 
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData, id: uuid() });
        setFormData(INITIAL_STATE)

    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
            <input
                id="width"
                type="number"
                name="width"
                placeholder="Box width"
                value={formData.width}
                onChange={handleChange} 
            />
            <label htmlFor="height">Height</label>
            <input
                id="height"
                type="number"
                name="height"
                placeholder="Box height"
                value={formData.height}
                onChange={handleChange} 
            />
            <label htmlFor="backgroundcolor">Background Color</label>
            <input
                id="backgroundcolor"
                type="text"
                name="backgroundColor"
                placeholder="Box background color"
                value={formData.backgroundColor}
                onChange={handleChange} 
            />
            <button>Add box</button>
        </form>
    );
}

export default NewBoxForm;