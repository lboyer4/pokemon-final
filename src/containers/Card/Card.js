import React from 'react';
import { connect } from 'react-redux'

export const Card = (props) => {
	console.log(props)
 const { name, weight, sprites } = props

	return (
	
		<div>
			<h2> {name} </h2>
			<h4> {weight} </h4>
			<img src="sprites" />
		</div>
	)
}

export const mapStateToProps = (state) => ({
	loading: state.loading
})

export default connect(mapStateToProps)(Card)