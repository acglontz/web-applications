import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Divider,
    Typography,
    Button,
} from '@material-ui/core';
import './userPhotos.css';

/**
 * Define UserPhotos, a React componment of project #5
 */
class UserPhotos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.match.params.userId
        };
    }

    getUserName(user) {
        return (<b> {user.first_name + ' ' + user.last_name} </b>)
    }

    //Construct post header with
    getPostHeader(username, date_time) {
        return (
            <div className='userPhotos-Post-Header'>
                {username}
                <Typography variant="body1">
                    {date_time}
                </Typography>
            </div>
        );
    }

    getPostFooter(comments) {
        console.log(comments);
        let formattedComments = [];
        if(comments) {
            formattedComments = comments.map((comment, index) => (
                <div className='userPhotos-Post-Footer-details' key={index}>
                    {this.getUserName(comment.user)}
                    {':\t' + comment.comment}
                </div>
            ));

        }


        return (
            <div className='userPhotos-Post-Footer'>
                {formattedComments}
            </div>
        );
    }

    getPosts(user, photos) {
        let posts = [];
        if(photos) {
            const username = this.getUserName(user);
            posts = photos.map(photo => (
                <div key={photo.id} className='userPhotos-Post'>
                    {this.getPostHeader(username, photo.date_time)}
                    <img
                        src={'/../../images/' + photo.file_name}
                        alt="Error!"
                    />
                    {this.getPostFooter(photo.comments)}
                    <Divider />
                </div>
            ));

        } else {
            posts = (
                <div className='userPhotos-Post'>
                    <Typography variant="body1">
                        {'Error: photos not found'}
                    </Typography>
                    <Divider />
                </div>
            );
        }

        return (
            <div className="userPosts">
                {posts}
            </div>
        );
    }

    render() {
        const user = window.models.userModel(this.state.userId);
        const photos = window.models.photoOfUserModel(this.state.userId);

        return (
            <div>
                <Button component={RouterLink} to={'/users/' + this.state.userId}>
                    Back
                </Button>
                <Divider />
                <Typography variant="h6">
                    {user.first_name + '\'s'} Photo Gallery:
                </Typography>
                <Divider />
                {this.getPosts(user, photos)}
            </div>
        );
    }
}

export default UserPhotos;
