import React from 'react';
import Title from '../atoms/Title';

class Skill extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'SKILLS',
            skills: ['singing','acting','socializing','basketball','MC-ing','fluttering']
        }
    }

    render() {
        return (
            <div id="skill" className="content">
                <Title text={this.state.title} />
                <ul>
                {this.state.skills.map((skill) => {
                    return (
                        <li>{skill}</li>
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default Skill;