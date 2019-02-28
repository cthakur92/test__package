var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import ReactDOM from 'react-dom';
// const __t = require('./../dist/lib.js');
// import {TestComponent} from "./../dist/lib.js";
import { TestComponent } from "./index.js";

require('bootstrap/dist/css/bootstrap.css');

var TestContainer = function (_React$Component) {
  _inherits(TestContainer, _React$Component);

  function TestContainer(props) {
    _classCallCheck(this, TestContainer);

    var _this = _possibleConstructorReturn(this, (TestContainer.__proto__ || Object.getPrototypeOf(TestContainer)).call(this, props));

    _this._test_content = [];
    window._TestComponent = TestComponent;
    // window.__t = __t;
    return _this;
  }

  _createClass(TestContainer, [{
    key: 'render',
    value: function render() {
      this._test_content = [{ text: 'text1', color: '#66A0B9' }, { text: 'text2', color: '#436f82' }, { text: 'text3', color: '#92bed2' }, { text: 'text4', color: '#b3ceda' }, { text: 'text5', color: '#1c87b7' }];
      return React.createElement(
        TestComponent,
        { column: '2', content: this._test_content },
        React.createElement(
          'span',
          null,
          'Test child Component'
        )
      );
    }
  }]);

  return TestContainer;
}(React.Component);

var wrapper = document.getElementById("test__package");
wrapper ? ReactDOM.render(React.createElement(TestContainer, null), wrapper) : false;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TestContainer, 'TestContainer', 'src/test.js');

  __REACT_HOT_LOADER__.register(wrapper, 'wrapper', 'src/test.js');
}();

;