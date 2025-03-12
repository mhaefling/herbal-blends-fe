import TeaCard from '../TeaCard/TeaCard'
import './TeasComponent.css'

function TeasComponent({ teas }) {

	const all_teas = teas.map(tea => {
		return (
			<TeaCard className="teaCard" key={tea.id} tea={tea} />
		)
	})

	return (
		<section className="HBTeaList">
		<h2>Available Teas</h2>
		<table>
			<thead className="SubSections">
				<tr>
					<td className="teaType"><p>Type:</p></td>
					<td className="teaName"><p>Name:</p></td>
					<td className="teaDescription"><p>Description:</p></td>
					<td className="teaTemp"><p>Temp:</p></td>
					<td className="teaBrewtime"><p>Brew Time:</p></td>
				</tr>
			</thead>
		</table>
		{all_teas}
	</section>
	)
}

export default TeasComponent