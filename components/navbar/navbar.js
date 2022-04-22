import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Next.js project</h1>
      </div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </li>
        <li>
          <Link href="/new">
            <a>New</a>
          </Link>
        </li>
      </ul>
      ;
    </nav>
  );
};

export default Nav;
