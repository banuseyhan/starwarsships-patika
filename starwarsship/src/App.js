import './App.css';
import { Route } from 'react-router';
import { Main } from './components/Main/Main';

const App =() => {
  return (
 

 <Route exact path='/' component={Main}/>

  
  );
}

export default App;
