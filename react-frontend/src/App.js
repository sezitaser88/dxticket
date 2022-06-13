import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

    constructor() {
        super();
        this.state = {
            name: "home",
            title: "Home Page",
            introduction: "Every website comes with its own styling requirements.",
            aggregatedPageModel: {},
            containerItemComponents: []
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">{this.state.title} ({this.state.name})</h1>
                </header>
                <p className="App-intro">
                    {this.state.introduction}
                </p>
            </div>
        );
    }

    componentDidMount() {
        fetch('http://localhost:8080/site/resourceapi/')
            .then(results => results.json())
            .then(data => {
               console.log(data);
                this.setState({
                    name: data.page.name
                });
            })
    }
}

export default App;
