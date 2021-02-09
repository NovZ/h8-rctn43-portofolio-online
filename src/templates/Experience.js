import React from 'react';
import Title from '../atoms/Title';

class Experience extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'EXPERIENCE',
            exp: [
                {
                    periode:'2013-2015',
                    title:'Awal karier',
                    desc:['Cha memulai debut sebagai aktor dengan peran kecil dalam film My Brilliant Life.',
                        'Pada Agustus 2015, Cha bersama dengan anggota grup lainnya berpartisipasi dalam drama web To Be Continued.']
                },
                {
                    periode:'2016',
                    title:'Debut dengan Astro dan aktivitas solo',
                    desc:['Astro memulai debut pada tanggal 23 Februari 2016 dengan album mini Spring Up. Pada bulan Agustus, Cha berpartisipasai dalam acara varietas spesial Chuseok, Replies That Make Us Flutter. Pada bulan September, ia juga berpartisipasi dalam program pilot Chuseok lainnya, Boomshakalaka.']
                },
                {
                    periode:'2016-2018',
                    title:'MC Show! Music Core dan pemeran drama',
                    desc:['Cha diumumkan sebagai pembawa acara dari Show! Music Core bersama dengan Kim Sae-ron dan Lee Soo-min, dimana ia menjadi pembawa acara dari tahun 2016 hingga tahun 2018. Pada tahun yang sama, ia menjadi bintang dalam drama web My Romantic Some Recipe.',
                        'Pada tahun 2017, Cha menjadi pemeran dalam drama KBS2 Hit the Top. The same year, he starred in the web drama Revenge Note.',
                        'Pada tahun 2018, Cha menjadi pemeran dalam drama web Top Management. Pada tahun yang sama, Cha menjadi pemeran dalam serial komedi romantis JTBC Gangnam Beauty, peran utama pertamanya di televisi.']
                },
                {
                    periode:'2018-Now',
                    title:'Pemeran utama drama serial TV',
                    desc:['Pada tahun 2018, Cha menjadi pemeran utama dalam drama serial JTBC Gangnam Beauty.',
                        'Pada tahun 2019, Cha menjadi pemeran utama dalam drama serial MBC Rookie Historian Goo Hae-ryung.',
                        'Pada tahun 2020 sampai sekarang 2021, Cha menjadi pemeran utama dalam drama serial tvN True Beauty.']
                }
            ]
        }
    }

    render() {
        return (
            <div id="experience" className="content">
                <Title text={this.state.title} />
                {this.state.exp.map((xp) => {
                    return (
                        <div className="card">
                            <div><p><strong>{xp.title}</strong></p></div>
                            <div><p style={{color:'red',fontWeight:'bold'}}>{xp.periode}</p></div>
                            <div>
                                {xp.desc.map((data) => {
                                    return (<p>{data}</p>)
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Experience;