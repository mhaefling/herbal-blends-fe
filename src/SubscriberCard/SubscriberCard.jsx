import { Link } from 'react-router-dom'
import subIcon from '../assets/subicon.png'
import './SubscriberCard.css'

function SubscriberCard({ sub, status, setSubscriptions }) {

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

		fetch("http://localhost:3000/api/v1/subscriptions")
			.then((response) => response.json())
			.then((data) => {
				setSubscriptions(data.data)
			})
			.catch((error) => {
				console.log(error)
			}
		)
	}

	return (
		<section className="HBSubCard">
			<table>
				<tbody>
					<tr>
						<td className="subIcon"><img src={subIcon} alt="Subscription icon" /></td>
						<td className="subName">
							<Link className="subLink" to={`/subscriptions/${sub.id}`}>
								<p>{sub.attributes.title}</p>
							</Link>
						</td>
						<td className="subTotal"><p>{sub.attributes.total_active_customers}</p></td>
						<td className="subStatus"><p>{status}</p></td>
						<td>
							<button onClick={() => updateSubStatus(sub.id, !sub.attributes.status)}>Update Status</button>
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	)
}

export default SubscriberCard