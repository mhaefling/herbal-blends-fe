import { Link } from 'react-router-dom'
import './NavComponent.css'

function NavComponent() {

	return (
		<nav className="HBNavigation">
			<Link to="/" className="HBNavLink">
				<p>Subscriptions</p>
			</Link>
			<Link to="/customers" className="HBNavLink">
				<p>Customers</p>
			</Link>
			<Link to="/teas" className="HBNavLink">
				<p>Teas</p>
			</Link>
		</nav>
	)

}

export default NavComponent