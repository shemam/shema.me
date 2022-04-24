import type { NextPage } from 'next';
import Head from 'next/head';
import { NavBar, Skills, Work, Contact, About, Hero } from '../components';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>shema website</title>
      <meta name="description" content="shema mugisha" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <aside>
      <NavBar />
    </aside>
    <main>
      <section className={styles.hero} id="home">
        <Hero />
      </section>

      <section className={styles.about}>
        <h1 className={styles.header} id="about">
          About Me.
        </h1>
        <About />
      </section>

      <section className={styles.skills} id="skills">
        <h1 className={styles.header}> Key Skills.</h1>
        <Skills />
      </section>

      <section className={styles.work} id="work">
        <h1 className={styles.header}>Recent Work.</h1>
        <Work />
      </section>

      <section className={styles.contact} id="contact">
        <h1 className={styles.header}>Contact Me.</h1>
        <Contact />
      </section>

      <footer className={styles.footer}>
        <p>Shema © 2022 All Rights Reserved</p>
      </footer>
    </main>
  </div>
);

export default Home;
