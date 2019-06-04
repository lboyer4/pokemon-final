import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPokemon, setError, setLoading } from '../../actions';
import CardHolder from './../CardHolder/CardHolder.js';
import './App.css';

export class App extends Component {

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
		const message = this.props.loading && 'your data is loading';
		const giphy = this.props.loading && <img src="https://66.media.tumblr.com/c99a579db3ae0fc164bf4cca148885d3/tumblr_mjgv8kEuMg1s87n79o1_400.gif" alt="running pokemon" />
		return (
			<div className="main">
				<header>
					<h1> Pokemon: Gotta Catch 'em All </h1>
				</header>
				<h2> {message} </h2>
				{giphy}
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