import React, {useState} from 'react';
import {animated, config, useSpring} from "react-spring";
import styled from "styled-components";
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

import {Link} from "gatsby"
const Navbar = () => {
	const [isOpen, setMenuOpen] = useState(false)
	const toggleMenuOpen = () => setMenuOpen(!isOpen)
	const barAnimation = useSpring({
		from: {transform: 'translate3d(0, -10rem, 0)'},
		transform: 'translate3d(0, 0, 0)',
	});

	const linkAnimation = useSpring({
		from: {transform: 'translate3d(0, 30px, 0)', opacity: 0},
		to: {transform: 'translate3d(0, 0, 0)', opacity: 1},
		delay: 800,
		config: config.wobbly,
	});

	return (
		<>
			<NavBar style={barAnimation}>
				<FlexContainer>
					<Brand />
					<NavLinks style={linkAnimation}>
						<Link to="/About/">about</Link>
						<Link to="/Team/">team</Link>
						<Link to="/Blog/">blog</Link>
						<Link to="/Contact/">contact</Link>
					</NavLinks>
					<BurgerWrapper>
						<BurgerMenu isOpen={isOpen} toggleMenuOpen={toggleMenuOpen} />
					</BurgerWrapper>
				</FlexContainer>
			</NavBar>
			<CollapseMenu isOpen={isOpen} toggleMenuOpen={toggleMenuOpen} />
		</>
	)
}

export default Navbar;


const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;