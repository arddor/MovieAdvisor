import React, {Component} from 'react';
import {Panel, Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';


class MovieInfo extends Component {
  constructor(props) {
    super(props);
  }


  getBudget() {
    return (<div><Glyphicon glyph="euro"/> {this.props.currentMovie.budget}</div>);
  }



  render() {
    let {currentMovie} = this.props;
    let movieInfo = null;
    let budget = null;
    if (currentMovie) {
      if (currentMovie.budget) {
        var title = currentMovie.title;
        var info = currentMovie.overview;
    } else {
        var title = " ";
        var info = " ";
    }
}

    return (
      <div>
        <div className="movieTitle">{title}</div>
        <div className="movieDescription">{info}</div>
        <div className="movieBudget">{budget}</div>
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
