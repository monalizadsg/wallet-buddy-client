import "./SideNav.scss";

function SideNav() {
  return (
    <div className='sidenav'>
      <div className='logo'>BudgetTrackr</div>
      <nav>
        <ul>
          <li>Transactions</li>
          <li>Budget</li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
