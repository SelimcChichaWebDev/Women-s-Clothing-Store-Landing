/* eslint-disable react/prop-types */
import searchIcon from '../../../../../assets/icons/mobile/top/04.svg'

export const MobileSearch = ({ propsSearch }) => {
	return (
		<div className='mobile__search'>
			<input
				type='text'
				name='search'
				placeholder='Search'
				onChange={propsSearch}
			/>
			<img src={searchIcon} alt='icon search' />
		</div>
	)
}
