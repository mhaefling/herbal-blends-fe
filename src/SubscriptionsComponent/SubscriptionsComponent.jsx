import { Link } from 'react-router-dom'
import subIcon from '../assets/subicon.png'
import './SubscriptionsComponent.css'

function SubscriptionsComponent({ subscriptions, setSubscriptions }) {

	function updateSubStatus(subId, statusRequest) {
		fetch(`http://localhost:3000/api/v1/subscriptions/${subId}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				status: statusRequest
			}),
		})
		.then((response) => response.json())
		.then((data) => {
			setSubscriptions((prevSubscriptions) => 
				prevSubscriptions.map((sub) =>
					sub.id === subId ? { ...sub, ...data.data } : sub
				)
			);
		})
		.catch((error) => console.log(error))
	}
	
	var status = ""
	const all_subs = subscriptions.map(sub => {
		if (sub.attributes.status === true) {
			status = "Active"
		} else { 
			status = "Deactive"
		}

		return (
			<tbody key={sub.id}>
				<tr>
					<td className="teaIcon">
						<img src={subIcon} alt="Little tea icon for each subscription" />
					</td>
					<td alt="Subscription Title">
						<Link to={`/subscriptions/${sub.id}`}>
							{sub.attributes.title}
						</Link>
					</td>
					<td alt="Total Customers Subscribed">
						<p>{sub.attributes.total_active_customers}</p>
					</td>
					<td>
						<p>{status}</p>
					</td>
					<td>
						<button onClick={() => updateSubStatus(sub.id, !sub.attributes.status)}>Update Status</button>
					</td>
				</tr>
		</tbody>
		)
	})
	
	return (
		<section className="HBSubList">
			<h2>Subscriptions</h2>
			<table>
				<thead className="SubSections">
					<tr>
						<td>
							<p>Type:</p>
						</td>
						<td>
							<p>Subscription Name:</p>
						</td>
						<td>
							<p>Total Customers:</p>
						</td>
						<td>
							<p>Status:</p>
						</td>
						<td>
							<p>Update:</p>
						</td>
					</tr>
				</thead>
				{all_subs}
			</table>
		</section>
	)
}

export default SubscriptionsComponent