import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Example from './components/example/Example';
import States from './components/states/States';
import Header from './components/header/Header.jsx';


function ExampleView(props) {
    return (
        <div>
            <Header />
            <button onClick={props.switchView}>
                Switch to {props.showExample ? 'States' : 'Example'}
            </button>
            <Example />
        </div>
    );
}

function StatesView(props) {
    return (
        <div>
            <Header />
            <button onClick={props.switchView}>
                Switch to {props.showExample ? 'States' : 'Example'}
            </button>
            <States />
        </div>
    );
}

function App() {
    const [showExample, setShowExample] = useState(true);

    const switchView = () => {
        setShowExample(!showExample);
    };

    return (
        <div className="App">
            {showExample ? <ExampleView switchView={switchView} showExample={showExample} /> : <StatesView switchView={switchView} showExample={showExample} />}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
