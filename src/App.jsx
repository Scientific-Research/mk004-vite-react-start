// import './App.css';
import React, { useState } from 'react';
import books from './dev/books.json';

const title = 'Our JSX Bascics Lessons';
const userIsOnline = true;

// const fileStatus = 'fileExists';
const fileStatus = 'fileIsDeleted';

export const App = () => {
  // [userIsOnline, setUserIsOnline] = useState('false');

  const handleButton = () => {
    console.log('Button was clicked!');
  };

  return (
    <div className="App">
      <h1>Welcome to React-Vite-Javascript</h1>

      <div>
        <p>
          Password:
          <input type="text" />
          <button onClick={handleButton}>Login</button>
        </p>
      </div>

      {/* strange if statement (hack) */}
      {userIsOnline && <p>user is online</p>}
      <hr />

      {/* Ternary Operator => strange if-else statement (hack)*/}
      {userIsOnline ? (
        <p>user doesn't need to login</p>
      ) : (
        <p>user needs to login</p>
      )}

      <hr />
      {/* Vite doesn't display the info after && in JS file created from npm run build, when userIsOnline = false;*/}
      {userIsOnline && <p>password:86743187234</p>}

      <hr />

      {/* Inline-Style with ternary Operator */}
      <div style={userIsOnline ? { color: 'green' } : { color: 'red' }}>
        Information
      </div>
      <hr />

      {/* Dynamic example with className */}
      {/* {fileStatus ? <div className={fileStatus}>index.html</div> : null} */}
      {fileStatus && <div className={fileStatus}>index.html</div>}

      {/* Inline-Style with && operator */}
      {/* <div style={userIsOnline && { color: `green` }}>information</div> */}

      <hr />

      <h2>There are {books.length} books!</h2>
      {/* Only books with title: Linux */}
      <div className="books">
        {
          books
            .filter((b) => b.title.includes('Linux'))
            .map((b, index) => (
              <React.Fragment key={index}>
                <div className="book">
                  <p className="title">{b.title}</p>
                  <p className="description">{b.description}</p>
                </div>
                <div></div>
              </React.Fragment>
            ))
          // .filter((b) => b.title.includes('Linux'))}
        }
      </div>
    </div>
  );
};
