import { FC, useState } from 'react';
import Link from 'next/link';
import { RiMenu5Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import styles from './styles.module.scss';
import navLinks from './navLink';

const NavBar: FC = () => {
  const [open, setOpen] = useState(false);

  const handlerOpen = () => setOpen((prev) => !prev);

  return (
    <nav className={styles.navbar}>
      <h1>&lt; Shema /&gt;</h1>
      <div className={styles.humberg}>
        <button type="button" onClick={handlerOpen}>
          {open ? <AiOutlineClose className={styles.menu} /> : <RiMenu5Line className={styles.menu} />}
        </button>
      </div>
      <div className={open ? styles.leftNav : styles.none}>
        <div className={styles.menuItems}>
          {navLinks.map(({ url, name }) => (
            <Link key={name} href={url}>
              <li className="link">
                &lt;
                <span> {name} </span> &gt;
              </li>
            </Link>
          ))}
        </div>
        <div className={styles.iconContainer}>
          <Link href="https://github.com/shemamugisha">
            <FaGithubSquare />
          </Link>
          <Link href="https://www.linkedin.com/in/shemamugisha/">
            <FaLinkedin />
          </Link>
          <Link href="https://twitter.com/shemamugisha_">
            <FaTwitterSquare />
          </Link>
          <Link href="https://www.instagram.com/shemamugisha_/">
            <FaInstagramSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
