import Header from './Header';
import Footer from './Footer';
import { Navbar } from './Navbar';
import Container from './Container';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />

      <Navbar />

      {children}

      <Footer />
    </Container>
  );
};

export default Layout;
