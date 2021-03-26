// import { preventExtensions } from 'core-js/core/object';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hand from '../../components/hand';
//Enum型HandTypeの読み込み
import { HandType } from '../../interfaces/handType';
import { useRspBattle } from "../../hooks/useRspBattle";

// selectHand   = グー,チョキ,パーの初期値
// selectedHand = 選択されたじゃんけんの値
// clickHand    =　子コンポーネントから渡されたイベント発火の値

// interface Props {}
// interface State {
//   selectHand:   HandType;
//   enemyHand:    HandType;
//   resultString: string;
//   winCount:     number;
//   // 同じ手を出せる様にbattleCountを定義
//   battleCount:  number;

// }

// ジェネリックでStateの型をinterface Stateに設定
export default function Index() {

  const handTypes: HandType[] = [ HandType.Rock, HandType.Scissors, HandType.Paper ];

  const battleCountVal = React.useRef( 0 );
  const winCountVal    = React.useRef( 0 );
  // カスタムHook
  const [ resultString, winCount, confirmResult ] = useRspBattle();
  const [ selectHand, setSelectHand ]             = useState <HandType> ( HandType.Rock );
  const [ enemyHand, setEnemyHand ]               = useState <HandType> ( HandType.Rock );
  const [ battleCount, setBattleCount ]           = useState <number>   ( 0 );

  // じゃんけんの手の初期値
  // constructor( props: Props ) {
  //   // thisを使う為に、クラスコンポーネントでconstructor()を定義する場合はsuper()を記述する
  //   super( props );

  //   this.state = {
  //     selectHand:   HandType.Rock,
  //     enemyHand:    HandType.Rock,
  //     // ブラウザに表示される文言の状態
  //     resultString: '最初はグーじゃんけん',
  //     // 勝ち数
  //     winCount:      0,
  //     // 同じ手を出せる様にbattleCountを定義
  //     battleCount:   0,
  //   };
  // }

  // ライフサイクルメソッド
  // Mouthing
  // 初回だけ発火
  useEffect( () => {
    alert('手を選ぶと、勝敗が決まるよ\n手を選んでね!');
    // Unmounting
    return () => {
      alert( `戦績\n${ battleCountVal.current }戦中、${ winCountVal.current }戦勝利しました。` );
    };
  }, [] );
  // componentDidMount() {
  //   alert ('手を選ぶと、勝敗が決まるよ！\n手を選んでね！');
  // }
  // Updating
  // battleCountが変わった時に発火
  useEffect( () => {
    if ( selectHand !== undefined ) {
      const enemyHand: HandType = Math.floor( Math.random() * 3 );
      setEnemyHand( enemyHand );
      confirmResult( selectHand, enemyHand );

      battleCountVal.current = battleCount;
      winCountVal.current = winCount;
    }
  }, [ battleCount ] );
  // componentDidUpdate( prevProps: Props,  prevState: State ) {
  //   if ( prevState.battleCount !== this.state.battleCount ) {
  //     const enemyHand: HandType = Math.floor( Math.random() * 3 );
  //     setEnemyHand( enemyHand );
  //     confirmResult( selectHand, enemyHand );
  //   }
  // }
  // Unmounting
  // componentWillUnmount() {
  //   alert( `戦績\n${ battleCount }戦中、${ winCount }勝利しました。`)
  // }

  const handleOnClick = (val: HandType): void => {
    setBattleCount( battleCount + 1 );
    setSelectHand( val );
  }

  // // じゃんけん勝敗アルゴリズム
  // const confirmResult = ( selectHand: HandType, enemyHand: HandType ): void => {
  //   const result: number = ( selectHand - enemyHand + 3 ) % 3;
  //   if ( result === 0 ) {
  //     setResultString( 'あいこで' );
  //   } else if ( result === 2 ) {
  //     setResultString( '勝ち' );
  //     setWinCount( winCount +1 );
  //   } else {
  //     setResultString( '負け' );
  //   }
  // }

  return (
    <div
      style={{
        display:       'flex',
        alignItems:    'center',
        flexDirection: 'column'
      }}
    >
      <h1>じゃんけんページ</h1>
      <h2>自分の手</h2>
      <div style={{ display: 'flex' }}>
        { handTypes.map( ( handType: HandType ) => (
          <Hand selectHand={ handType } selectedHand={ selectHand } clickHand={ handleOnClick }/>
        ) ) }
      </div>

      <h1 style={{ color: 'red '}}>{ resultString }</h1>
      <h2 style={{ marginTop: 10 }}>相手の手</h2>
      <div　style={{ display: 'flex' }}>
        { handTypes.map( ( handType: HandType ) =>  (
          <Hand selectHand={ handType } selectedHand={ enemyHand } clickHand={ handleOnClick }/>
        ))}
      </div>

      <Link to='/'>
        <h1>じゃんけんを終了する</h1>
        <h4 style={{ textAlign: 'center' }}>※結果が発表されます。</h4>
      </Link>
    </div>
  )

}