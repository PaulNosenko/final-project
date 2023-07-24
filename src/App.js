import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Table from './components/Table/Table';
import { useDispatch } from 'react-redux';
import { fetchTables } from './redux/tablesReducers';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTables())
  });

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
