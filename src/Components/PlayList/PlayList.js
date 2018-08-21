import React, {Component} from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList.js'

class PlayList extends Component{
  render(){
    return
    <div className="Playlist">
      <input defaultvalue={'New Playlist'}/>
      <TrackList />
      <a className="Playlist-save">SAVE TO SPOTIFY</a>
    </div>
  }
}

export default PlayList;
