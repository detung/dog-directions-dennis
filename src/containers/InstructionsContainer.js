import React, { Component } from 'react';
import StepTile from '../components/StepTile';
import ItemTile from '../components/ItemTile';
import FetchButton from '../components/FetchButton';

class InstructionsContainer
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepId: null
    }

    this.setId = this.setId.bind(this);
  }

  setId(id) {
    if (id === this.state.stepId) {
      this.setState({ stepId: null });
    } else {
      this.setState({ stepId: id });
    };
  }

  // fetch('/api/v1/favorite_things.json')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //   });

  render(){
    console.log(this.state);
    let supplies = this.props.data.supplies
    let directions = this.props.data.directions
    let selectedId = this.state.stepId

    let items = supplies.map(supply => {
      return(
        <ItemTile
        item={supply.item}
        key={supply.id}
        id={supply.id}
        />
      )
    })

    let steps = directions.map(direction => {
      let className;
      if (direction.id === this.state.stepId) {
        className = "selected"
      }

      return(
        <StepTile
          step={direction.step}
          key={direction.id}
          id={direction.id}
          setSelectedStep={this.setId}
          className={className}
        />
      )
    })

    let image;
    if (this.state.stepId === 7) {
      image = "https://i.imgur.com/q46L4QH.jpg"
    }

    return(
      <div>
        <h1>How To {this.props.data.activity}</h1>
        <img src={image} />
        <h3>Supplies:</h3>
        <ul>
          {items}
        </ul>
        <h3>Instructions:</h3>
        <ol>
          {steps}
        </ol>
        <FetchButton
          // fetch={this.fetch}
        />
      </div>
    )
  }
}

export default InstructionsContainer;
