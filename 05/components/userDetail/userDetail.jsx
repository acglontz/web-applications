import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
     Divider,
     Typography,
     Button
 } from '@material-ui/core';
 import './userDetail.css';
 import FetchModel from "../../lib/fetchModelData";

 /**
  * Define UserDetail, a React component of project #5
  */
 class UserDetail extends React.Component {
     constructor(props) {
         super(props);

         this.state = {
             user: null,
             error: null,
             isLoading: true
         };
     }

     componentDidMount() {
         // Fetch the user data from the server
         FetchModel(`/api/users/${this.props.match.params.userId}`)
             .then(res => res.json())
             .then(
                 result => {
                     // Set the state with the user data
                     this.setState({
                         user: result,
                         isLoading: false
                     });
                 },
                 error => {
                     // Set the state with the error message
                     this.setState({
                         error,
                         isLoading: false
                     });
                 }
             );
     }

     render() {
         const { user, error, isLoading } = this.state;

         if (isLoading) {
             return <div>Loading...</div>;
         }

         if (error) {
             return <div>Error: {error.message}</div>;
         }

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
