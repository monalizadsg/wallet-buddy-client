import SideNav from "./components/SideNav";
import Transaction from "./transaction/Transaction";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Budget from "./budget/Budget";
import "./App.scss";
import Dashboard from "./dashboard/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<SideNav />}>
      <Route index element={<Dashboard />} />
      <Route path='/transaction' element={<Transaction />} />
      <Route path='/budget' element={<Budget />} />
    </Route>
  )
);

function App() {
  return (
    <div className='app-container'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
