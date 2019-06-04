import React from 'react';
import Card from './../Card/Card.js';
import { connect } from 'react-redux';
import './CardHolder.css';

export const CardHolder = (props) => {
		const cards = props.pokemon.map(poke => {
			return <Card {...poke} key={poke.id} />
		});
	return (
		<div className="holder">
			{cards}
		</div>
	)
};

export const mapStateToProps = (state) => ({
	pokemon: state.pokemon
});

export default connect(mapStateToProps)(CardHolder)