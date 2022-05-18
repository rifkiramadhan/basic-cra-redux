import logo from './logo.svg';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import UserPage from './pages/User';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserPage />
      </div>
    </Provider>
  );
}

// Yang Dilakukan:
/*  1. Fetch API
    2. Save => Redux
    3. Display => React */

export default App;
