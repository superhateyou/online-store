import axios from 'axios';
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

  useEffect(() => {
    axios.get('/header.json')
      .then(res => setHeader(res.data))
      .catch(err => console.log(err))
    axios.get('/footer.json')
      .then(res => setFooter(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Header data={header} />
      <Index />
      <Footer data={footer} />
    </div>
  );
}

export default App;

