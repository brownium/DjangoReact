import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import Footer from './components/footer'

function createAlert(){
  alert('hello, you slicked me');
}

function App() {
  return (
    <div className="App">
      <Header info="This is my message"/>
      <p>main content</p>
      <Footer trademark="page by sgb"
        myalert={createAlert}/>
    </div>
  );
}

export default App;
