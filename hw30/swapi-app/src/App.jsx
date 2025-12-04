import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PeoplePage from './pages/PeoplePage';
import PlanetsPage from './pages/PlanetsPage';
import StarshipsPage from './pages/StarshipsPage';
import Header from './components/Header/Header';
import { Provider } from 'react-redux';
import { store } from '/src/store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="app-root">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/planets" element={<PlanetsPage />} />
            <Route path="/starships" element={<StarshipsPage />} />
          </Routes>
        </main>
      </div>
    </Provider>
  )
}

export default App;
