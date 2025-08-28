// import './App.css';

const title = 'Our JSX Bascics Lessons';
const userIsOnline = false;

export const App = () => {
  return (
    <div className="App">
      <h1>Welcome to React-Vite-Javascript</h1>

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
    </div>
  );
};
