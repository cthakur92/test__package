import React from 'react';
import ReactDOM from 'react-dom';
import {TestComponent} from "./index";

class TestContainer extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
      return (
        <TestComponent column='2' content={[
          {text: 'text1', color: 'red'},
          {text: 'text2', color: 'blue'},
          {text: 'text3', color: 'green'},
          {text: 'text4', color: 'yellow'},
          {text: 'text5', color: 'black'},
        ]}>
            <span>Test child Component</span>
        </TestComponent>
      );
    }
  }
const wrapper = document.getElementById("test__package");
wrapper ? ReactDOM.render(<TestContainer />, wrapper) : false;