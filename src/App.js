import { Header } from './components/header/Header'; 
import { Footer } from './components/footer/Footer'; 
import axios from 'axios';
import { Index } from './components/main/Index'

const GetMock = async () => {
  try {
    const newData = await axios.get('/header.json')
    const values = newData.data
    console.log(values)
    return values
  } catch (error) {
    throw new Error('error')
  }
}

function App() {
  const props = GetMock()

  return (
    <div className="App">
      <Header data={props}/>
      <Index />
      <Footer/>
    </div>
  );
}

export default App;
