import React from 'react';
import { Link } from 'react-router-dom';

// クラスコンポーネントにはrender関数を記述する。
export default class Index extends React.Component {
  render() {
    return (
      <div
        style={{
          // JSXに直接cssを記述する。
          display:       'flex',
          alignItems:    'center',
          flexDirection: 'column'
        }}
      >
        <h1>じゃんけんアプリ！</h1>
        <h1>じゃんけんに挑戦しよう!</h1>
        <Link to='/rsp'>
          <h1>じゃんけんページへ</h1>
        </Link>
      </div>
    );
  }
}