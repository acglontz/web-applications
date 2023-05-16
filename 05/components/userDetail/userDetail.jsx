import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Divider,
    Typography,
    Button
} from '@material-ui/core';
import './userDetail.css';

/**
 * Define UserDetail, a React component of project #5
 */
class UserDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const user = window.models.userModel(this.props.match.params.userId);
        const fullname = user.first_name + ' ' + user.last_name;

        return (
            <div>
                <Typography variant="h5"> {fullname} </Typography>
                <Typography variant="subtitle1">
                    {user.location}
                </Typography>
                <Typography variant="body1">
                    <b>Occupation:</b> {user.occupation}
                </Typography>
                <Typography variant="body1">
                    <b className="userDetail-description">Description: </b>
                    <span className="userDetail-description">{user.description}</span>
                </Typography>
                <Divider />
                <Button
                    component={RouterLink}
                    to={'/users/' + user._id + '/photos'}
                >
                    Photo Gallery
                </Button>
            </div>
        );

    }
}

export default UserDetail;
