import { NavLink as NavLinkReactRouter } from "react-router-dom"

function NavLink({ to, children, className }) {
	return (
		<NavLinkReactRouter
		 to={to} 
		 className={
		 	({ isActive }) => isActive ? `border-b-[2.5px] ${className}` : `${className}` 
		 }>
			{children}
		</NavLinkReactRouter>
	);
}

export default NavLink