import React, { Component } from "react";
import axios from "axios";

import Header from "./components/Header";
import UsersList from "./components/UsersList";

class App extends Component {
  state = {
    users: [],
    page: 0,
    isLoading: false,
    errorMsg: "",
  };

  componentDidMount() {
    this.loadUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.loadUsers();
    }
  }

  loadUsers = () => {
    this.setState({ isLoading: true });
    const { page } = this.state;
    axios
      .get(`https://randomuser.me/api/?page=${page}&results=10`)
      .then((response) =>
        this.setState((prevState) => ({
          users: [...prevState.users, ...response.data.results],
          errorMsg: "",
        }))
      )
      .catch((err) =>
        this.setState({
          errorMsg: "Error while loading data. Try again later.",
        })
      )
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  loadMore = () => {
    this.setState((preState) => ({
      page: preState.page + 1,
    }));
  };

  render() {
    const { isLoading, errorMsg, users } = this.state;
    console.log(users);
    return (
      <div className="main-section">
        <Header />
        <UsersList users={users} />
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <div className="load-more">
          <button onClick={this.loadMore} className="btn-grad">
            {isLoading ? "Loading..." : "Load More"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
