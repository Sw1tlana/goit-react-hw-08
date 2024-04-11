import css from './Home.module.css';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div className={css.containerHome}>
      <Helmet>
        <title>Home</title>
    </Helmet>
      </div>
  )
}

export default Home;
