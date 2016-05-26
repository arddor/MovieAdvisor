import React, {Component} from 'react';
import {connect} from 'react-redux';
import Keyword from './Keyword';

class KeywordList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let elements = null;

    if (this.props.currentMovie) {
      let {currentMovie} = this.props;
      let {keywords} = currentMovie.keywords;
      const radius = 440;
      const pi = Math.PI;

      elements = keywords
        .filter((item) => {
          return item.name.length < 13;
        })
        .map((item, index, array) => {
          let l = 300 + radius * Math.cos(2 * index * pi / array.length);
          let t = 300 + radius * Math.sin(2 * index * pi / array.length);

          return  <Keyword name={item.name} id={item.id} left={l} top={t}/>;
        });
    }

    return (
      <div>
        {elements}
      </div>
    );
  }

}


const mapStateToProps = (state) => ({
  ...state.playlist
});

export default connect(mapStateToProps)(KeywordList);
