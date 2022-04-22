import { pages } from '../../utils';
import ListItem from './list-item';
import { v4 as uuid } from 'uuid';
import NavLogo from './navLogo';

const Nav = () => {
  const namesOfPages = Object.keys(pages);

  return (
    <nav>
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
