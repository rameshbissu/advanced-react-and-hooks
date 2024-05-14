import React from "react";

const UserContainer = ({ user, logout, login }) => {
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>hello There, {user?.name?.toUpperCase()}</p>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <>
          <p>Please Login</p>
          <button type="button" className="btn" onClick={login}>
            Login,bob
          </button>
        </>
      )}
    </div>
  );
};

export default UserContainer;
