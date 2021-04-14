import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <main className="py-3">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/product/:id" component={ProductPage} />
          </Switch>
        </main>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
