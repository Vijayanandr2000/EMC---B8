import Head4 from "./Head4";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Head3 = () => {
  const { count } = useContext(CounterContext);
  return (
    <>
      <h3>Counter: {count}</h3>
      <Head4 />
    </>
  );
};

export default Head3;
