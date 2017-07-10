import React from 'react';
import MorePokeInfo from './MorePokeInfo.jsx';
import Pokemon from './Pokemon.jsx';
import Search from './Search.jsx';

// import pokeball from '../pokeball.gif';

    class PokeList extends React.Component{
        state = {
            name : '',
        };
        componentDidMount() {
            fetch('https://pokeapi.co/api/v2/pokemon/')
                .then( response => response.json() )
                .then( data => {
                    if(!data.results || data.results.length < 1){
                        this.setState({
                            name : "Nie odnaleziono pokemonów",
                        });
                    } else {
                        const pokemon = data.results.map( pokemon => {
                          console.log('pokemon', pokemon);
                            return (
                                <Pokemon key={pokemon.name} name={pokemon.name} details={pokemon}/>
                            )
                        });
                        this.setState({
                            name : pokemon,
                        });
                    }
                });
        }
        render(){
            console.log('name', this.state.name);
            return (
                <div>
                    <Search pokemons={this.state.name}/>
                    <ul>{this.state.name}</ul>
                </div>
            )
        }
    }

export default PokeList;
