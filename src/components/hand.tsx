import React from 'react';
//Enum型HandTypeの読み込み
import { HandType } from '../interfaces/handType';

interface Props {
  selectHand: HandType;
  selectedHand: HandType;
  clickHand: ( val: HandType ) => void;
}

// 子コンポーネント
export default class Hand extends React.Component< Props, {} > {

  render () {
    const imgSize   = 100;
    const handTypes = [ 'rock', 'scissors', 'paper' ]
    return (
      <div>
        <button onClick = { () => {
          this.props.clickHand( this.props.selectHand );
        } }>
          <img
            style={{
              width:   imgSize,
              height:  imgSize,
              opacity: this.props.selectedHand === this.props.selectHand ? '1.0' : '0.3',
            }}
            src={ `images/${ handTypes[ this.props.selectHand ] }.jpg`}
            alt='rock'
          />
        </button>
      </div>
    );
  }

}

// {/* グー */}
// <button
// onClick = { () => {
//   this.setState( { selectHand: 0 });
// } }
// >
// <img
//   style = {{
//     width:   imgSize,
//     height:  imgSize,
//     opacity: this.state.selectHand === 0 ? 1.0 : 0.3,
//   }}
//   src = {
//     `images/rock.jpg`
//   }
//   alt='rock'
// />
// </button>

// {/* チョキ */}
// <button
// onClick = { () => {
//   this.setState( { selectHand: 1 } );
// }}
// >
// <img
//   style = {{
//     width:   imgSize,
//     height:  imgSize,
//     opacity: this.state.selectHand === 1 ? 1.0 : 0.3,
//   }}
//   src = {
//     `images/scissors.jpg`
//   }
//   alt='scissors'
// />
// </button>

// {/* パー */}
// <button
// onClick = { () => {
//   this.setState( { selectHand: 2 } )
// }}
// >
// <img
//   style = {{
//     width:   imgSize,
//     height:  imgSize,
//     opacity: this.state.selectHand === 2 ? 1.0 : 0.3,
//   }}
//   src = {
//     `images/paper.jpg`
//   }
//   alt='paper'
// />
// </button>