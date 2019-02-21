import React from 'react';
import ReactDOM from 'react-dom';
import {TestComponent} from "./index";

class TestContainer extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
      return (
        <TestComponent>
            <span>Test child Component</span>
        </TestComponent>
      );
    }
  }
const wrapper = document.getElementById("test__package");
wrapper ? ReactDOM.render(<TestContainer />, wrapper) : false;