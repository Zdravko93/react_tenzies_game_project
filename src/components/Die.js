import React from 'react';

const Die = (props) => {
    const styles = {
        backgroundColor: props.isHeld ? '#6495ed' : 'white'
    }
  
    return (
        <div className="dice-face" 
             style={styles}
             onClick={props.holdDice}   
         >
            <h2 className="dice-num">{props.value}</h2>
        </div>
    )
}

export default Die