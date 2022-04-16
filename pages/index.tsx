import type { NextPage } from 'next';
import Head from 'next/head';
import { NavBar, Skills } from '../components';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>shema website</title>
      <meta name="description" content="shema biography" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <aside>
      <NavBar />
    </aside>
    <main>
      <section>
        <div>
          <h1>Hero section</h1>
        </div>
      </section>

      <section>
        <div>
          <h1>About section</h1>
        </div>
      </section>

      <section className="" style={{}}>
        <h1>Key Skills</h1>
        <Skills />
      </section>

      <section>
        <div>
          <h1>Work section</h1>
        </div>
      </section>

      <section>
        <div>
          <h1>Contact section</h1>
        </div>
      </section>
    </main>
  </div>
);

export default Home;
