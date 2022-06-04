import { Route, Routes } from 'react-router-dom';
import AboutMe from './Pages/AboutMe/AboutMe';
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
    <div className='max-w-screen-2xl'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/bookService/:id' element={
          <RequireAuth>
            <BookService />
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<AboutMe />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      {/* <ContactFooter/> */}
    </div>
  );
}

export default App;
