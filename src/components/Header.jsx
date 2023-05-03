import profile from "../assets/avatar1.jpg";
import "./Header.scss";

function Header() {
  return (
    <div className='header'>
      <h1>Welcome back, Mona</h1>
      <img className='avatar' src={profile} alt='profile' />
    </div>
  );
}

export default Header;
