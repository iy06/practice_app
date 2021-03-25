import React from 'react';
import { Link } from 'react-router-dom';
import Hand from '../../components/hand';
//Enum型HandTypeの読み込み
import { HandType } from '../../interfaces/handType';

// selectHand   = グー,チョキ,パーの初期値
// selectedHand = 選択されたじゃんけんの値
// clickHand    =　子コンポーネントから渡されたイベント発火の値

interface State {
  selectHand: HandType;
}

// ジェネリックでStateの型をinterface Stateに設定
export default class Index extends React.Component< {}, State > {
  // じゃんけんの手の初期値
  constructor( props: {} ) {
    // thisを使う為に、クラスコンポーネントでconstructor()を定義する場合はsuper()を記述する
    super( props );
    this.state = {
      selectHand: HandType.Rock,
    };
  }

  handleOnClick = (val: HandType): void => {
    this.setState({ selectHand: val });
    console.log(this.state);
  }

  render() {
    // データ定義
    const handTypes: HandType[] = [ HandType.Rock, HandType.Scissors, HandType.Paper ]

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
          { handTypes.map( ( handType: HandType ) => (
            <Hand selectHand={ handType } selectedHand={ this.state.selectHand } clickHand={ this.handleOnClick }/>
          ) ) }
        </div>

        <Link to='/'>
          <h1>じゃんけんを終了する</h1>
          <h4>※結果が発表させれます</h4>
        </Link>
      </div>
    )

  }

}