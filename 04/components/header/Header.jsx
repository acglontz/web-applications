import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-content">
                    <h1 className="header-title">Andrew Glontz</h1>
                    <p className="header-subtitle">I used to play sports. Then I realized you can buy trophies. Now I am good at everything.</p>
                </div>
            </div>
        );
    }
}

export default Header;
