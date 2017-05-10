import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
const API_KEY = 'reobtain from online';


//create a component
// const App = () => {
// 	return (
// 		<div>
// 			<SearchBar />
// 		</div>
// 	);
// };

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	};


	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

//place in DOM
ReactDOM.render(<App />, document.querySelector('.container'));


