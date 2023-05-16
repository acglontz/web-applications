import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './TopBar.css';

const TopBar = (props) => {
    const user = window.models.userModel(props.userId);
    const fullname = user ? user.first_name + ' ' + user.last_name : null;
    const location = useLocation();
    const isPhotosPage = location.pathname.includes('/photos');
    const rightSideText = isPhotosPage ? `Photos of ${fullname}` : fullname;

    const handleUserChange = () => {
        props.onUserChange(null);
    };

    return (
        <AppBar className="topbar-appBar" position="absolute">
            <Toolbar>
                <div style={{ flex: 0 }}>
                    <Link
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        to="/"
                        onClick={handleUserChange}
                    >
                        <Typography variant="h4" color="inherit">
                            Andrew Glontz
                        </Typography>
                    </Link>
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <Typography variant="h5" color="inherit">
                        {rightSideText}
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
