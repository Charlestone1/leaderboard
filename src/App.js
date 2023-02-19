import './App.css';
import Leaderboard from './components/Leaderboard';
// import useViewMoreProvider from './components/viewAContext';

function App() {
  return (
    // <useViewMoreProvider>
      <div className="App">
        <h1>Leaderboard</h1>
        <Leaderboard/>
      </div>
    // </useViewMoreProvider>
  );
}
export default App;
