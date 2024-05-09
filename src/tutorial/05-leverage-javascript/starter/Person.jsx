import React from "react";
export function Person({ name, nickName, image }) {
  const img = image[0].small.url;
  return (
    <div key={name}>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>{name}</h4>
      <p>Nickname : {nickName}</p>
    </div>
  );
}
