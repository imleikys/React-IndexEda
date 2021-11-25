import Header from "./components/Header/Header";
import {Routes, Route, Navigate} from 'react-router';
import {Main} from "./pages/Main/Main";
import {Cart} from "./pages/Cart/Cart";


function App() {
  
  const a = 'asd';

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={ <Main prop={a} /> } />
        <Route path="/cart" element={ <Cart  /> } />

        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
    </div>
  );
}

export default App;
