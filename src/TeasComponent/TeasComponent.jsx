import TeaCard from '../TeaCard/TeaCard'
import './TeasComponent.css'

function TeasComponent({ teas }) {

	const all_teas = teas.map(tea => {
		return (
			<TeaCard className="teaCard" key={tea.kid} tea={tea} />
		)
	})

	return (
		<section className="HBTeaList">
		<h2>Available Teas</h2>
		<table>
			<thead className="SubSections">
				<tr>
					<td><p>Type:</p></td>
					<td><p>Name:</p></td>
					<td><p>Description:</p></td>
					<td><p>Temp:</p></td>
					<td><p>Brew Time:</p></td>
				</tr>
			</thead>
		</table>
		{all_teas}
	</section>
	)
}

export default TeasComponent