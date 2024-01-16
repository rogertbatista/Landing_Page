import './App.css'
import Header from './components/Header';
import Container from './components/Container';
import Content from './components/Content';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {

  return (
    <>
      <Header />
      <Container>
        <Content />
      </Container>
      <Footer />
      <Modal/>
    </>
  )
}

export default App
