import { FC } from 'react';
import styles from './styles.module.scss';

export const FrontEnd: FC = () => (
  <div className={styles.skillContainer}>
    <div className={styles.skill}>
      <h4 className={styles.title}>Languages.</h4>
      <p>Javascript(ES6+)</p>
      <p>Typescript</p>
    </div>

    <div className={styles.skill}>
      <h4 className={styles.title}>Libraries & Frameworks.</h4>
      <p>React</p>
      <p>Svelte</p>
      <p>Web3js</p>
      <p>Etherjs</p>
      <p>Graphql/apollo-client</p>
      <p>React/redux</p>
    </div>

    <div className={styles.skill}>
      <h4 className={styles.title}>Css Frameworks.</h4>
      <p>Material ui</p>
      <p>Tailwind css</p>
      <p>Ant Design</p>
    </div>
  </div>
);

export const BackEnd: FC = () => (
  <div className={styles.skillContainer}>
    <div className={styles.skill}>
      <h4 className={styles.title}>Languages.</h4>
      <p>Typescript</p>
      <p>Python</p>
      <p>Solidity</p>
    </div>

    <div className={styles.skill}>
      <h4 className={styles.title}>Libraries & Frameworks.</h4>
      <p>Node/express</p>
      <p>Nest</p>
      <p>Flask</p>
      <p>HardHat</p>
    </div>

    <div className={styles.skill}>
      <h4 className={styles.title}>Database.</h4>
      <p>Postgres</p>
      <p>MongoDB</p>
      <p>Redis</p>
    </div>
  </div>
);

export const DevOops: FC = () => (
  <div className={styles.skillContainer}>
    <div className={styles.skill}>
      <h4 className={styles.title}>Languages</h4>
      <p>Bash</p>
      <p>Nodejs</p>
    </div>

    <div className={styles.skill}>
      <h4 className={styles.title}>Cloud Providers</h4>
      <p>Aws</p>
      <p>Heroku</p>
    </div>

    <div className={styles.skill}>
      <h4 className={styles.title}>CI/CD Tools</h4>
      <p>Github Actions</p>
      <p>Travic CI</p>
      <p>Gitlab CI</p>
    </div>
  </div>
);
