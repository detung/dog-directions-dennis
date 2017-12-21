import React from 'react';

const StepTile = props => {



  let handleClick = () => {
    props.setSelectedStep(props.id);
//props.id = this.props.data.directions[i].id i=index of directions.map array or named as 'direction'
//props.setSelectedStep(props.id) = this.setId(props.id)
  }

  return(
    <div>
      <li className={props.className} onClick={handleClick}>
        {props.step}
      </li>
    </div>
  )
}

export default StepTile;
