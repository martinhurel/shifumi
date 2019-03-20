import React, { Component } from 'react';
import Shifumi from './Shifumi';

class ShifumiContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null,
      computer: null,
      round: 0,
      tie: 0,
      playerScore: 0,
      computerScore: 0
    }
  }

  inputChoice(choice) {
    this.setState(() => {
      return {
        player: choice,
        computer: ["pierre", "papier", "ciseaux"][Math.floor(Math.random()*3)],
        round: this.state.round + 1
      }
    }, () => this.compareChoice())
  };

  compareChoice() {
    let computer = this.state.computer
    let player = this.state.player
  
    if (
        (player === 'pierre' && computer === 'ciseaux')
        || (player === 'papier' && computer === 'pierre')
        || (player === 'ciseaux' && computer === 'papier')
      ) {
        this.setState({
          playerScore: this.state.playerScore + 1
        }, () => console.log(this.state.playerScore))
      }
      else if ( player !== computer) {
        this.setState({
          computerScore : this.state.computerScore + 1
        }, () => console.log(this.state.computerScore))
      }
      else if (this.state.computerScore >= '2'){
        alert('L\'Ordi Gagne la partie')
      }
      else if (this.state.playerScore >= '2'){
        alert('Le joueur gagne la partie')
      }
    }
   render() {
     return (
       <div className="container">
         <div className="chooseBox">
           <button onClick={()=>this.inputChoice('papier')}>Feuille</button>
           <button onClick={()=>this.inputChoice('pierre')}>Pierre</button>
           <button onClick={()=>this.inputChoice('ciseaux')}>Ciseaux</button>
           <br></br>
         </div>
  
         <div className="scoreBoard">
           <div>Player : {this.state.player}</div>
           <div>Ordi : {this.state.computer}</div>
            <br></br>
           <div>Score du Joueur : {this.state.playerScore}</div>
           <div>Score de l'Ordi : {this.state.computerScore}</div> 
        </div>
        <div className="">
          <p> Jeux n°: {this.state.round}</p>
        </div>
       </div>
     );
   }  
  }
export default ShifumiContainer;
