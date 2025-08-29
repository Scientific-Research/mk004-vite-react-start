// import './App.css';
import React, { useState } from 'react';
import books from './dev/books.json';

const title = 'Our JSX Bascics Lessons';
// const userIsOnline = true;

// const fileStatus = 'fileExists';
const fileStatus = 'fileIsDeleted';

export const App = () => {
  const [userIsOnline, setUserIsOnline] = useState(false);
  const [thePassword, setThePassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // To prevent the page from blinking when i click on the login button
    console.log('Button was clicked!');

    if (thePassword === password) {
      setUserIsOnline(true);
    }
  };

  const handlePasswordField = (e) => {
    console.log(e.target.value);
    setThePassword(e.target.value);
  };

  const password = '123456';

  return (
    <div className="App">
      <h1>Welcome to React-Vite-Javascript</h1>

      {/* First Solution */}
      {/* <div>
        <p>
          Password:
          <input type="text" onChange={handlePasswordField} />
          <button onClick={handleLogin}>Login</button>
        </p>
      </div> */}

      {/* Second Solution using Form*/}
      <form action="">
        Password: <input type="text" onChange={handlePasswordField}></input>{' '}
        <button onClick={handleLogin}>Login</button>
      </form>

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
