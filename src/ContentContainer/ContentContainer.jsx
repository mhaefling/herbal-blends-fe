import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavComponent from '../NavComponent/NavComponent'
import SubscriptionsComponent from '../SubscriptionsComponent/SubscriptionsComponent'

function ContentContainer() {

	const [subscriptions, setSubscriptions] = useState([])

	function getAllSubscriptions() {
		fetch("http://localhost:3000/api/v1/subscriptions/")
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				setSubscriptions(data.data)
			})
			.catch((error) => {
				console.log(error)
			})
	};

	useEffect(() => {
		getAllSubscriptions();
	}, []);

	useEffect(() => {
    console.log("Updated subscriptions: ", subscriptions);
}, [subscriptions]);

	return (
		<main className="HBContent">
			<NavComponent />
			<Routes>
				<Route path="/" element={<SubscriptionsComponent subscriptions={subscriptions} />} />
			</Routes>
		</main>
	)
}

export default ContentContainer