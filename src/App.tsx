import './App.css'; // We will use this file for our layout styles later
import NonogramBoard from './components/NonogramBoard';

function App() {
  // Everything inside the return() is what gets drawn to the screen
  return (
    <main className='app-container'>
      <NonogramBoard />
    </main>
  );
}

export default App;