import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useTimeoutPushHome = (router) =>
  useEffect(() => {
    setTimeout(() => router.push('/'), 3000);
  }, []);

const Page404 = () => {
  const router = useRouter();

  useTimeoutPushHome(router);

  return (
    <div className="textCenter">
      <h1>Oops...</h1>
      <h2>Such page dose not exist</h2>
      <p>
        Go back{' '}
        <Link href="/">
          <a className="link">Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default Page404;
