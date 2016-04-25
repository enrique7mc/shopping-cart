import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

class ShoppingCart extends Component {
  const ShoppingCartSpec = {
    drop () {
      return { name: 'ShoppingCart' };
    }
  }

  let collect = (connect, monitor) => {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    };
  }

  render () {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#FFFFFF';
    backgroundColor = isActive ? '#F7F7BD' : '#F7F7F7';

    const style = {
      backgroundColor: backgroundColor;
    };

    return connectDropTarget(
      <div className='shopping-cart' style={ style }>
        { isActive ? 'Hummm, snack!' : 'Drag here to order!' }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired
};

export default ShoppingCart;
