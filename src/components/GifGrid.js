import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFechGifs } from '../hooks/useFechGifs';

export const GifGrid = ({category}) => {

    
    const { loading, data } = useFechGifs(category);

    
    
    
    return (
        <>
            <h3>{category}</h3>
            { loading && 'Cargando...'}
            <div className="card-grid">
                
                {
                    data.map(img => {
                        return <GifGridItem 
                            key={ img.id }
                            { ...img } />
                    })
                }
            </div>
        </>  
    )
}
