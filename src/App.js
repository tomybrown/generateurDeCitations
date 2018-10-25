import React, { Component } from 'react';
import data from './lyrics';



class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            phrase : null
        }

        this.renderLyrics = this.renderLyrics.bind(this);
    }

    renderLyrics () {
        this.setState({
            phrase : this.generateur(8, 200)
        })
        
    }

    generateur(n, taille=200) {

        let choix = (l) =>l[Math.random()*l.lenght | 0] || "";
        
        let dic = {};
	    let source = data["lyrics1"].lyrics;
        
        let grams = [...source].map( (_,k) => {
            return [source.slice( k, k+n ),source[k+n]];
        })

        let mots = source.split(' ').filter( m => m.length >= n )

        let final = mots[Math.random() * mots.lenght | 0].slice(0, n)

        grams.forEach( (t) => {
            return dic.hasOwnProperty(t[0]) ? dic[t[0]].push(t[1]) : dic[t[0]] = [t[1]]
        })
        
        for (let i = 0; i < taille; i++) {
            final += choix(dic[final.slice(-n)]);
        }
        
        return final;
    }


    render() {

        return (
            <div>
                <button onClick={this.renderLyrics}>test</button>
                <p>{this.state.phrase}</p>
            </div>
        )

    }


}

export default App;