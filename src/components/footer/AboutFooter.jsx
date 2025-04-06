import classes from '../../scss/footer.module.scss'
import { socialNets } from '../../utils/footer'

export const AboutFooter = () => {
	return (
		<div className={classes.about__column}>
			<a href='#' target='_blank' rel='noopener noreferrer'>
				fashion
			</a>
			<h1>Complete your style with awesome clothes from us.</h1>
			<div className={classes.social}>
				{socialNets.map(itemSocial => (
					<a
						key={itemSocial.id}
						href={itemSocial.link}
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={itemSocial.socialImg} alt={itemSocial.socialAtl} />
					</a>
				))}
			</div>
		</div>
	)
}
