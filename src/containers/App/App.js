import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPokemon } from '../../actions';

export class App extends Component {
	constructor() {
		super()
		this.state = {
			pokemon: []
		}
	}

	componentDidMount = () => {
		fetch('http://localhost:3001/pokemon')
		.then(response => response.json())
		.then(pokemon => this.storePokemon(pokemon))
		.catch(error => console.log(error))
	}

	storePokemon = (pokemon) => {
		console.log(pokemon)
		this.props.setPokemon(pokemon)
	}

	render() {
		return (
			<div>
			hello
			</div>
		)
	}
}

export const mapDispatchToProps = (dispatch) => ({
	setPokemon: (pokemon) => dispatch(setPokemon(pokemon))
})

export default connect(null, mapDispatchToProps)(App)