import React from 'react';

class ProfilePic extends React.Component {
  render() {
    return (<img className="profile-pic" src={this.props.src} alt="profile-pic" />) 
  }
}

export default ProfilePic;