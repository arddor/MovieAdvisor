import React from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ApiActionCreators from './MovieSelectDucks.js';

import {getGenres, getKeywords, getActors} from '../../utils/api';

var MovieSelect = React.createClass({
  displayName: 'MultiSelectField',
  propTypes: {
    label: React.PropTypes.string
  },

  handleGenreChange (e) {
    if (e == null) this.props.updateGenre([]);
    else this.props.updateGenre(e);
  },
  handleKeywordsChange (e){
    if (e == null) this.props.updateKeyword([]);
    else this.props.updateKeyword(e);
  },
  handleActorChange (e){
    if (e == null) this.props.updateActor([]);
    else this.props.updateActor(e);
  },
  render()
  {
    return (
      <div class="row">
        <div class="col-xs-6">
          <div className="section">
            <h3 className="section-heading">Genre</h3>
            <Select.Async
              multi name="form-field-name"
              matchPos="start"
              value={this.props.genres}
              placeholder="Select your favourite"
              onChange={this.handleGenreChange}
              loadOptions={getGenres}
            />
          </div>
        </div>
        <div class="col-xs-6">
          <div className="section">
            <h3 className="section-heading">Keyword</h3>
            <Select.Async
              multi name="form-field-name"
              matchPos="start"
              value={this.props.keywords}
              placeholder="Select your favourite"
              onChange={this.handleKeywordsChange}
              loadOptions={getKeywords}
            />
          </div>
        </div>
        <div class="col-xs-6">
          <div className="section">
            <h3 className="section-heading">Exclude Actor</h3>
            <Select.Async
              multi name="form-field-name"
              matchPos="start"
              value={this.props.actors}
              placeholder="Select your favourite"
              onChange={this.handleActorChange}
              loadOptions={getActors}
            />
          </div>
        </div>
      </div>
    );
  }
});
const mapStateToProps = (state) => ({
  ...state.search
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ApiActionCreators, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSelect);
