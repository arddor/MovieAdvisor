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
    let {currentMovie} = this.props;
    var list = currentMovie.keywords.keywords;
    console.log("list");
    console.log(list[2].name);
    var radius = 100;
    var pi = Math.PI;
    var ll = list.length;

    var elements = [];

    if(ll > 0){
      for (var i = 0; i < ll; i++) {
        var l = 500+radius*Math.cos(2*i*pi/ll);
        var r = 600+radius*Math.sin(2*i*pi/ll);
        elements.push(<button className="btn btn-Lg btn-primary" style={{position:
          'absolute', left: l, top: r}}>{list[i].name}</button>);
        }
      }
      else {
        console.log("ll: "+ ll);

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
