import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addNode } from "../MainContainer/actions";
import ModalComponent from "../../components/Modal";
import LeftSideBar from "../../containers/LeftSideBar";
import MainContainer from "../../containers/MainContainer";
import './style.scss';

class App extends React.Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    node: PropTypes.object.isRequired,
    addNode: PropTypes.func.isRequired
};

  onHandleToggle=()=>{
    this.setState(prevState=>{
      return {
        isOpen: !prevState.isOpen
      }
    })
  };

  onDragStart = (event, value) => {
    console.log(event);
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData('text/plain', value);

    const crt = event.target.cloneNode(true);
    console.log(crt);
    crt.style.width = "300px";

  };

  allowDrop = event => {
   event.preventDefault();
  };
  onDropLeft = event => {
    const data = event.dataTransfer.getData("text/plain");
    this.props.addNode(data);
    this.onHandleToggle();
  };

  onSubmit = () =>{
    this.onHandleToggle()
  };

  render () {
    const{node:{node}} = this.props;
    return (
      <div className="App">
        <main>
          <LeftSideBar
            draggable={true}
            onDragStart={this.onDragStart}
          />

          <MainContainer
            onDragOver={this.allowDrop}
            onDrop={this.onDropLeft}
            mainContainer={node}
          />
        </main>
        <ModalComponent
          isShowing={this.state.isOpen}
          toggle={this.onHandleToggle}
          onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect((state) =>(
  {node: state.mainContainerReducer}
  ), {addNode})(App);
