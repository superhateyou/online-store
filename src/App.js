import { Route, Routes } from 'react-router';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Index } from './components/main/Index'
import { Product } from './components/main/Product';
import { Breadcrumbs } from './components/main/Product/Breadcrumbs';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content product-page">
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<div>main</div>} />
          <Route path="/catalog/*" element={<Index />} />
          <Route path="/catalog/:id" element={<Product />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

