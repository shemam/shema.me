/* eslint-disable react/jsx-wrap-multilines */
import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { BiWindowOpen } from 'react-icons/bi';
import { VscSourceControl } from 'react-icons/vsc';

import styles from './styles.module.scss';

type Tcard = {
  title: string;
  footer: ReactNode;
  content: string;
  children: ReactNode;
};

type Tlink = {
  link: string;
};

const Link1: FC<Tlink> = ({ link }) => (
  <a href={link} rel="noreferrer" target="_blank">
    <BiWindowOpen className={styles.icon1} />
  </a>
);

const Link2: FC<Tlink> = ({ link }) => (
  <a rel="noreferrer" target="_blank" href={link}>
    <VscSourceControl className={styles.icon2} />
  </a>
);

const Card: FC<Tcard> = ({ title, content, footer, children }) => (
  <div className={styles.card}>
    <header>
      <h1>{title}</h1>
      <div>{children}</div>
    </header>

    <main>
      <p>{content}</p>
    </main>
    <footer>{footer}</footer>
  </div>
);

const Work: FC = () => (
  <div className={styles.container}>
    <div className={styles.cardContainer}>
      <Card
        title="Fiesta"
        content="A web platform makes it easier for influencers to recommend some products to their followers."
        footer={
          <>
            <p>Aws</p>
            <p>NextJs</p>
            <p>Material-ui</p>
            <p>Graphql</p>
          </>
        }
      >
        <Link1 link="https://fiesta.club/" />
      </Card>

      <Card
        title="COA"
        content="A company, which enables competitive pricing compared to Developer-as-a-Service business in the DACH region and a fair local pay at the same time."
        footer={
          <>
            <p>Javascript</p>
            <p>Sass</p>
            <p>Boostrap</p>
            <p>Nodejs</p>
          </>
        }
      >
        <Link1 link="https://test.codeofafrica.com/EN" />
      </Card>

      <Card
        title="Movein"
        content="A platform connecting buyers and sellers for low- to mid-price housing in Rwanda."
        footer={
          <>
            <p>Typescript</p>
            <p>NextJs</p>
            <p>Redux</p>
            <p>Material-ui</p>
          </>
        }
      >
        <Link1 link="https://movein-v1.netlify.app/" />
      </Card>

      <Card
        title="Budget App"
        content="A simple Budget App for tracking and manage your money by creating budgets and add expenses."
        footer={
          <>
            <p>Typescript</p>
            <p>React</p>
            <p>Bootstrap</p>
            <p>localStorage</p>
          </>
        }
      >
        <Link1 link="https://expeenses-app.netlify.app/" />
        <Link2 link="https://github.com/shemamugisha/budget-app" />
      </Card>
    </div>

    <div className={`${styles.moreBtn}`}>
      <Link href="https://github.com/shemamugisha?tab=repositories">
        <span className="appBtn">More</span>
      </Link>
    </div>
  </div>
);

export default Work;
