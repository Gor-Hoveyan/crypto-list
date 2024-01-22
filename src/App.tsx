import React from 'react';
import style from './App.module.scss';
import CurrenciesTable from './components/currenciesTable/CurrenciesTable';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useAppSelector } from './redux/hooks';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import CoinPage from './components/coinPage/CoinPage';

function App() {
  const isDarkMode: boolean = useAppSelector(state => state.currenciesSlice.isDarkMode);

  return (
    <Router>
      <div className={isDarkMode ? style.darkMain : style.lightMain}>
        <Header />
        <Routes>
          <Route path='/'  element={<CurrenciesTable />} />
          <Route path='/coin/:coinName'  element={<CoinPage />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;