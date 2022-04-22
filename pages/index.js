import styles from '../styles/Home.module.css';
import Container from '../components/container';
import Footer from '../components/footer';
import Header from '../components/header';
import Navbar from '../components/navbar/navbar';

export default function Home() {
  return (
    <Container>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Hello!!!</h1>

        <Navbar />
      </main>

      <Footer />
    </Container>
  );
}
