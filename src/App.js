import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router';
import SearchBox from './components/search-bar/search-bar';


function App() {
  return (
    <div className="main">
      <Header/>
      <Homepage />
    </div>
  );
}

export default App;
