/* eslint-disable no-unused-vars */
import React from 'react';
import StyledBurger from './StyledBurger.js';

const Burger = ({ open, setOpen }) => (
	<StyledBurger open={open} onClick={() => setOpen(!open)}>
		<div />
		<div />
		<div />
	</StyledBurger>
);

export default Burger;