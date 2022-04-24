/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { FC, ReactNode, useState } from 'react';
import Link from 'next/link';
import { BiWindowOpen } from 'react-icons/bi';
import { VscSourceControl } from 'react-icons/vsc';
import { AiFillGithub } from 'react-icons/ai';

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
  <Link href={link}>
    <BiWindowOpen className={styles.icon1} />
  </Link>
);

const Link2: FC<Tlink> = ({ link }) => (
  <Link href={link}>
    <VscSourceControl className={styles.icon2} />
  </Link>
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

const Work: FC = () => {
  const [work, useWork] = useState('');
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <Card
          children={<Link1 link="hah" />}
          title="Fiesta"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. A magnam doloremque aperiam unde, corrupti nisi non
        adipisci harum fugiat voluptas?"
          footer={
            <>
              <p>Aws</p>
              <p>NextJs</p>
              <p>Bootsrap</p>
              <p>Graphql</p>
            </>
          }
        />

        <Card
          children={<Link1 link="hah" />}
          title="COA"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. A magnam doloremque aperiam unde, corrupti nisi non
        adipisci harum fugiat voluptas?"
          footer={
            <>
              <p>Aws</p>
              <p>NextJs</p>
              <p>Bootsrap</p>
              <p>Graphql</p>
            </>
          }
        />

        <Card
          children={
            <>
              <Link1 link="hah" />
              <Link2 link="haha" />
            </>
          }
          title="Fiesta"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. A magnam doloremque aperiam unde, corrupti nisi non
        adipisci harum fugiat voluptas?"
          footer={
            <>
              <p>Aws</p>
              <p>NextJs</p>
              <p>Bootsrap</p>
              <p>Graphql</p>
            </>
          }
        />

        <Card
          children={
            <>
              <Link1 link="hah" />
              <Link2 link="haha" />
            </>
          }
          title="Fiesta"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. A magnam doloremque aperiam unde, corrupti nisi non
        adipisci harum fugiat voluptas?"
          footer={
            <>
              <p>Aws</p>
              <p>NextJs</p>
              <p>Bootsrap</p>
              <p>Graphql</p>
            </>
          }
        />

        <Card
          children={
            <>
              <Link1 link="hah" />
              <Link2 link="haha" />
            </>
          }
          title="Fiesta"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. A magnam doloremque aperiam unde, corrupti nisi non
        adipisci harum fugiat voluptas?"
          footer={
            <>
              <p>Aws</p>
              <p>NextJs</p>
              <p>Bootsrap</p>
              <p>Graphql</p>
            </>
          }
        />

        <Card
          children={
            <>
              <Link1 link="hah" />
              <Link2 link="haha" />
            </>
          }
          title="Fiesta"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. A magnam doloremque aperiam unde, corrupti nisi non
        adipisci harum fugiat voluptas?"
          footer={
            <>
              <p>Aws</p>
              <p>NextJs</p>
              <p>Bootsrap</p>
              <p>Graphql</p>
            </>
          }
        />
      </div>

      <div className={`${styles.moreBtn}`}>
        <a href="https://github.com/shemamugisha?tab=repositories" className="appBtn">
          More
        </a>
      </div>
    </div>
  );
};

export default Work;
