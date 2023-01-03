import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Ticketing from './pages/Ticketing/Ticketing';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import MovieList from './pages/MovieList/MovieList';
import OrderPage from './pages/OrderPage/OrderPage';
import OrderFinishPage from './pages/OrderFinishPage/OrderFinishPage';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Seatpage from './pages/SeatPage/Seatpage';
import Auth from './components/Login/Auth';
import Search from './components/Nav/SecondNav/Search';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ticketing/:id" element={<Ticketing />} />
        <Route path="/movie-detail/:id" element={<MovieDetail />} />
        <Route path="/movie-list" element={<MovieList />} />
        <Route path="/order-page" element={<OrderPage />} />
        <Route path="/order-finish-page" element={<OrderFinishPage />} />
        <Route path="/oauth/kakao/callback" element={<Auth />} />
        <Route path="/seat-page" element={<Seatpage />} />
        <Route path="/movies/search" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
