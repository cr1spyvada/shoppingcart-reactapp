import ProductCard from "./ProductCard";

const productList = (props) => {
  const decrementHandler = (id) => {
    props.downCountId(id);
  };
  const incrementHandler = (id) => {
    props.upCountId(id);
  };
  const deleteProductHandler = (id) => {
    props.deleteProductId(id);
  };
  const renderproductList = props.products.map((product) => {
    return (
      <ProductCard
        product={product}
        reduceHandler={decrementHandler}
        increaseHandler={incrementHandler}
        deleteHandler={deleteProductHandler}
        key={product.id}
      />
    );
  });
  return <div>{renderproductList}</div>;
};

export default productList;
