import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems, deleteItems } from "../actions/itemAction";
import PropTypes from "prop-types";
import "../ShoppingList.css";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;
    return (
      <div className="list-container">
        <ul className="list">
          {items.map(({ _id, name }) => {
            return (
              <li key={_id} className="list-item">
                {name}
                <button
                  onClick={() => {
                    this.props.deleteItems(_id);
                  }}
                  className="list-close"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    item: state.item
  };
};

export default connect(
  mapStateToProps,
  { getItems, deleteItems }
)(ShoppingList);
