import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Transaction from './Pages/Transaction/Transaction';
import SignIn from './Pages/SignIn/SignIn';
import Error from "./Pages/Error/Error";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//  import du store 
import mainStore from '../src/mainstore';
// import du provider
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={mainStore}>
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/Transaction' element={<Transaction />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
