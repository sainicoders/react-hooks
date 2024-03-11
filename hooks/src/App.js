
import './App.css';
import CleanUp from './CleanUp';
import ReducerHook from './ReducerHook';
import RefHook from './RefHook';
import UseMemo from './UseMemo';
import Useeffect from './Useeffect';
import Usestate from './Usestate';
// import UserContext from './UserContext';

function App() {
  return (
    <div className="App">
      <Usestate/>
      <Useeffect/>
      <CleanUp/>
      {/* <UserContext/> */}
      <ReducerHook/>
      <RefHook/>
      <UseMemo/>
     
    </div>
  );
}

export default App;
