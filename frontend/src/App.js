import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/nav/Header';
import Content from './components/Content';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Content />
      </main>  
    </div>
  );
}

export default App;
