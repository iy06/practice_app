// import { preventExtensions } from 'core-js/core/object';
import React from 'react';
import { Link } from 'react-router-dom';
import Hand from '../../components/hand';
//Enum型HandTypeの読み込み
import { HandType } from '../../interfaces/handType';

// selectHand   = グー,チョキ,パーの初期値
// selectedHand = 選択されたじゃんけんの値
// clickHand    =　子コンポーネントから渡されたイベント発火の値

interface Props {}
interface State {
  selectHand:   HandType;
  enemyHand:    HandType;
  resultString: string;
  winCount:     number;
  // 同じ手を出せる様にbattleCountを定義
  battleCount:  number;

}

// ジェネリックでStateの型をinterface Stateに設定
export default class Index extends React.Component< {}, State > {
  // じゃんけんの手の初期値
  constructor( props: Props ) {
    // thisを使う為に、クラスコンポーネントでconstructor()を定義する場合はsuper()を記述する
    super( props );

    this.state = {
      selectHand:   HandType.Rock,
      enemyHand:    HandType.Rock,
      // ブラウザに表示される文言の状態
      resultString: '最初はグーじゃんけん',
      // 勝ち数
      winCount:      0,
      // 同じ手を出せる様にbattleCountを定義
      battleCount:   0,
    };
  }
  // ライフサイクルメソッド
  // Mouthing
  componentDidMount() {
    alert ('手を選ぶと、勝敗が決まるよ！\n手を選んでね！');
  }
  // Updating
  componentDidUpdate( prevProps: Props,  prevState: State ) {
    if ( prevState.battleCount !== this.state.battleCount ) {
      const enemyHand: HandType = Math.floor( Math.random() * 3 );
      this.setState( { enemyHand: enemyHand } );
      this.confirmResult(this.state.selectHand, enemyHand);
    }
  }
  // Unmounting
   componentWillUnmount() {
     alert( `戦績\n${ this.state.battleCount }戦中、${ this.state.winCount }勝利しました。`)
   }

  handleOnClick = (val: HandType): void => {
    console.log(this.state);
    this.setState({ selectHand: val });
    this.setState({ battleCount: this.state.battleCount + 1});
  }

  confirmResult( selectHand: HandType, enemyHand: HandType ): void {
    const result: number = ( selectHand - enemyHand + 3 ) % 3;
    if ( result === 0 ) {
      return this.setState({
        resultString: 'あいこで',
      })
    } else if ( result === 2 ) {
      return this.setState({
        resultString: '勝ち',
        winCount: this.state.winCount + 1,
      })
    } else {
      return this.setState({
        resultString: '負け',
      })
    }
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
        <h2>自分の手</h2>
        <div style={{ display: 'flex' }}>
          { handTypes.map( ( handType: HandType ) => (
            <Hand selectHand={ handType } selectedHand={ this.state.selectHand } clickHand={ this.handleOnClick }/>
          ) ) }
        </div>
        <h1 style={{ color: 'red '}}>{ this.state.resultString }</h1>
        <h2 style={{ marginTop: 10 }}>相手の手</h2>
        <div　style={{ display: 'flex' }}>
          { handTypes.map( ( handType: HandType ) =>  (
            <Hand selectHand={ handType } selectedHand={ this.state.enemyHand } clickHand={ this.handleOnClick }/>
          ))}
        </div>

        <Link to='/'>
          <h1>じゃんけんを終了する</h1>
          <h4 style={{ textAlign: 'center' }}>※結果が発表されます。</h4>
        </Link>
      </div>
    )

  }

}