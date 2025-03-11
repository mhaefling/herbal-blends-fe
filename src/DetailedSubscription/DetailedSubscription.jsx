import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../DetailedSubscription/DetailedSubscription.css'

function DetailedSubscription() {
	const [subDetails, setSubDetails] = useState()
	const subId = useParams().id

	function getSingleSub() {
		fetch(`http://localhost:3000/api/v1/subscriptions/${subId}`)
			.then((response) => response.json())
			.then((data) => {
				setSubDetails(data.data)
			})
			.catch((error) => {
				console.log(error)
			})
	};

	useEffect(() => {
		if (!subDetails) {
			getSingleSub();
		}
}, [subDetails]);

	if (!subDetails) {
		return (
			<section className="HBSubDetails">
				<h2>Loading Subscription Details...</h2>
			</section>
		)
	} else {
		return (
			<section className="HBSubDetails">
				<h2>{subDetails.attributes.title}</h2>
				<table>

				</table>
			</section>
		)
	}
}

export default DetailedSubscription