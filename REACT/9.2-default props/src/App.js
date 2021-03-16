import React from 'react';
import MusicAlbum from './components/MusicAlbum.component'

class App extends React.Component {

  render () {
    return (
			<div className="container">
				<MusicAlbum
					albumTitle="After Hours"
					artistName="The Weekend"
					numberOfSongs="14"
					length="60:00"
					songLink="https://www.youtube.com/watch?v=XXYlFuWEuKI"
				/>
				<MusicAlbum
					albumTitle="חלק מהזמן"
					artistName="עידן עמדי"
					numberOfSongs="10"
					length="60:00"
					songLink="https://www.youtube.com/watch?v=iUMQ1NjHsqY"
				/>
				<MusicAlbum
					albumTitle="Awaken, My Love!"
					numberOfSongs="11"
					songLink="https://www.youtube.com/watch?v=Kp7eSUU9oy8"
				/>
				<MusicAlbum />
			</div>
		); 
  }
}

export default App;
