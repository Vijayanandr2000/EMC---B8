import Head3 from "./Head3";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Head2 = () => {
  const { count } = useContext(CounterContext);
  return (
    <>
      <h2>Counter: {count}</h2>
      <Head3 />
    </>
  );
};

export default Head2;
