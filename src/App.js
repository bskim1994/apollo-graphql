import logo from './logo.svg';
import './App.css';
import MyMutation from './MyMutaion';
import DisplayLocations  from './DisplayLocations';

function App() {
  return (
    <>
      <div>
        <h2>My first Apollo app query🚀</h2>
        <DisplayLocations />
      </div>
      <div>
        <h2>My first Apollo app mutation🚀</h2>
        <MyMutation/>
      </div>
    </>
  );
}

export default App;
