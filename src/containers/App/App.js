import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPokemon, setError, setLoading } from '../../actions';
import CardHolder from './../CardHolder/CardHolder.js';

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
		.catch(error => this.props.setError('you have an error', error))
	}

	storePokemon = (pokemon) => {
		this.props.setPokemon(pokemon)
		this.props.setLoading(false)
	}

	render(props) {
		console.log(this.props)
		const message = this.props.loading && 'your data is loading';
		return (
			<div>
				<h1> Pokemon </h1>
				<h2> {message} </h2>
				<p> {this.props.error} </p>
				<CardHolder />
			</div>
		)
	}
}

export const mapStateToProps = (state) => ({
	error: state.error,
	loading: state.loading
})

export const mapDispatchToProps = (dispatch) => ({
	setPokemon: (pokemon) => dispatch(setPokemon(pokemon)),
	setError: (error) => dispatch(setError(error)),
	setLoading: (bool) => dispatch(setLoading(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)