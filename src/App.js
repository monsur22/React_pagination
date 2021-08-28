import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Posts from './components/Posts';

function App() {
  return (
    <Router>

      <Route path="/" component={Posts} exact></Route>
    </Router>
  );
}

export default App;
