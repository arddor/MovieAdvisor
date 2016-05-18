import React, {Component} from 'react';
import css from './SearchBar.local.css';
import MovieSelect from './MovieSelect';
import {Button, Panel, PageHeader} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {search} from './../../redux/playlist';
import searchcss from './SearchBar.local.css';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
    this.onPanelOpen = this.onPanelOpen.bind(this);
    this.state = {
      open: true
    }
  }

  onButtonClick() {
    this.props.search(
      this.props.genres,
      this.props.keywords,
      this.props.actors,
      this.props.yearRange.min,
      this.props.yearRange.max
    );
  }

  onPanelOpen(){
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <Panel header={title} bsStyle="primary" collapsible expanded={this.state.open}
               className={this.state.open ? searchcss.panelOpen : searchcss.panelClosed} onClick={this.onPanelOpen}>
          <MovieSelect />
          <Button className="btn-block" onClick={this.onButtonClick}>Search</Button>
        </Panel>
      </div>
    );
  }
}
const title = (
  <h1 className={searchcss.title}>Movie Advisor <div className={searchcss.smallTitle}>Search your movies</div></h1>
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
