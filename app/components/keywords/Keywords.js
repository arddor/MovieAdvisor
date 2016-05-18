import React from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import css from './Keywords.local.css';
import {getMovieKeywords} from '../../utils/api';

export default class Keyword extends React.Component {

  constructor(props){
    super(props);

  }

  render() {

    var currInd = this.props.index;
    var movieId = this.props.results[currInd].id;
    var elements = [];
    var ll = 0; //list length -> initialized here only to show that when return() is called, it is still 0

    getMovieKeywords(movieId)
    .then(function(result){

      var list = result.keywords;
      ll = list.length;

      var radius = 100;
      var pi = Math.PI;

      console.log("length: "+ll);
      for (var i = 0; i < ll; i++) {
      var l =1150 + radius*Math.cos(2*i*pi/ll);
      var r =560 + radius*Math.sin(2*i*pi/nn);
      elements.push(<button className="btn btn-Lg btn-primary" style={{position:
        'absolute', left: l, top: r}}>{list[i].name}</button>);
        console.log(list[i].name);
      }

      });

      return(

        <div id="keyword-circle">
          <p>list length: {ll}</p>
          {elements}
        </div>

      );
    }

    }


  const mapStateToProps = (state) => ({
    ...state.playlist
  });

  export default connect(mapStateToProps)(Keyword);
