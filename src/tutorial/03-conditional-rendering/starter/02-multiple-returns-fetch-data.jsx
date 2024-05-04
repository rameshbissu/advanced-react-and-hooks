import { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);

  return <h2>Fetch Data</h2>;
};
export default MultipleReturnsFetchData;
