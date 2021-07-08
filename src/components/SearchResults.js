import React from "react";
import { connect } from "react-redux";

function SearchResults(props) {
	const { search } = props;

	console.log(props);

	return (
		<div>
			{search.map((item, id) => 
				<div>
					<h4 key={id}></h4>
					<p> {item.title}</p>
					<p>{item.author}</p>
					<p>{item.comment_text}</p>
					<p>{item.story_title}</p>
					<p>{item.story_url}</p>
					<p></p>
				</div>
			)}
		</div>
	);
}

const mapStateToProps = (state) =>( {
	
		search: state.search,
	
});

export default connect(mapStateToProps, {})(SearchResults);
