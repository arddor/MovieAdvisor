import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieInfo extends Component {
  constructor(props){
    super(props);
  }


  render() {
    let {index, results} = this.props;

    let movieInfo = null;
    if (results.length > 0 && results.length > index) {
      let info = results[index];

      movieInfo = (
        <div className="MovieInfo">
          <h1>{info.title}</h1>
          <h3>{info.overview}</h3>
        </div>
      );
    } else {
      // can be removed if the variable movieInfo is null nothing is shown
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
