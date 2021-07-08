import React from "react";
import { connect } from "react-redux";
import Display from '../components/Display'
function SearchResults(props) {
	const { search } = props;

	console.log(props);
	let ele = []
	return (
		<div className="container">
			{search.map((item, id) => (
				<Display key={id} item={item}/>
			))}
		</div>
	);
}

const mapStateToProps = (state) => ({
	search: state.search,
});

export default connect(mapStateToProps, {})(SearchResults);
