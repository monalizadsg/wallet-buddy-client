import { Flex, Text, Icon, Link, Menu, MenuButton } from "@chakra-ui/react";

import { TbArrowsDoubleNeSw, TbPigMoney } from "react-icons/tb";
import "./SideNav.scss";
import { PropTypes } from "prop-types";

function SideNav() {
  return (
    <div className='sidenav'>
      <div className='logo'>BudgetTrackr</div>
      <Flex
        p='5%'
        paddingLeft={10}
        paddingRight={10}
        flexDir='column'
        w='100%'
        as='nav'
      >
        <NavItem icon={TbArrowsDoubleNeSw} title='Transaction' />
        <NavItem icon={TbPigMoney} title='Budget' />
      </Flex>
    </div>
  );
}

function NavItem({ icon, title }) {
  return (
    <Flex mt={30} w='100%'>
      <Menu>
        <Link
          backgroundColor={"gray.200"}
          p={3}
          borderRadius={8}
          w='100%'
          _hover={{ textDecor: "none", backgroundColor: "gray.300" }}
        >
          <MenuButton w='100%'>
            <Flex>
              <Icon as={icon} fontSize='xl' color='gray.500' />
              <Text ml={5}>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}

NavItem.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
};

export default SideNav;
