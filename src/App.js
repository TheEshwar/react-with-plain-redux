import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store'
import IcecreamContainer from './components/IcecreamContainer';
import HookCakeContainer from './components/HookCakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake/>
        <ItemContainer/>
        <hr/>
        <CakeContainer/>
        <hr/>
        <IcecreamContainer />
        <hr/>
        <HookCakeContainer/>
        <hr/>
        <NewCakeContainer /> */}

        <UserContainer/>
        
      </div>
    </Provider>
  );
}

export default App;
