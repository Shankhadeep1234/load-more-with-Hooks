import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import UsersList from "./components/UsersList";

const AppFunctional = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <div>
      <h2>Functional Component</h2>
    </div>
  );
};

export default AppFunctional;
