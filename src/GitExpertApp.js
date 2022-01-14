import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GitExpertApp = () => {
    const [categories, setCategories] = useState([])
    
    // const handleAdd = () => {
    //     debugger;
    //     setcategories([...categories,'Hola']);
    // }

    return (
        <div>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
            <ol>
                {
                    categories.map(category => {
                       return <GifGrid key={category} category={category}/>
                    })
                }
            </ol>
        </div>
    )
}
