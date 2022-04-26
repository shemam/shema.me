import { FC } from 'react';
import styles from './styles.module.scss';

export const FrontEnd: FC = () => (
  <div className={styles.skillContainer}>
    <div className={styles.skill}>
      <h2 className={styles.title}>Languages.</h2>
      <p>Javascript(ES6+)</p>
      <p>Typescript</p>
    </div>

    <div className={styles.skill}>
      <h2 className={styles.title}>Libraries & Frameworks.</h2>
      <p>React</p>
      <p>Svelte</p>
      {/* <p>Web3js</p>
      <p>Etherjs</p> */}
      <p>Graphql/apollo-client</p>
      <p>React/redux</p>
    </div>

    <div className={styles.skill}>
      <h2 className={styles.title}>Css Frameworks.</h2>
      <p>Material ui</p>
      <p>Tailwind css</p>
      <p>Ant Design</p>
    </div>
  </div>
);

// 0x6b337061bcb5b372ac9054f12251241444da81f8;

export const BackEnd: FC = () => (
  <div className={styles.skillContainer}>
    <div className={styles.skill}>
      <h2 className={styles.title}>Languages.</h2>
      <p>Typescript</p>
      <p>Python</p>
      <p>Solidity</p>
    </div>

    <div className={styles.skill}>
      <h2 className={styles.title}>Libraries & Frameworks.</h2>
      <p>Node/express</p>
      <p>Nest</p>
      <p>Flask</p>
      <p>HardHat</p>
    </div>

    <div className={styles.skill}>
      <h2 className={styles.title}>Database.</h2>
      <p>Postgres</p>
      <p>MongoDB</p>
      <p>Redis</p>
    </div>
  </div>
);

export const DevOops: FC = () => (
  <div className={styles.skillContainer}>
    <div className={styles.skill}>
      <h2 className={styles.title}>Languages</h2>
      <p>Bash</p>
      <p>Nodejs</p>
    </div>

    <div className={styles.skill}>
      <h2 className={styles.title}>Cloud Providers</h2>
      <p>Aws</p>
      <p>Heroku</p>
    </div>

    <div className={styles.skill}>
      <h2 className={styles.title}>CI/CD Tools</h2>
      <p>Github Actions</p>
      <p>Travic CI</p>
      <p>Gitlab CI</p>
    </div>
  </div>
);
