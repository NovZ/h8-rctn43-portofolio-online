import React from 'react';
import Icon from '../atoms/Icon'
import Title from '../atoms/Title';

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'ABOUT',
            about: `Lee Dong-min (Hangul: 이동민; lahir 30 Maret 1997; umur 23 tahun) lebih dikenal dengan nama panggungnya Cha Eun-woo (Hangul: 차은우) adalah penyanyi dan aktor asal Korea Selatan. Ia merupakan anggota dari grup vokal pria asal Korea Selatan, Astro.
                    Cha Eun-woo lahir pada tanggal 30 Maret 1997, di Gunpo, Provinsi Gyeonggi, Korea Selatan.`,
            link: [
                {
                    type:'fb',
                    account:'http://www.facebook.com'
                },
                {
                    type:'ig',
                    account:'http://www.instagram.com'
                },
                {
                    type:'twitter',
                    account:'http://www.twitter.com'
                }
            ]
        }
    }

    render() {
        return (
            <div id="about" className="content">
                <Title text={this.state.title} />
                <p>{this.state.about}</p>
                <div style={{paddingTop:'20px'}}>
                    {this.state.link.map((acc) => {
                        return (
                            <a href={acc.account} target="_blank"><Icon type={acc.type} /></a>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default About;