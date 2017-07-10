import React from 'react';


    class MorePokeInfo extends React.Component{
        state = {
            onOff : false,
            pokemonDetails : [],
        }
        componentDidMount(){
            fetch(this.props.details.url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    pokemonDetails : this.state.pokemonDetails.concat(data)
                });
            });
        }
        handleBtnClick = () => {
            this.setState({
                onOff : !this.state.onOff
            });
        }
        renderDetails = () => {
            return this.state.pokemonDetails.map(a => {
                return (
                        <div key={a.name}>
                            <p key={a.name}>base experience: {a.base_experience}</p>
                            {a.abilities.map(a => <p key={a.ability.name}>ability: {a.ability.name}</p>)}
                            {a.types.map(a => <p key={a.type.name}>type: {a.type.name}</p>)}
                            <img src={a.sprites.back_default} />
                        </div>
                )
            })
        }
        render(){
            return(
                <div className="moreInfo">
                    <button onClick={this.handleBtnClick}>More Info!</button>
                    {this.state.onOff ? this.renderDetails() : ''}
                </div>
            )
        }
    }

export default MorePokeInfo;
