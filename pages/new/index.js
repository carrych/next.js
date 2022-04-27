import styles from '../../styles/Users.module.css';
import Link from 'next/link';
import { url } from '../../utils';

export const getStaticProps = async () => {
  const res = await fetch(url);
  const users = await res.json();

  return { props: { users } };
};

const New = ({ users }) => {
  return (
    <div className={styles.list}>
      {users.map((user) => (
        <Link key={`${user.id}${user.name}`} href={`/new/${user.id}`}>
          <a className={styles.single}>{user.name}</a>
        </Link>
      ))}
    </div>
  );
};

export default New;
