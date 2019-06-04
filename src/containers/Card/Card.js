import React from 'react';
import { connect } from 'react-redux';
import './Card.css';

export const Card = (props) => {
	console.log(props)
 const { name, weight, sprites } = props

	return (
	
		<article>
			<h2> Name: {name} </h2>
			<h4> Weight: {weight} kg </h4>
			<img src="{sprites}" />
		</article>
	)
}

export const mapStateToProps = (state) => ({
	loading: state.loading
})

export default connect(mapStateToProps)(Card)