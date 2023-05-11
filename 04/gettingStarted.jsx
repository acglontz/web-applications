import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Header from './components/header/Header.jsx';


import Example from './components/example/Example.jsx';

ReactDOM.render(
    <div>
        <Header />
        <Example />,
    </div>,

  document.getElementById('reactapp'),
);
