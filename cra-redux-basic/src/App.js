import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'; 
import store from './store/index';
import Counter from './pages/Counter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
