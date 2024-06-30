import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
const Head5 = () => {
  const { count, setCount } = useContext(CounterContext);

  const handleChange = (status) => {
    if (status === "dec") {
      /// undefined === "dec", "dec === "dec
      setCount((prev) => prev - 1);
      return;
    }
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h5>Counter: {count}</h5>
      <button onClick={() => handleChange()}>Increment by 1</button>
      <br />
      <br />
      <button onClick={() => handleChange("dec")}>Decrement by 1</button>
    </>
  );
};

export default Head5;
