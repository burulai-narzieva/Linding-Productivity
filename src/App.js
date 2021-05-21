import './App.css';
import { Header } from './components/Header'
import { Block1 } from './components/Block1'
import { Block2 } from './components/Block2'
import { Block3 } from './components/Block3'
import { Block3Footer } from './components/Block3Footer'
import { Block4 } from './components/Block4'
import { Block4Footer } from './components/Block4Footer'
import { Block5 } from './components/Block5'
import { Block5Footer } from './components/Block5Footer'
import { Block6 } from './components/Block6'
import { Block6Footer } from './components/Block6Footer'

function App() {

  return (
    <div className="container">
      <Header/>
      <Block1/>
      <Block2/>
      <Block3/>
      <Block3Footer/>
      <Block4/>
      <Block4Footer/>
      <Block5/>
      <Block5Footer/>
      <Block6/>
      <Block6Footer/>
    </div>
  );
}

export default App;
