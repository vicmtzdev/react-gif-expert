import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'GOT' ]);


  const onAddCategory = ( newCategory ) => {
    // categories.push(newCategory);
    // console.log(newCategory);

       if( categories.includes(newCategory) ) return;

       setCategories( [ newCategory, ...categories ] )
    // setCategories( cat => [ ...categories, 'Valorant' ] )
  }


  return (
    <>       
    
        <h1>GifExpertApp</h1>

    
        <AddCategory 
            
            onNewCategory={(value) => onAddCategory(value)}
        />

        
       
        { 
            categories.map( (category) => (
                    <GifGrid 
                        key={category} 
                        category={category} 
                    />
                )) 
        }
            

    </>
  )
}
