import Link from 'next/link';

const ListItem = ({ href, linkContent }) => {
  return (
    <li>
      <Link href={href}>
        <a>{linkContent}</a>
      </Link>
    </li>
  );
};

export default ListItem;
