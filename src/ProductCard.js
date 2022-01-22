const productCard = (props) => {
  const { id, count } = props.product;
  return (
    <div className="product ui justified container">
      <label className="large ui header black left floated">{id}</label>
      <span>
        <button
          className="mini ui left attached button"
          onClick={() => props.reduceHandler(id)}
        >
          -
        </button>
        <span className="large ui ">{count}</span>
        <button
          className="mini ui right attached button"
          onClick={() => props.increaseHandler(id)}
        >
          +
        </button>
      </span>
      <i
        className="large trash alternate outline icon"
        style={{ float: "right" }}
        onClick={() => props.deleteHandler(id)}
      />
      <div className="ui divider" />
    </div>
  );
};

export default productCard;
