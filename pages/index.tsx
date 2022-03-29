import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>shema website</title>
      <meta name="description" content="shema biography" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Hello world</h1>
    </main>
  </div>
);

export default Home;
