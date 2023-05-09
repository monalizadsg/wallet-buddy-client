import { Flex, Text, Icon } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
import { TbArrowsDoubleNeSw, TbPigMoney } from "react-icons/tb";
import "./SideNav.scss";
import { PropTypes } from "prop-types";

function SideNav() {
  return (
    <>
      <Flex flex='20%' flexDir='column' className='sidenav'>
        <Flex className='logo' justifyContent='center' alignItems='center'>
          BudgetTrackr
        </Flex>
        <Flex
          p='5%'
          paddingLeft={8}
          paddingRight={8}
          flexDir='column'
          w='100%'
          as='nav'
        >
          <NavItem icon={TbArrowsDoubleNeSw} title='Transaction' path='/' />
          <NavItem icon={TbPigMoney} title='Budget' path='/budget' />
        </Flex>
      </Flex>
      <Outlet />
    </>
  );
}

function NavItem({ icon, title, path }) {
  return (
    <Flex mt={30} w='100%' className='nav-item'>
      <NavLink to={path}>
        <Flex>
          <Icon as={icon} fontSize='xl' color='gray.500' />
          <Text ml={5}>{title}</Text>
        </Flex>
      </NavLink>
    </Flex>
  );
}

NavItem.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  path: PropTypes.string,
};

export default SideNav;
