import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../DetailedSubscription/DetailedSubscription.css'

function DetailedSubscription() {
	const [subDetails, setSubDetails] = useState()
	const [selectedTeaDescription, setSelectedTeaDescription] = useState()
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

	const sub_teas = subDetails?.attributes?.teas?.map((tea) => {
		return (
			<option key={tea.title} value={tea.title}>
				{tea.title}
			</option>
		)
	})

	const printTeaDescription = (title) => {
		const tea = subDetails?.attributes?.teas?.find((tea) => tea.title === title);
		if (tea) {
			return (
				<section className="teaDescription">
					<p className="subInfo">Description:</p>
					<p className="teaValues">{tea.description}</p>
					<p className="subInfo">Temperature:</p>
					<p className="teaValues">{tea.temp}&deg;</p>
					<p className="subInfo">Brew Time:</p>
					<p className="teaValues">{tea.brew_time} - Mins</p>
				</section>
			)
		} else {
			return null
		}
	};

	const activeCustomers = subDetails?.attributes?.customers?.map((customer) => {
		if (subDetails.attributes.status == customer.sub_status) {
			return (
				<div key={customer.id} alt="Active Customer" className="Customers">
					<p key={customer.id}>{customer.first_name} {customer.last_name}</p>
					<a href={`mailto:${customer.email}`} alt="Email Customer">{customer.email}</a>
				</div>
			)
		}
	})

	const deactiveCustomers = subDetails?.attributes?.customers?.map((customer) => {
		if (subDetails.attributes.status != customer.sub_status) {
			return (
				<div key={customer.id} alt="Active Customer" className="Customers">
					<p key={customer.id}>{customer.first_name} {customer.last_name}</p>
					<a href={`mailto:${customer.email}`} alt="Email Customer">{customer.email}</a>
				</div>
			)
		}
	})

	if (!subDetails) {
		return (
			<section className="HBSubDetails">
				<h2>Loading Subscription Details...</h2>
			</section>
		)
	} else {
		return (
			<section className="HBSubDetails">
				<table>
					<thead>
						<tr className="subName">
							<td colSpan="4"><h2>{subDetails.attributes.title}</h2></td>
						</tr>
						<tr className="SubDetails">
							<td colSpan="2">
								<p className="subInfo">Subscription Price:</p>
							</td>
							<td colSpan="2">
								<p className="subInfo">Renews:</p>
							</td>
						</tr>
						<tr className="subPricing">
							<td colSpan="2"><p>${subDetails.attributes.price}0</p></td>
							<td colSpan="2"><p>{subDetails.attributes.frequency}</p></td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colSpan="2"><p className="subInfo">Teas Included:</p></td>
							<td colSpan="2"><p className="subInfo">Tea Description:</p></td>
						</tr>
						<tr>
							<td className="subTeaDesc" colSpan="2">
								<label className="subTeaList" for="Subscription Teas">Select Tea Description:</label>
								<select 
								id="Teas"
								name="HBTeas" 
								size="20" 
								onChange={(event) => setSelectedTeaDescription(printTeaDescription(event.target.value))}>
									{sub_teas}
								</select>
							</td>
							<td colSpan="2" className="subTeaDesc">{selectedTeaDescription}</td>
						</tr>
					</tbody>
					<tfoot>
						<tr className="subCustmers">
							<td colSpan="2"><p className="subInfo">Active Customers:</p></td>
							<td colSpan="2"><p className="subInfo">Deactive Customers:</p></td>
						</tr>
						<tr className="Customers">
							<td className="Customers" colSpan="2">
								{activeCustomers}
							</td>
							<td className="Customers" colSpan="2">
								{deactiveCustomers}
							</td>
						</tr>
					</tfoot>
				</table>
			</section>
		)
	}
}

export default DetailedSubscription