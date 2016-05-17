import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieInfo extends Component {
  constructor(props){
    super(props);
  }


  render() {
    /*const hotlist = this.props.hotlist.map(item => {
      return <h5>{item}</h5>;
    });*/
    var movieTitle;
    if (this.props.results[0] == null) {
      this.props.results[0] =
    }

    var indexLoc = this.props.index;
    //var rating =  'asdfsad';//this.props.results[indexLoc].;

    return (
      <div className="MovieInfo">
        <h1>{this.props.results[indexLoc].title}</h1>
        <h3>{this.props.results[indexLoc].overview}</h3>
      </div>
    );
    /*return (
      <div className="MovieInfo">
        <h1>{rating}</h1>
        <h3>{rating}</h3>
      </div>
    );*/
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
