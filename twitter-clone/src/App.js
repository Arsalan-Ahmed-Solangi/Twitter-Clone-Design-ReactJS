import './App.css';
import Feed from './componenets/feed/Feed';
import Sidebar from './componenets/sidebar/Sidebar';
import Widget from './componenets/widgets/Widget';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Feed/>
      <Widget/>
    </div>

)}

export default App;
