import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [value, setValue] = useState(false);

  const toggleHandle = () => {
    setValue(!value);
  };

  return (
    <>
      {value ? (
        <div>
          <h2>This is Main</h2>
          <button className="btn" onClick={toggleHandle}>
            Click me
          </button>
        </div>
      ) : (
        <AnotherComponent click={toggleHandle} />
      )}
    </>
  );
};

const AnotherComponent = ({ click }) => {
  useEffect(() => {
    console.log("Another component useEffect");
  }, []);
  return (
    <>
      <h2>The Another Component</h2>
      <button className="btn" onClick={click}>
        Click me
      </button>
    </>
  );
};

export default CleanupFunction;
