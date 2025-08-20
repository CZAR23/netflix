
import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import Banner from './Components/banner/banner.js';
import {orginals,action} from './url.js'
import "./App.css"
import RowPost from './Components/RowPost/RowPost.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url = {orginals} title="asdfghjkl"   />
      <RowPost url= {action} title="action"  isSmall />
    </div>
  );
}

export default App;
