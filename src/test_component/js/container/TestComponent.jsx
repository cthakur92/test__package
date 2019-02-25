import React from 'react';
require('./../../css/test_component.scss');
import loading from './../../../../images/loading.png';
class TestComponent extends React.Component {
  constructor(props) {
    super(props);

  }
  getGrid = () =>{
    let {column, content} = this.props;
    let cellCount = content.length;
    this.grid = [];
    for(let i=0; i< cellCount; i=(i+column)){
      this.grid.push(this.getRows(content.slice(i, i+column)));
    }
    return this.grid;
  }
  getRows = (columns) => {
    let {column} = this.props;
    let cls_column = 'col-md-'+Math.floor(12/column);
    return (
      <div className='row'>
        {
          columns.reduce((arrCol,col)=>{
            arrCol.push(this.getCell(col, cls_column));
            return arrCol;
          },[])
        }
      </div>
    );
  }
  getCell = (param, cls) => {
    return (
      <div className={cls} style={{backgroundColor: param.color}}>
        {param.text}
      </div>
    );
  }
  render(){
    let {props} = this;
    return (
      <div className={props.className + ' test-component'} >
        {this.getGrid()}
        <span>Test image:</span>
        <span><img src={loading} /></span>
      </div>
    );
  }
}
TestComponent.defaultProps = {
  column: 1,
  content: [],
  className: ''
};
export default TestComponent;