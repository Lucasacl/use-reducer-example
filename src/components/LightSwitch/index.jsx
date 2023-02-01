import { useReducer } from "react";
import { reducer } from "../../reducers/reducer.js";
import Lightbulb from "./Lightbulb.jsx";

const LightSwitch = () => {
  const initialValue = false;
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleClick = () => {
    dispatch("TOGGLE");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "30",
      }}>
      <Lightbulb fillColor={state ? "black" : "white"} />
      <button style={{ marginTop: 10 }} onClick={handleClick}>
        {" "}
        ON / OFF{" "}
      </button>
    </div>
  );
};

export default LightSwitch;
