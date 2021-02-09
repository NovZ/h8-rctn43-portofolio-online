import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const style = {padding:'3px'}
class Icon extends React.Component {
    render() {
        switch(this.props.type) {
            case 'fb': 
                return (
                    <FontAwesomeIcon icon={faFacebookSquare} size="2x" style={style} ></FontAwesomeIcon>
                )
            case 'ig':
                return (
                    <FontAwesomeIcon icon={faInstagramSquare} size="2x" style={style} ></FontAwesomeIcon>
                )
            case 'twitter':
                return (
                    <FontAwesomeIcon icon={faTwitterSquare} size="2x" style={style} ></FontAwesomeIcon>
                )
            default:
                return (
                    <></>
                )
        }
    }

}

export default Icon;