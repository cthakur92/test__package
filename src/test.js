import React from 'react';
import ReactDOM from 'react-dom';
// const __t = require('./../dist/lib.js');
// import {TestComponent} from "./../dist/lib.js";
import {TestComponent} from "./index.js";

require('bootstrap/dist/css/bootstrap.css');
class TestContainer extends React.Component {
    constructor(props) {
      super(props);
      this._test_content = [];
      window._TestComponent = TestComponent;
      // window.__t = __t;
    }
    render(){
      this._test_content = [
        {text: 'text1', color: '#66A0B9'},
        {text: 'text2', color: '#436f82'},
        {text: 'text3', color: '#92bed2'},
        {text: 'text4', color: '#b3ceda'},
        {text: 'text5', color: '#1c87b7'},
      ];
      return (
        <TestComponent column='2' content={this._test_content}>
            <span>Test child Component</span>
        </TestComponent>
      );
    }
  }
const wrapper = document.getElementById("test__package");
wrapper ? ReactDOM.render(<TestContainer />, wrapper) : false;