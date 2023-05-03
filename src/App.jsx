// import { useState } from 'react'
import "./App.scss";
import Header from "./components/Header";
import SideNav from "./components/SideNav";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className='app-container'>
      <SideNav />
      <main>
        <Header />
      </main>
    </div>
  );
}

export default App;
