import Image from 'next/image'

import styles from '../../styles/Navbar.module.css';

const NavLogo = () => {
  return (
    <div className={styles.logo}>
      <Image src="/1801287.svg" width={128} height={77}/>
    </div>
  );
};

export default NavLogo;
