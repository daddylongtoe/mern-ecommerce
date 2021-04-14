import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Header />
      <Container>
        <main className="py-3">
          <HomePage />
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default App;
