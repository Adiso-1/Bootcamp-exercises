import React from 'react';
import unsplash from '../api/unsplash';
// import axios from 'axios'; // 3rd part will be above components
import SearchBar from './SearchBar';

class App extends React.Component {
	state = { images: [] }; // implying to get an array, also can make loop on empty array

	onSearchSubmit = async (term) => {
		const response = await unsplash.get(
			'https://api.unsplash.com/search/photos',
			{
				params: { query: term },
			}
		);
		this.setState({ images: response.data.results });
	};
	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				Found:{this.state.images.length} images
			</div>
		);
	}
}

export default App;
