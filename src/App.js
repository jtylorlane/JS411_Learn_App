import logo from './logo.svg';
import './App.css';
import MyFirstClassComponent from './components/MyFirstClassComponents/index';
import Layout from './containers/Layout/index';

function App() {
  const msg ="TRUE"
  return (
    <div className="App">
      <MyFirstClassComponent />
      <Layout />
    </div>
  );
}

export default App;
