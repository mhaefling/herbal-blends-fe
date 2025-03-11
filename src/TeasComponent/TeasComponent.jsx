import teaIcon from '../assets/teaicon.png'
import './TeasComponent.css'

function TeasComponent({ teas }) {

	const all_teas = teas.map(tea => {
		return (
			<tbody key={tea.id}>
				<tr>
					<td className="teaIcon">
						<img src={teaIcon} alt="Little tea icon for each tea." />
					</td>
					<td alt="Tea Name">
							<p>{tea.attributes.title}</p>
					</td>
					<td alt="Tea Description">
							<p>{tea.attributes.description}</p>
					</td>
					<td alt="Tea Temp">
							<p>{tea.attributes.temp}</p>
					</td>
					<td alt="Tea brew time">
						<p>{tea.attributes.brew_time}</p>
					</td>
				</tr>
			</tbody>
		)
	})

	return (
		<section className="HBTeaList">
		<h2>Available Teas</h2>
		<table>
			{all_teas}
		</table>
	</section>
	)
}

export default TeasComponent