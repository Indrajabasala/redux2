import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Get from './Practice/Get';
import {Getreducer} from './Practice/Getreducer';


const store=applyMiddleware(thunk)(createStore)(Getreducer);


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Get/>
         </Provider>
      
    </div>
  );
}

export default App;
