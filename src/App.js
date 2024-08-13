import logo from './logo.svg';
import './App.css';
import AddVisitor from './COMPONENTS/AddVisitor';
import ViewAllVisitors from './COMPONENTS/ViewAllVisitors';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<AddVisitor/>}/>
  <Route path="/view" element={<ViewAllVisitors/>}/>

</Routes>

    </BrowserRouter>
  );
}

export default App;
