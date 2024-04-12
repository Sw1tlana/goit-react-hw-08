
import Loader from './components/Loader/Loader';
import css from './App.module.css';

import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { refreshUser } from './redux/auth/operations';

import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
 
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
              <Route path="/" element={
                <PrivateRoute>
                <Home />
              </PrivateRoute>
              } />
              <Route path="/register" element={
                <RestrictedRoute>
                  <Registration />
                </RestrictedRoute>
              } />
              <Route path="/login" element={
                <RestrictedRoute>
                  <Login />
                </RestrictedRoute>
              } />
              <Route path="/contacts" element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              } />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Layout>
      </div>
    </div>
  )
}

export default App