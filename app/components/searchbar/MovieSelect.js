import React from 'react';
import Select from 'react-select';
import {Row, Col} from 'react-bootstrap'
import YearSlider from './YearSlider'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ApiActionCreators from './MovieSelectDucks.js';

import {getGenres, getKeywords, getActors, discoverWithVideo} from '../../utils/api';

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
      <Row>
        <Col xs={12}>
          <Row>
            <Col sm={6}>
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
            </Col>
            <Col sm={6}>
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
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <div className="section">
                <h3 className="section-heading">Include Actor</h3>
                <Select.Async
                  multi name="form-field-name"
                  matchPos="start"
                  value={this.props.actors}
                  placeholder="Select your favourite"
                  onChange={this.handleActorChange}
                  loadOptions={getActors}
                />
              </div>
            </Col>
            <Col sm={6}>
              <YearSlider />
            </Col>
          </Row>
        </Col>
      </Row>
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
