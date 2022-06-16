import './App.css';
// import SummaryForm  from './pages/summary/SumaryForm';
import { Container } from 'react-bootstrap'
import OrderEntry from './pages/entry/OrderEntry'
import { OrderDetailsProvider } from './contexts/OrderDetails'

function App() {
  return (
    <Container>
      <OrderDetailsPrwovider>
        {/* <SummaryForm /> */}
        <OrderEntry />
      </OrderDetailsPrwovider>
    </Container>
  );
}

export default App;
