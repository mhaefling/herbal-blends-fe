import { Link } from 'react-router-dom'
import './NavComponent.css'

function NavComponent() {

	return (
		<section className="HBNavLinks">
			<table>
				<thead>
					<tr>
						<td><p>Categories:</p></td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Link to="/">
								<button>Subscriptions</button>
							</Link>
						</td>
					</tr>
					<tr>
						<td>
							<Link to="/customers">
								<button>Customers</button>
							</Link>
						</td>
					</tr>
					<tr>
						<td>
							<Link to="/teas">
								<button>Teas</button>
							</Link>
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	)

}

export default NavComponent