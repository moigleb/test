import React from 'react';
import { connect } from "react-redux"
import { Button } from '../../components/Button';
import {items} from "../../utils/elementProps";
import { selectedElement } from "./actions";
import './style.scss';

class LeftSideBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex: null,
      items: items,
      isActive: false
    };
  }

  renderButtons = () => {
    const className = `btn`;
    return this.state.items.map((item, index) => {
      return <Button
            key={item.id}
            onDragStart={e=>this.props.onDragStart(e, item.text)}
            className={className}
            draggable={this.props.draggable}
            content={item.text}
          />
    })
  };

  render() {
    return (
      <div className="left-sidebar">
        <div className="left-sidebar__content">
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  selectedElementProps: state.selectedElementReducer,
});

export default connect(mapStateToProps, { selectedElement })(LeftSideBar)