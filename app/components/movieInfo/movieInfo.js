import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import {connect} from 'react-redux';

class MovieInfo extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let {currentMovie} = this.props;
    let movieInfo = null;

    if(currentMovie){
      movieInfo = (
        <Panel header={<h1>{currentMovie.title}</h1>}>
          <div className="MovieInfo">
            <h3>{currentMovie.overview}</h3>
          </div>
        </Panel>
      );
    } else {
      movieInfo = <div>NOTHING FOUND</div>
    }

    return (
      <div>
        {movieInfo}
      </div>
    );
  }
}

MovieInfo.defaultProps = {
  title: 'Please chose a movie',
  overview: '',
  index: 0
};

const mapStateToProps = (state) => ({
  ...state.playlist
});

export default connect(mapStateToProps)(MovieInfo);
