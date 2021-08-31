import React from "react";
import { useHistory } from "react-router-dom";
import "./ButtonMain.css";
import "./ButtonAlt.css";
import "./ButtonOutline.css";

const getClassName = (buttonType) => {
  switch (buttonType) {
    case "outline":
      return "btn-outline";
    case "alt":
      return "btn-alternate";
    default:
      return "btn-main";
  }
};

function ButtonMain(props) {
  let history = useHistory();

  function btnRedirect(path) {
    history.push(path);
  }
  const { type, path } = props;

  return (
    <button
      className={getClassName(type)}
      onClick={() => btnRedirect(path)}
      type="button"
      name="button"
    >
      {props.btnValue}
    </button>
  );
}

export default ButtonMain;
