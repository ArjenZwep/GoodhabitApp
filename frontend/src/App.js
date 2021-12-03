import './App.css';
import SideBar from './components/SideBar';
import Header from './components/Header';

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Header />
    </div>
  );
}

export default App;