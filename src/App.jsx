// import './App.css';

const title = 'Our JSX Bascics Lessons';
const userIsOnline = true;

export const App = () => {
  return (
    <div className="App">
      <h1>Welcome to React-Vite-Javascript</h1>
      {userIsOnline && <p>user is online</p>}
      <hr />
      <p>{title}</p>
      <hr />
    </div>
  );
};
