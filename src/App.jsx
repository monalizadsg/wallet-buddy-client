import SideNav from "./components/SideNav";
import Transaction from "./transaction/Transaction";
import { Routes, Route } from "react-router-dom";
import Budget from "./budget/Budget";
import "./App.scss";
import Dashboard from "./dashboard/Dashboard";
import SavingPlan from "./savingPlan/SavingPlan";
import PrivateRoute from "./app/PrivateRoute";
import Login from "./auth/Login";
import Landing from "./app/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/savings" element={<SavingPlan />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
