import React, { Component } from "react";

const styles = {
    padding: 20,
    margin: "100px auto 0 auto",
    width: 500,
    border: "1px solid #eee",
    background: "#fff",
    boxShadow: "1px 1px 8px -2px #ccc",
    textAlign: "center",
    color: "#555"
}

export default class App extends Component {
    render() {
        return (
            <div style={styles}>
                <h1>Hello from the server</h1>
            </div>
        );
    }
}