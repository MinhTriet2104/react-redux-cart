import React from "react";
import { connect } from "react-redux";

const Message = ({ message }) => {
  return (
    <h3>
      <span className="badge amber darken-2">{message}</span>
    </h3>
  );
};

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps, null)(Message);
