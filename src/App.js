import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import BookService from './Pages/BookService/BookService';
import Login from './Pages/Forms/Login/Login';
import Signup from './Pages/Forms/Signup/Signup';
import Home from './Pages/Home/Home/Home';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ContactFooter from './Pages/Shared/ContactFooter/ContactFooter';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className='max-w-screen-2xl px-4 md:px-8 lg:px-12'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route element={<RequireAuth />}>
          <Route path='/book-service/:id' element={<BookService />} />
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ContactFooter />
    </div>
  );
}

export default App;
