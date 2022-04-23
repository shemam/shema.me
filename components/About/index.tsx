import { FC } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import ShemaImage from '../../public/assets/shemamugisha.jpg';

const About: FC = () => (
  <div className={styles.container}>
    <div className={styles.bio}>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque veniam blanditiis cum odit soluta temporibus
        possimus dolores. Mollitia adipisci aliquam nesciunt in, fuga dignissimos perferendis beatae eos voluptatum
        tenetur itaque ab doloremque totam obcaecati. Dolorum earum porro ratione aliquam itaque necessitatibus animi
      </h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore consectetur ipsum! Dolorem, ut?
        Doloremque laudantium fuga quos obcaecati nisi, incidunt assumenda aperiam iste consectetur exercitationem
        maxime, nostrum fugit voluptates?
      </p>
    </div>
    <div className={styles.imageContainer}>
      <Image src={ShemaImage} alt="shema mugisha" layout="responsive" className={styles.image} />
    </div>
  </div>
);

export default About;
