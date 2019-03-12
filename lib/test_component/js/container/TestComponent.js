var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import loading from './../../../images/loading.png';
require('./../../css/test_component.css');

var TestComponent = function (_React$Component) {
  _inherits(TestComponent, _React$Component);

  function TestComponent(props) {
    _classCallCheck(this, TestComponent);

    var _this = _possibleConstructorReturn(this, (TestComponent.__proto__ || Object.getPrototypeOf(TestComponent)).call(this, props));

    Object.defineProperty(_this, 'getGrid', {
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            column = _this$props.column,
            content = _this$props.content;

        var cellCount = content.length;
        _this.grid = [];
        for (var i = 0; i < cellCount; i = i + column) {
          _this.grid.push(_this.getRows(content.slice(i, i + column), i));
        }
        return _this.grid;
      }
    });
    Object.defineProperty(_this, 'getRows', {
      enumerable: true,
      writable: true,
      value: function value(columns, i) {
        var column = _this.props.column;

        var cls_column = 'col-md-' + Math.floor(12 / column);
        return React.createElement(
          'div',
          { className: 'row', key: 'row__' + i },
          columns.reduce(function (arrCol, col, j) {
            arrCol.push(_this.getCell(col, cls_column, j));
            return arrCol;
          }, [])
        );
      }
    });
    Object.defineProperty(_this, 'getCell', {
      enumerable: true,
      writable: true,
      value: function value(param, cls, j) {
        return React.createElement(
          'div',
          { className: cls, key: 'col_' + j, style: { backgroundColor: param.color } },
          param.text
        );
      }
    });
    return _this;
  }

  _createClass(TestComponent, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      return React.createElement(
        'div',
        { className: props.className + ' test-component container' },
        this.getGrid(),
        React.createElement(
          'span',
          null,
          'Test image:'
        ),
        React.createElement(
          'span',
          null,
          React.createElement('img', { src: loading })
        ),
        props.children
      );
    }
  }]);

  return TestComponent;
}(React.Component);

TestComponent.defaultProps = {
  column: 1,
  content: [],
  className: ''
};
export default TestComponent;