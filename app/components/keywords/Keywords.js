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
  //  this.getCircleCoordinates();
    let {currentMovie} = this.props;
    var provList = currentMovie.keywords.keywords;
    var radius = 440;
    var pi = Math.PI;
    var list = [];
    var elements = [];

    for(var i = 0; i < provList.length; i++) {
      
      if(provList[i].name.length < 13) {
        list.push(provList[i]);
      }
    }

    var ll = list.length;

    if(ll > 0){
      for (var i = 0; i < ll; i++) {
        var l = 300+radius*Math.cos(2*i*pi/ll);
        var r = 300+radius*Math.sin(2*i*pi/ll);
        elements.push(<div className="keywordCircle" style={{position:
          'absolute', left: l, top: r}}>{list[i].name}</div>);
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
