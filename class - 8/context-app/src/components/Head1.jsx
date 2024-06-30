import Head2 from "./Head2";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Head1 = () => {
  const { count } = useContext(CounterContext);
  return (
    <>
      <h1>Counter: {count}</h1>
      <Head2 />
    </>
  );
};

export default Head1;
