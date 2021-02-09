import React from 'react';
import Title from '../atoms/Title';

class Education extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'EDUCATION',
            edu: [
                {
                    periode:'~2016',
                    degree:'Senior High School',
                    institution: 'Hanlim Multi Art School'
                },
                {
                    periode:'Now',
                    degree:'University',
                    institution: 'Universitas Sungkyunkwan, jurusan Seni Penampilan'
                }
            ]
        }
    }

    render() {
        return (
            <div id="education" className="content">
                <Title text={this.state.title} />
                {this.state.edu.map((ed) => {
                    return (
                        <div className="card">
                            <div><p><strong><span style={{color:'red',fontWeight:'bold'}}>{ed.periode}</span> : {ed.degree}</strong></p></div>
                            <div><p><strong>{ed.institution}</strong></p></div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Education;