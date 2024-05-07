import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("render");

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    // console.log("hmm, this is intersting");
    const intId = setInterval(() => {
      // console.log("hello from interval");
    }, 1000);
    return () => {
      clearInterval(intId);
      console.log("CleanUp!");
    };
  }, []);
  return <h2>The Random Component</h2>;
};

export default CleanupFunction;
