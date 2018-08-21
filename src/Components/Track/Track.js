import React, {Component} from 'react';
import './TrackList.css';


class Track extends Component{
  render(){
    renderAction(){
      if(this.props.isRemoval = true){
        return <a className = "Track-action"> - </a>
      }else{
        return <a className = "Track-action"> + </a>
      }
    };

    return
    <div className="Track">
    <div className="Track-information">
      <h3><!-- track name will go here --></h3>
      <p><!-- track artist will go here--> | <!-- track album will go here --></p>
    </div>
      <a className="Track-action">{this.renderAction}</a>
    </div>
  }
}

export default Track;
