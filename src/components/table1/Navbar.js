import React, { Component } from "react";

export default class HomeData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      recovered: 0,
      deceased: 0
    };
  }

fetchTotal(){
  fetch("https://raw.githubusercontent.com/dkapexhiu/covid19albaniaandroid/master/total.json")
    .then(response => response.json())
    .then((responseTot)=> {
      this.setState({
        total: responseTot[0].Konfirmuar,
        recovered: responseTot[0].Sheruar,
        deceased: responseTot[0].Vdekje
      })
    })
    .catch(error=>console.log(error))
}

  componentDidMount() {
    this.fetchTotal();
  }

  render() {
    const { total, recovered, deceased } = this.state;
    return (
      <div>
      <h1>COVID-19 ne Shqiperi</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>Konfirmuar: {total} &nbsp;</p>
        <p>Vdekur: {recovered} &nbsp;</p>
        <p>Sheruar: {deceased}</p>
      </div>
      </div>
    );
  }
}
