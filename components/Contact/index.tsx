import { FC } from 'react';
import styles from './styles.module.scss';
import {} from 'react-icons';

const Contact: FC = () => (
  <div className={styles.container}>
    <div className={styles.text}>
      <p>
        I&apos;m interested in blockchain app development or front-end development opportunities – especially high
        performant systems to solve real-world challenges.
      </p>
    </div>

    <div className={styles.address}>
      <a className="appBtn" href="mailto:azertshema@gmail.com">
        let&apos;s talk
      </a>
    </div>
  </div>
);

export default Contact;
