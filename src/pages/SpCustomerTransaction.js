import React from "react";
import SpNavbar from "../components/SpNavbar";
import SpSidebar from "../components/SpSidebar";

function SpCustomerTransaction() {
  return (
    <div>
      <SpNavbar />
      <SpSidebar />
      <div className="container">
        <h1 className="text-secondary">Transactions</h1>
      </div>
    </div>
  );
}

export default SpCustomerTransaction;
