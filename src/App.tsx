import style from './App.module.scss';
import CurrenciesTable from './components/currenciesTable/CurrenciesTable';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useAppSelector } from './redux/hooks';

function App() {
  const isDarkMode: boolean = useAppSelector(state => state.currenciesSlice.isDarkMode);
  return (
    <div className={isDarkMode ? style.darkMain : style.lightMain}>
      <Header />
      <CurrenciesTable />
      <Footer />
    </div>
  );
}

export default App;