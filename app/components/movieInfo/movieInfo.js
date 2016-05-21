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
      if (currentMovie.budget)
        budget = this.getBudget();

      movieInfo = (
        <Panel header={<h1>{currentMovie.title}</h1>}>
          <div className="MovieInfo">
            <h5>{currentMovie.overview}</h5>
            {budget}
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
