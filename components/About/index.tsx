import { FC } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import ShemaImage from '../../public/assets/shemamugisha.jpg';

const About: FC = () => (
  <div className={styles.container}>
    <div className={styles.bio}>
      <h3>
        I&apos;m a web developer with more than 2 years of experience, dedicated to solving business problems through
        creating dynamic user experiences and highly interested in web3 technologies.
      </h3>

      <p>
        highly motivated on learning new stuff, problem solver, Team player and besides software development traveling
        is my biggest passion.
      </p>
    </div>
    <div className={styles.imageContainer}>
      <Image src={ShemaImage} alt="shema mugisha" layout="responsive" className={styles.image} />
    </div>
  </div>
);

export default About;
