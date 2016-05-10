import React, {Component} from 'react';
import css from './SearchBar.local.css';
import YearSlider from './YearSlider';
import MovieSelect from './MovieSelect';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {search} from './../../redux/playlist';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(){
    console.log(this.props.genres);
    this.props.search(this.props.genres, this.props.keywords);
  }

  render() {
    return (
      <div>
        <h1 className={css.div}>{this.props.text}</h1>
        <MovieSelect />
        <YearSlider />
        <Button onClick={this.onButtonClick}>Search</Button>
      </div>
    );
  }
}

SearchBar.defaultProps = {
  text: 'Search Here:'
};

const mapStateToProps = (state) => ({
  ...state.search
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({search}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
