import React, {Component} from 'react';
import YouTube from 'react-youtube';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {next} from '../../redux/playlist';

const opts = {
  playerVars: {
    autoplay: 1
  }
};

class Youtube extends Component {
  constructor(props){
    super(props);

    this.onPlaybackEnd = this.onPlaybackEnd.bind(this);
  }

  onPlaybackEnd(){
    this.props.next();
  }

  render() {
    return (
      <YouTube
        videoId={this.props.id}
        opts={opts}
        onEnd={this.onPlaybackEnd}
      />
    );
  }
}

Youtube.defaultProps = {
  id: "daFnEiLEx70"
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({next}, dispatch)
};

export default connect(null, mapDispatchToProps)(Youtube);
