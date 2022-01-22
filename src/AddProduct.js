import React from "react";
class Addproduct extends React.Component {
  state = {
    id: "",
    count: 1,
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.id === "") {
      alert("enter id please");
      return;
    }
    this.props.addProductHandler(this.state);
    this.setState({ id: "" });
  };
  render() {
    return (
      <div className="ui main">
        <br />
        <h2>Add product</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Product ID</label>
            <input
              type="text"
              name="PID"
              placeholder="Pid"
              value={this.state.id}
              onChange={(e) => this.setState({ id: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default Addproduct;
