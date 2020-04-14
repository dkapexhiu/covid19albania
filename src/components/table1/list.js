import React, { Component } from "react";
import Tbody from "./tbody";
import Navbar from "./Navbar";
import Header from "./header";
import Footer from "./Footer";

export default class List extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    const axios = require("axios");
    axios({
      method: "GET",
      url: "https://covid19-albania-api.danielkapexhiu.com/data"
    })
      .then(response => {
        console.log(response.data);
        //console.log(response.data[2])
        this.setState({
          posts: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { posts } = this.state;
    const ListOfPost = posts.map(post => {
      return <Tbody p={post} />;
    });
    return (
      <div>
        <Navbar />
        <table className="table">
          <thead className="thead-dark">
            <Header />
          </thead>
          {ListOfPost}
        </table>
        <Footer />
      </div>
    );
  }
}
