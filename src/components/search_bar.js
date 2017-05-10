import React, { Component } from 'react';

//functional component 
// const SearchBar = () => {
// 	return <input />;
// };

//class-based component
class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: '' };
	}


	render() {
		return( 
			<div>
				<input 
					value = {this.state.term}
					//always use setState never just set value like in constructor
					onChange = {event => this.setState({ term: event.target.value })} />
			</div>
		);
	}

}

export default SearchBar;