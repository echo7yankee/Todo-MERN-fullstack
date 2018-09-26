import React, { Component } from "react";
import "../ItemModal.css";
import { addItems } from "../actions/itemAction";
import { connect } from "react-redux";

class ItemModal extends Component {
  state = {
    modal: false,
    name: ""
  };

  onChangeHandler = e => {
    this.setState({
      name: e.target.value
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const newItem = {
      name: this.state.name
    };

    this.props.addItems(newItem);

    this.setState({
      name: ""
    });
  };

  onToggle = () => {
    this.setState(state => ({
      modal: !state.modal
    }));
  };

  render() {
    return (
      <div className="modal__container">
        <div className={this.state.modal ? "modal-active" : "modal"}>
          <div className="modal__content">
            <h3 className="modal__header-ternary">
              Add an item to the shopping list
            </h3>
            <form onSubmit={this.onSubmitHandler} className="modal__form">
              <input
                type="text"
                className="modal__input"
                placeholder="Add an item..."
                onChange={this.onChangeHandler}
                value={this.state.name}
                onReset={this.handleFormReset}
              />
              <button
                onClick={this.onToggle}
                type="submit"
                className="modal__submit"
              >
                Add Item
              </button>
            </form>
          </div>
        </div>
        <button onClick={this.onToggle} className="modal__submit">
          Add to cart
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    item: state.item
  };
};

export default connect(
  mapStateToProps,
  { addItems }
)(ItemModal);
