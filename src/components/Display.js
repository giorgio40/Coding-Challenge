import React from "react";
import { connect } from "react-redux";

function Display(props) {
	const { search } = props;

	console.log(props)

	return (
		<>
			<div>
				<p className="title"> Title: {props.item.title}</p>
				<p className="author">Author: {props.item.author}</p>
			   <p className="url" ><a> Link: {props.item.url}</a></p>	
			</div>
		</>
	);
}

const mapStateToProps = (state) => ({
	search: state.search,
});

export default connect(mapStateToProps, {})(Display);
