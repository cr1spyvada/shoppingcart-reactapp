import React, { useState, useEffect } from "react";
import Addproduct from "./AddProduct";
import ProductList from "./ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const LOCAL_STORAGE_KEY = "product_key";

  // function for adding product
  const addProductHandler = (product) => {
    // if product already exists then counter incremented
    if (products.some((product_iterated) => product_iterated.id === product.id))
      incrementProductHandler(product.id);
    // else product added to list
    else setProducts([...products, product]);
  };

  // function for incrementing counter of id
  const incrementProductHandler = (id) => {
    const newProductList = products.map((product) => {
      if (product.id === id) product.count = product.count + 1;
      return product;
    });
    setProducts(newProductList);
  };

  // function for decrementing counter of id
  const reduceProductHandler = (id) => {
    console.log(products);
    const newProductList = products.map((product) => {
      if (product.id === id) {
        product.count -= 1;
        return product;
      } else return product;
    });
    const newProductList2 = newProductList.filter((product) => {
      return product.count !== 0;
    });
    if (newProductList2 === []) setProducts([]);
    else setProducts(newProductList2);
  };

  // function for deleting product with id
  const deleteProductHandler = (id) => {
    console.log(products);
    const newProductList = products.filter((product) => {
      return product.id !== id;
    });
    console.log(newProductList);
    setProducts(newProductList);
  };

  //for retrieving product list from  local storage

  useEffect(() => {
    const retrieveProducts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveProducts) setProducts(retrieveProducts);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
  }, [products]);
  return (
    <div className="App">
      <h3 className="ui block header red">My Cart({products.length})</h3>
      <ProductList
        products={products}
        upCountId={incrementProductHandler}
        downCountId={reduceProductHandler}
        deleteProductId={deleteProductHandler}
      />
      <Addproduct addProductHandler={addProductHandler} />
    </div>
  );
}

export default App;
