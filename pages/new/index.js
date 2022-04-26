import styles from '../../styles/Users.module.css';

const url = 'https://jsonplaceholder.typicode.com/users';

export const getStaticProps = async () => {
  const res = await fetch(url);
  const users = await res.json();

  return { props: { users } };
};

const New = ({ users }) => {
  return (
    <div className={styles.list}>
      <ul>
        {users.map((user) => (
          <li className={styles.single} key={`${user.id}${user.name}`}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default New;
