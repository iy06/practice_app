import React from 'react';
import { Link } from 'react-router-dom';

// クラスコンポーネントにはrender関数を記述する。
// 関数コンポーネントの場合はrender関数は不要。
export default function Index() {
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