import React from 'react';
import InputRange from 'react-input-range';
import {connect} from 'react-redux';
import {updateYearRange} from './MovieSelectDucks';
import {bindActionCreators} from 'redux';

import css from 'react-input-range/dist/react-input-range.css';

var sliderStyle={
  margin: '40px 0px'
}

class YearSlider extends React.Component {
  constructor(props) {
    super(props);

    this.handleValuesChange = this.handleValuesChange.bind(this);
  }

  handleValuesChange(component, values) {
    this.props.updateYearRange(values);
  }

  render() {
    return (

      <div class="col-xs-6" style={sliderStyle}>
        <h3 className="section-heading">Year Range</h3>
        <InputRange
          maxValue={2016}
          minValue={1950}
          value={this.props.yearRange}
          onChange={this.handleValuesChange}
        /></div>
    );
  }
}

const mapStateToProps = (state) => ({
  yearRange: state.search.yearRange
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({updateYearRange}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(YearSlider);
