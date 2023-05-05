import { Heading } from "@chakra-ui/react";
import profile from "../assets/avatar1.jpg";
import "./Header.scss";

function Header() {
  return (
    <div className='header'>
      <Heading as='h2' size='lg'>
        Welcome back, Mona
      </Heading>
      <img className='avatar' src={profile} alt='profile' />
    </div>
  );
}

export default Header;
