import React from 'react';
// import loading from './../../../../images/loading.png';
// require('./../../css/test_component.scss');
class TestComponent extends React.Component {
  constructor(props) {
    super(props);

  }
  getGrid = () =>{
    let {column, content} = this.props;
    let cellCount = content.length;
    this.grid = [];
    for(let i=0; i< cellCount; i=(i+column)){
      this.grid.push(this.getRows(content.slice(i, i+column), i));
    }
    return this.grid;
  }
  getRows = (columns, i) => {
    let {column} = this.props;
    let cls_column = 'col-md-'+Math.floor(12/column);
    return (
      <div className='row' key={'row__'+i}>
        {
          columns.reduce((arrCol,col, j)=>{
            arrCol.push(this.getCell(col, cls_column, j));
            return arrCol;
          },[])
        }
      </div>
    );
  }
  getCell = (param, cls, j) => {
    return (
      <div className={cls} key={'col_'+j} style={{backgroundColor: param.color}}>
        {param.text}
      </div>
    );
  }
  render(){
    let {props} = this;
    return (
      <div className={props.className + ' test-component container'} >
        {this.getGrid()}
        <span>Test image:</span>
        {/* <span><img src={loading} /></span> */}
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