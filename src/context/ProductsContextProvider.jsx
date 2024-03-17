import React from 'react'
import ProductsContext from './ProductsContext'

const ProductsContextProvider=({childern})=>{
    const [product,setProduct]=React.useState(null)
    return(
        <ProductsContext.Provider value={{product,setProduct}}>
            {childern}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider