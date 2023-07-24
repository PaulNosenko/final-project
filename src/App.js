import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Table from './components/Table/Table';

function App() {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tables/:tableId" element={<Table />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
