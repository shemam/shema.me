import { FC } from 'react';
import styles from './styles.module.scss';

const Hero: FC = () => (
  <>
    <div className={styles.container}>
      <h2>
        HI, <br /> <span className={styles.name}>I&apos;m Shema Mugisha,</span> <br /> <span>Web Developer</span>
      </h2>
      <p>Front End Developer / Blockchain App Developer</p>
    </div>
    <div>
      <a
        href="https://drive.google.com/file/d/1IXVQLPwxBa4yGkQ7LJDLsMtCDAcQK-PY/view?usp=sharing"
        rel="noreferrer"
        target="_blank"
        className="appBtn"
      >
        Resume
      </a>
    </div>
  </>
);

export default Hero;
