import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Ticketing from './pages/Ticketing/Ticketing';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import MovieList from './pages/MovieList/MovieList';
import OrderPage from './pages/OrderPage/OrderPage';
import OrderFinishPage from './pages/OrderFinishPage/OrderFinishPage';
//TODO : nav 연결시 삭제 예정
import Modal from './components/Modal/Modal';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ticketing" element={<Ticketing />} />
        <Route path="/movie-detail" element={<MovieDetail />} />
        <Route path="/movie-list" element={<MovieList />} />
        <Route path="/order-page" element={<OrderPage />} />
        <Route path="/order-finish-page" element={<OrderFinishPage />} />
        {/* TODO : nav 연결시 삭제 예정 */}
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
