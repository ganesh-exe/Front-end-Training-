import React from 'react';


export default function Header(props) {
  return (
    <header className=" row center" style={{padding: '1rem',
      margin: '0.5rem',
      borderRadius: '0.5rem',borderStyle: 'set' , backgroundColor:'#ebfa19'}}>
      <div>
        <a href="#/">
          <h1>React Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}
