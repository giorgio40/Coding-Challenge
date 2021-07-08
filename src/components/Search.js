import React from "react";
import { connect } from "react-redux";
import { searchNews, fetchNews } from "../actions/SearchActions";
import SearchResults from "../components/SearchResults";
class Search extends React.Component {
	handleChange = (e) => {
		console.log("here");

		this.props.searchNews(e.target.value);
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.fetchNews(this.props.text);
		console.log(this.props.text);
	};
	0;

	render() {
		return (
			<>
				<div>
					<form onSubmit={this.onSubmit}>
						<input
							type="text"
							placeholder="Search"
							onChange={this.handleChange}
						/>

						<div>
							<button></button>
						</div>
					</form>
				</div>

				<SearchResults />
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	text: state.text
});

export default connect(mapStateToProps, { searchNews, fetchNews })(Search);
