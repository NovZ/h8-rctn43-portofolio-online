import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../atoms/ProfilePic';
import profpic from '../img/cew.jpg'

class SideNav extends React.Component {
  render() {
    return (
        <div className="sidenav">
            <ProfilePic src={profpic} />
            <Link to="/about">ABOUT</Link>
            <Link to="/experience">EXPERIENCE</Link>
            <Link to="/education">EDUCATION</Link>
            <Link to="/skill">SKILLS</Link>
            <Link to="/interest">INTERESTS</Link>
            <Link to="/award">AWARDS</Link>
        </div>
    )
  }
}

export default SideNav;