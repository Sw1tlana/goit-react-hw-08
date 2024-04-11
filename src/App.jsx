
import Loader from './components/Loader/Loader';
import { useDispatch } from 'react-redux';
import css from './App.module.css';

import { lazy, useEffect } from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { refreshUser } from './redux/auth/operations';
 
const Home = lazy(() => import('./pages/Home/Home'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));
const Login = lazy(() => import('./pages/Login/Login'));
const Registration = lazy(() => import('./pages/Registration/Registration'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={css.formWrapper}>
      <div>
        <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Suspense>
        </Layout>
      </div>
   </div>
  )
}

export default App