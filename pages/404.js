import Link from 'next/link';

const Page404 = () => {
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
