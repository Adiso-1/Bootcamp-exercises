import React from 'react';
import './MusicAlbum.component.css'

class MusicAlbum extends React.Component {
    render () {
        return (
            <div className="album">
                <div>{this.props.albumTitle}</div>
                <div>{this.props.artistName}</div>
                <div>{this.props.numberOfSongs}</div>
                <div>{this.props.length}</div>
                <a href={this.props.songLink} target='_blank'>Song Link</a>
            </div>
        );
    }
}
MusicAlbum.defaultProps = {
	albumTitle: 'unknown',
	artistName: 'unknown',
	numberOfSongs: 'unknown',
	length: 'unknown',
	songLink: 'https://github.com/Adiso-1',
};

export default MusicAlbum;