import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Grid, Typography, Paper } from '@material-ui/core';
import './styles/main.css';

// import necessary components
import TopBar from './components/topBar/TopBar';
import UserDetail from './components/userDetail/UserDetail';
import UserList from './components/userList/UserList';
import UserPhotos from './components/userPhotos/UserPhotos';

class PhotoShare extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUserId: null
        };

        this.onUserChangeBound = userid => this.onUserChange.bind(this, userid);
    }

    onUserChange(userid) {
        this.setState({ currentUserId: userid });
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Grid container spacing={8}>
                        <Grid item xs={12}>
                            <TopBar
                                userId={this.state.currentUserId}
                                onUserChange={this.onUserChangeBound}
                            />
                        </Grid>
                        <div className="main-topbar-buffer"/>
                        <Grid item sm={3}>
                            <Paper  className="main-grid-item">
                                <UserList
                                    onUserChange={this.onUserChangeBound}
                                />
                            </Paper>
                        </Grid>
                        <Grid item sm={9}>
                            <Paper className="main-grid-item">
                                <Switch>

                                    <Route exact path="/users/:userId"
                                           render={ props => <UserDetail {...props} /> }
                                    />
                                    <Route exact path="/users/:userId/photos"
                                           render ={ props => <UserPhotos {...props} /> }
                                    />
                                    <Route path="/users" component={UserList}  />
                                </Switch>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </HashRouter>
        );
    }
}


ReactDOM.render(
    <PhotoShare />,
    document.getElementById('photoshareapp'),
);
