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
    var list = [];
    var radius = 100;
    var pi = Math.PI;

    getMovieKeywords(movieId)
    .then(function(result){

      list = result.keywords;
      ll = list.length;

    });

      if (ll > 0) {
        for (var i = 0; i < ll; i++) {
        var l =1150 + radius*Math.cos(2*i*pi/ll);
        var r =560 + radius*Math.sin(2*i*pi/nn);
        elements.push(<button className="btn btn-Lg btn-primary" style={{position:
          'absolute', left: l, top: r}}>{list[i].name}</button>);
        }
      }
      else {
        console.log("ll: "+ll);

          elements.push(<button className="btn btn-Lg btn-primary" style={{position:
            'absolute', left: l, top: r}}>"fuck you"</button>);
        }


      return(
        <div>
          {elements}
        </div>

      );
    }

    }


  const mapStateToProps = (state) => ({
    ...state.playlist
  });

  export default connect(mapStateToProps)(Keyword);
