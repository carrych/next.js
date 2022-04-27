import { useRouter } from 'next/router';

import { url } from '../../utils';

export const getStaticPaths = async () => {
  const res = await fetch(url);
  const users = await res.json();

  const paths = users.map((user) => ({ params: { userId: user.id.toString() } }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const userId = context.params.userId;
  const res = await fetch(`${url}/${userId}`);
  const user = await res.json();

  return { props: { user } };
};

const UserDetails = ({ user }) => {
  const router = useRouter();

  return (
    <>
      <h1>User Details</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <a
        className="btn"
        onClick={() => {
          router.back();
        }}
      >
        Go Back
      </a>
    </>
  );
};

export default UserDetails;
