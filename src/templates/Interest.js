import React from 'react';
import Title from '../atoms/Title';

class Interest extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'INTERESTS',
            hobbies: ['watching movies','listening to music','playing piano']
        }
    }

    render() {
        return (
            <div id="interest" className="content">
                <Title text={this.state.title} />
                <ul>
                {this.state.hobbies.map((hobby) => {
                    return (
                        <li>{hobby}</li>
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default Interest;