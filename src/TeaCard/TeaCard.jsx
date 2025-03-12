import teaIcon from '../assets/teaicon.png'
import './TeaCard.css'

function TeaCard({ tea }) {
	
	return (
		<section className="HBTeaCard">
			<table>
				<tbody>
					<tr>
						<td className="teaIcon"><img src={teaIcon} alt="Tea icon" /></td>
						<td className="teaName"><p>{tea.attributes.title}</p></td>
						<td className="teaDescription"><p>{tea.attributes.description}</p></td>
						<td className="teaTemp"><p>{tea.attributes.temp}&deg;</p></td>
						<td className="teaBrewtime"><p>{tea.attributes.brew_time} - Mins</p></td>
					</tr>
				</tbody>
			</table>
		</section>
	)
}

export default TeaCard