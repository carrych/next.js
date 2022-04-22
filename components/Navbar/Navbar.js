import { pages } from '../../utils';
import ListItem from './ListItem';
import { v4 as uuid } from 'uuid';
import NavLogo from './NavLogo';
import styles from '../../styles/Home.module.css';

const Nav = () => {
  const namesOfPages = Object.keys(pages);

  return (
    <nav className={styles.navbar}>
      <NavLogo />

      <ul>
        {namesOfPages.map((pageName) => (
          <ListItem
            href={pages[pageName].route}
            linkContent={pages[pageName].linkContent}
            key={uuid()}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
