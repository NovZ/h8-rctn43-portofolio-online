import React from 'react';
import Title from '../atoms/Title';

class Award extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'AWARDS',
            award: [
                {
                    periode:'2017',
                    penghargaan:'MTN Broadcast Advertising Festival',
                    kategori: 'CF Male Star Award',
                    hasil: 'menang'
                },
                {
                    periode:'',
                    penghargaan: 'Aktor Baru Terbaik',
                    kategori:'Korea Drama Awards',
                    hasil: 'menang'
                },
                {
                    periode:'',
                    penghargaan: 'Penghargaan Selebritas Hallyu',
                    kategori:'Korea Drama Awards',
                    hasil: 'menang'
                }
            ]
        }
    }

    render() {
        return (
            <div id="award" className="content">
                <Title text={this.state.title} />
                {this.state.award.map((awd) => {
                    return (
                        <div className="card" style={{width:'35%', display:'inline-block'}}>
                            <p><strong>{awd.kategori}</strong> <span>{awd.periode!=='' ? `(${awd.periode})` :''}</span></p>
                            <p>{awd.penghargaan}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Award;