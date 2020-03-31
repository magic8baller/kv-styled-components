import React from 'react'
import styled from 'styled-components'
import Logo from '../../images/kvre_logo.png'
const Brand = () => (
	<Image src={Logo} alt='kingsview realty logo'/>
	)

export default Brand;

const Image = styled.img`
height: 85%;
margin: auto 0;
`;