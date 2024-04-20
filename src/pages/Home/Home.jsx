import css from './Home.module.css';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div className={`${css.containerHome} ${css.container}`}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className={css.heroTitle}>Task manager welcome page</h1><span className={css.moji}>🤷‍♀️</span>
      </div>
  )
}

export default Home;
