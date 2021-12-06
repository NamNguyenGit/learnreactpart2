import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import PropTypes from "prop-types";
const ColorBox = (props) => {
  const { color } = props;
  return (
    <Fragment>
      <div className="box" style={{ background: color }}></div>
    </Fragment>
  );
};

ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
};

ColorBox.defaultProp = {
  rounded: true,
};

export default ColorBox;
