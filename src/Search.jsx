import React, {Component} from 'react'
import Pokemon from './Pokemon.jsx'

export default class Search extends Component{
    state = {
        name : "",
        s: ''
    }
    handleNameChange = event => {
        this.setState({
            name : event.target.value,
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.pokemons.map(pokemon => {
          console.log('helllll', pokemon.key, this.state.name.toLowerCase());
            if(pokemon.key === this.state.name.toLowerCase()) {
                this.setState({s: this.state.name.toLowerCase()})
            }else {
                this.setState({s: 'no pokemon'})
            }
        });
    }

    render(){
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input
                        type="text"
                        value={this.state.name}
                        placeholder="Search Pokemon by name:"
                        onChange={this.handleNameChange}/>
                    <button type='submit'>Search</button>
                </label>
            </form>
            {this.state.s}
      </div>
        )
    }
}
