import './App.css';
import Login from './components/Login';

function App() {
  return (
    // BEM
    <div className="app">
      <h1>Spotify</h1>

      {/* Home Page */}
        <Login />


    </div>
  );
}

export default App;
