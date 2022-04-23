import { FC } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const Hero: FC = () => (
  <>
    <div className={styles.container}>
      <h2>
        HI, <br /> <span>I&apos;m Shema Mugisha,</span> <br /> Web Developer
      </h2>
      <p>Front End Developer / Blockchain App Developer</p>
    </div>
    <Link href="#contact">
      <li className="appBtn">Resume</li>
    </Link>
  </>
);

export default Hero;
