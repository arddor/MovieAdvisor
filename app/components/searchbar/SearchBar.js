import React, {Component} from 'react';
import css from './SearchBar.local.css';
import MovieSelect from './MovieSelect';
import {Button, Panel} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {search} from './../../redux/playlist';
import searchcss from './SearchBar.local.css';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);

    this.state = {
      open: true
    }
  }

  onButtonClick() {
    console.log(this.props.genres);
    this.props.search(this.props.genres, this.props.keywords);
  }

  render() {
    return (
      <div>
        <Button className={searchcss.btnhide} onClick={ ()=> this.setState({ open: !this.state.open })}>Show/Hide Searchpanel</Button>
        <div className="clearfix"></div>
        <Panel header={title} bsStyle="primary" collapsible expanded={this.state.open}>
          <MovieSelect />
          <Button className="btn-block" onClick={this.onButtonClick}>Search</Button>
        </Panel>
      </div>
    );
  }
}
const title = (
  <h3>
    Search your Movies:
  </h3>
);
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
