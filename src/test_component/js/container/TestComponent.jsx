import React from 'react';
require('./../../css/test_component.scss');

class TestComponent extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    let {props} = this;
    return (
      <div className={props.className + ' test-component'} >
        <div></div>
        {this.props.children}
      </div>
    );
  }
}
TestComponent.defaultProps = {
  className: ''
};
export default TestComponent;