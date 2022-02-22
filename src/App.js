import axios from 'axios';
import { Route, Routes } from 'react-router';
import { useEffect, useState } from 'react'
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Index } from './components/main/Index'

// const getData = async () => {
//   try {
//     const newData = await axios.get('/header.json')
//     // .then(res => JSON.stringify(res))
//     const values = newData.data
//     return values
//   } catch (error) {
//     throw new Error('error')
//   }
// }

function App() {
  const [header, setHeader] = useState({})
  const [footer, setFooter] = useState({})
  const [main, setMain] = useState({})
  const [goods, setGoods] = useState({})

  useEffect(() => {
    axios.get('/header.json')
      .then(res => setHeader(res.data))
      .catch(err => console.log(err))
    axios.get('/footer.json')
      .then(res => setFooter(res.data))
      .catch(err => console.log(err))
    axios.get('/main.json')
      .then(res => setMain(res.data))
      .catch(err => console.log(err))
    axios.get('/goods.json')
      .then(res => setGoods(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Routes>
        <Route path="*" element={
          <div className="App">
            <Header data={header} />
            <Index data={main} goods={goods} />
            <Footer data={footer} />
          </div>
        } />
        <Route path="/catalog" element={
          <div className="App">
            <Index data={main} goods={goods} />
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;

