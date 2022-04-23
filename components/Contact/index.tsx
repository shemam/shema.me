import { FC } from 'react';
import styles from './styles.module.scss';
import {} from 'react-icons';

const Contact: FC = () => (
  <div className={styles.container}>
    <div className={styles.text}>
      <p>
        I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other
        request or question, don’t hesitate to use the form.
      </p>
    </div>

    <div className={styles.address}>
      <a className="appBtn" href="mailto:shemaamugisha@gmail.com">
        Hello
      </a>
    </div>
  </div>
);

export default Contact;
