import mobileHeaderIcon from '../../../../../assets/icons/mobile/top/01.svg'
import mobileHeaderLogo from '../../../../../assets/icons/mobile/top/02.svg'

export const MobileHeader = () => {
	return (
		<div className='mobile__header'>
			<div className='cursor-pointer'>
				<a href='#' target='_blank' rel='noopener noreferrer'>
					<img src={mobileHeaderIcon} alt='icon-mobile' />
				</a>
			</div>
			<div className='cursor-pointer'>
				<img src={mobileHeaderLogo} alt='' />
			</div>
		</div>
	)
}
