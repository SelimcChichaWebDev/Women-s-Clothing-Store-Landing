/* eslint-disable react/prop-types */
import classes from '../../scss/footer.module.scss'

export const ListColumnFooter = () => {
	return (
		<div className={classes.list__column}>
			<ListProfile
				title={'Company'}
				listName1={'About'}
				listName2={'Contact us'}
				listName3={'Support'}
				listName4={'Careers'}
			/>
			<ListProfile
				title={'Quick Link'}
				listName1={'Share Location'}
				listName2={'Orders Tracking'}
				listName3={'Size Guide'}
				listName4={'FAQs'}
			/>
			<ul>
				<li>Legal</li>
				<li>Terms & conditions</li>
				<li>Privacy Policy</li>
			</ul>
		</div>
	)
}

function ListProfile({ title, listName1, listName2, listName3, listName4 }) {
	return (
		<ul>
			<li>{title}</li>
			<li>{listName1}</li>
			<li>{listName2}</li>
			<li>{listName3}</li>
			<li>{listName4}</li>
		</ul>
	)
}
