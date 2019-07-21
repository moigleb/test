import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { addNode } from "./actions";
import './style.scss';

class MainContainer extends React.Component {
  static defaulProps = {
    mainContainer: []
  };
  renderElement=()=>{
    const{ mainContainer } = this.props;
    return mainContainer.map((item, i)=><div key={i} className="main-content__content-selected-item">{item}</div>)
  };

  render() {
    console.log("here");
    console.log(this.props);
    return (
      <div id="main-content" className="main-content"
           onDragOver={e=>this.props.onDragOver(e)}
           onDrop={e=>this.props.onDrop(e)}>
        <div className="main-content__content">
          { this.renderElement()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    nodeProps: state.mainContainerReducer
  };
};

export default withRouter(connect( mapStateToProps, { addNode })(MainContainer));

