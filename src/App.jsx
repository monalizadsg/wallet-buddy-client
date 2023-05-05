import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Transaction from "./transaction/Transaction";
import "./App.scss";

function App() {
  return (
    <div className='app-container'>
      <SideNav />
      <main>
        <Header />
        <Transaction />
      </main>
    </div>
  );
}

export default App;
