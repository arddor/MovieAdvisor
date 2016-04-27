import React from 'react';
import InputRange from 'react-input-range';
import css from 'react-input-range/dist/react-input-range.css';

class YearSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        min: 2000,
        max: 2005,
      },
    };
  }

  handleValuesChange(component, values) {
    this.setState({
      values: values,
    });
  }

  render() {
    return (
      <InputRange
        maxValue={2016}
        minValue={1950}
        value={this.state.values}
        onChange={this.handleValuesChange.bind(this)}
      />
    );
  }
}
export default YearSlider;
