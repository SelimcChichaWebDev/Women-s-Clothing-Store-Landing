import classes from '../../scss/footer.module.scss'
import { AboutFooter } from './AboutFooter'
import { ListColumnFooter } from './ListColumnFooter'

export const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className='__container'>
				<div className={classes.row}>
					<AboutFooter />
					<ListColumnFooter />
				</div>
			</div>
		</footer>
	)
}
