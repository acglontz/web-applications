import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from "react-router-dom";
import Example from './components/example/Example';
import States from './components/states/States';
import Header from './components/header/Header.jsx';

function ExampleView() {
    return (
        <div>
            <Header />
            <Link href="#/states">States</Link>
            <Example />
        </div>
    );
}

function StatesView() {
    return (
        <div>
            <Header />
            <Link href ="#/example">Example</Link>
            <States />
        </div>
    );
}

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Link to="/example">Example</Link>
                <Link to="/states">States</Link>
                <Route path="/states" component={StatesView} />
                <Route path="/example" component={ExampleView} />
            </div>
        </HashRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
