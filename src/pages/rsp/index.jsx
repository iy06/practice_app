import React from 'react';
import { Link } from 'react-router-dom';
import Hand from '../../components/hand';

// selectHand   = グー,チョキ,パーの初期値
// selectedHand = 選択されたじゃんけんの値
// clickHand    =　子コンポーネントから渡されたイベント発火の値

export default class Index extends React.Component {
  // じゃんけんの手の初期値
  constructor() {
    // thisを使う為に、クラスコンポーネントでconstructor()を定義する場合はsuper()を記述する
    super();
    this.state = {
      selectHand: 0,
    };
  }

  handleOnClick = (val) => {
    this.setState({ selectHand: val });
    console.log(this.state);
  }

  render() {
    const handTypes = [ 0, 1, 2 ]
    return (
      <div
        style={{
          display:       'flex',
          alignItems:    'center',
          flexDirection: 'column'
        }}
      >
        <h1>じゃんけんページ</h1>
        <div style={{ display: 'flex' }}>
          { handTypes.map((handType) => (
            <Hand selectHand={ handType } selectedHand={ this.state.selectHand } clickHand={ this.handleOnClick }/>
          ))}
        </div>

        <Link to='/'>
          <h1>じゃんけんを終了する</h1>
          <h4>※結果が発表させれます</h4>
        </Link>
      </div>
    )
  }
}