import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Habits from "./pages/Habits";

function App() {
  return (
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/Habits' component={Habits}></Route>
      </Routes>
  );
}

export default App;
