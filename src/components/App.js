
import React from 'react';
//import data from '../lyrics';
import generateur from '../crealyrics';




class App extends React.Component {

    state = {
        lyrics: 'En cliquant sur le bouton ci-dessous, tu vas pouvoir générer une composition de textes.',
        auteur: 'La Chaise'
    };

    componentDidMount() {
        //this.creatlyrics();
        console.log(generateur(1));
    }

      render() {
        return (
            <div>
             <p>
             {this.state.lyrics}
                <span>- {this.state.auteur}</span>
            </p>
            <button onClick={event => this.creatlyrics(event)}> > Click</button>
            </div>
        )
    }
}
















/*

class AppOLD extends React.Component {

        state = {
            lyrics: 'En cliquant sur le bouton ci-dessous, tu vas pouvoir générer une composition de textes.',
            auteur: 'La Chaise'
        };
    
        componentDidMount() {
            this.creatlyrics();
        }
    
        creatlyrics = event => {
            // On transforme les citations en Array
            const keyArray = Object.keys(lyrics);
            // Une Citation au hasard
            const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
            if (this.state.lyrics === lyrics[randomKey].lyrics) {
                this.creatlyrics();
                return;
            }
            this.setState(lyrics[randomKey]);
        };
    
          render() {
            return (
                <div>
                 <p>
                 {this.state.lyrics}
                    <span>- {this.state.auteur}</span>
                </p>
                <button onClick={event => this.creatlyrics(event)}> > Click</button>
                </div>
            )
        }
    }
    */
    export default App;






















