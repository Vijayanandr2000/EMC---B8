import Head5 from "./Head5";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Head4 = () => {
  const { count } = useContext(CounterContext);
  return (
    <>
      <h4>Counter: {count}</h4>
      <Head5 />
    </>
  );
};

export default Head4;
