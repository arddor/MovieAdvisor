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
    this.setState({open: false});
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
    const title = (
      <h1 className={searchcss.title} onClick={this.onPanelOpen}>Movie Advisor <div className={searchcss.smallTitle}>Search your movies</div></h1>
    );

    return (
      <div className={searchcss.searchbar}>
        <Panel header={title} collapsible expanded={this.state.open}
               className={searchcss.panel}>
          <MovieSelect />
          <Button className="btn-block" onClick={this.onButtonClick} style={{marginBottom: '15px'}}>Search</Button>
        </Panel>
        <div className={this.state.open ? searchcss.open : searchcss.closed} onClick={this.onPanelOpen}></div>
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
