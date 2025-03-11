import './HeaderContainer.css'
import HBLogo from '../assets/logo.jpg'

function HeaderContainer() {
	return (
		<header className="HBHeader">
			<img src={HBLogo} alt="Herbal Blends Logo" />
			<h1>Herbal Blends</h1>
			<p>HB Admin Portal v1.0</p>
		</header>
	)
}

export default HeaderContainer