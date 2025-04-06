/* eslint-disable react/prop-types */
export const MobileBtn = ({
	onClickTrendingHandle,
	onClickAllHandle,
	onClickNewHandle,
}) => {
	return (
		<div className='mobile__btn'>
			<button
				onClick={onClickTrendingHandle}
				className={onClickTrendingHandle ? 'btn__active' : ''}
			>
				Trending Now
			</button>
			<button
				onClick={onClickAllHandle}
				className={onClickTrendingHandle ? 'btn__active' : ''}
			>
				All
			</button>
			<button
				onClick={onClickNewHandle}
				className={onClickTrendingHandle ? 'btn__active' : ''}
			>
				New
			</button>
		</div>
	)
}
