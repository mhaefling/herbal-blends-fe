import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavComponent from '../NavComponent/NavComponent'
import SubscriptionsComponent from '../SubscriptionsComponent/SubscriptionsComponent'
import DetailedSubscription from '../DetailedSubscription/DetailedSubscription'
import CustomersComponent from '../CustomersComponent/CustomersComponent'
import TeasComponent from '../TeasComponent/TeasComponent'
import './ContentContainer.css'

function ContentContainer() {

	const [subscriptions, setSubscriptions] = useState()
	const [customers, setCustomers] = useState()
	const [teas, setTeas] = useState()

	function getAllSubscriptions() {
		fetch("http://localhost:3000/api/v1/subscriptions")
			.then((response) => response.json())
			.then((data) => {
				setSubscriptions(data.data)
			})
			.catch((error) => {
				console.log(error)
			}
		)
	};

	function getAllCustomers() {
		fetch("http://localhost:3000/api/v1/customers")
			.then((response) => response.json())
			.then((data) => {
				setCustomers(data.data)
			})
			.catch((error) => {
				console.log(error)
			}
		)
	};

	function getAllTeas() {
		fetch("http://localhost:3000/api/v1/teas")
			.then((response) => response.json())
			.then((data) => {
				setTeas(data.data)
			})
			.catch((error) => {
				console.log(error)
			}
		)
	}

	useEffect(() => {
		if (!subscriptions) {
			getAllSubscriptions();
		}
		if (!customers) {
			getAllCustomers();
		}
		if (!teas) {
			getAllTeas();
		}
	}, [subscriptions, customers, teas]);


	if (!subscriptions && !customers && !teas) {
		return (
			<main className="HBContent">
				<h1>Loading Subscription, Customers, Teas Data...</h1>
			</main>
		)
	} else {
		return (
			<main className="HBContent">
				<nav className="HBNavigation">
					<NavComponent />
				</nav>
				<section className="HBMainContent">
					<Routes>
						<Route path="/" element={<SubscriptionsComponent subscriptions={subscriptions} setSubscriptions={setSubscriptions} />} />
						<Route path="/subscriptions/:id" element={<DetailedSubscription />} />
						<Route path="/customers" element={<CustomersComponent customers={customers} />} />
						<Route path="/teas" element={<TeasComponent teas={teas} />} />
					</Routes>
				</section>
			</main>
		)
	}
}

export default ContentContainer