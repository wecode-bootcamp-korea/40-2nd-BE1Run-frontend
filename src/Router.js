import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Ticketing from './pages/Ticketing/Ticketing';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import MovieList from './pages/MovieList/MovieList';
import OrderPage from './pages/OrderPage/OrderPage';
import OrderFinishPage from './pages/OrderFinishPage/OrderFinishPage';
<<<<<<< HEAD
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
//TODO : nav 연결시 삭제 예정
import Modal from './components/Modal/Modal';
import Seatpage from './pages/SeatPage/Seatpage';
=======
//TODO : nav 연결시 삭제 예정
import Modal from './components/Modal/Modal';
>>>>>>> b45fa6c (Add: detail 레이아웃완료 ,  서버 데이터 수신확인)

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
        {/* TODO : nav 연결시 삭제 예정 */}
        <Route path="/modal" element={<Modal />} />
<<<<<<< HEAD
        <Route path="/seat-page" element={<Seatpage />} />
=======
>>>>>>> b45fa6c (Add: detail 레이아웃완료 ,  서버 데이터 수신확인)
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
