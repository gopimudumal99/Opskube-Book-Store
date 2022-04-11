import React from 'react'
import "./Error.css"
import MetaData from "../Navbar/MetaData";

function Error() {
  return (
    <>
      <MetaData title="404 Error" />
      <div className="error">
        <h1>404</h1>
        <h3>Page Not Found !</h3>
      </div>
      ;
    </>
  );
}

export default Error