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
				<p>Description: {tea.description}</p>
				<p>Temperature: {tea.temp}</p>
				<p>Brew Time: {tea.brew_time}</p>
			</section>
		)
	} else {
		return null
	}
};

const sub_customers = subDetails?.attributes?.customers?.map((customer) => {
	return (
		<section>
			<p>{customer.first_name}</p>
			<p>{customer.last_name}</p>
			<p>{customer.email}</p>
			<p>{customer.sub_status}</p>
		</section>
	)
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
				<h2>{subDetails.attributes.title}</h2>
				<p>Subscription Price: {subDetails.attributes.price}</p>
				<label for="Subscription Teas">Select a Tea:</label>
				<select 
					id="Teas"
					name="HBTeas" 
					size="8" 
					onChange={(event) => setSelectedTeaDescription(printTeaDescription(event.target.value))}>

						{sub_teas}
				
				</select>
				{selectedTeaDescription}
				{sub_customers}
			</section>
		)
	}
}

export default DetailedSubscription