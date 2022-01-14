import React, { useState} from 'react'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue(e.target.value);    
    } 

    const handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        if(inputValue.trim().length >= 1){
            setCategories(cats => [ inputValue, ...cats ]);
            setinputValue('');
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}/>
        </form>
    )
}

 