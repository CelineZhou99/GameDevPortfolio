import './App.css';
import HeaderBanner from './components/Header/Header';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <HeaderBanner/>
      <div className='BodyContainer'>
        <Profile />
      </div>
    </div>
  );
}

export default App;
