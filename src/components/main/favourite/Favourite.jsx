/* eslint-disable react/no-unescaped-entities */
import iconArrow from '../../../assets/icons/arrow/arrow.svg'
import iconMain from '../../../assets/icons/main/01.svg'
import imageFavouriteOne from '../../../assets/img/favourite/01.jpg'
import imageFavouriteTwo from '../../../assets/img/favourite/02.jpg'
export const Favourite = () => {
	return (
		<section className='my-40'>
			<div className='__container relative'>
				<h1 className='__title sm:text-lg'>Young's Favourite</h1>
				<div className='absolute top-5 left-48 sm:left-40 sm:top-3'>
					<img
						src={iconMain}
						alt='icon main'
						className='w-[150px] sm:w-[70px]'
					/>
				</div>
				<div className='flex gap-x-7  items-center sm:flex-wrap sm:gap-y-4'>
					<div className='flex-auto'>
						<img src={imageFavouriteOne} alt='image favourite' />
						<div className='flex justify-between items-center  sm:flex-col sm:items-start py-5 h-40'>
							<div className='space-y-2'>
								<h1 className='font-medium text-lg sm:text-sm text-[#191919]'>
									Trending in instagram
								</h1>
								<h2 className='font-medium text-sm sm:text-xs text-[#7f7f7f]'>
									Explore Now!
								</h2>
							</div>
							<div className='w-[24px] cursor-pointer'>
								<img src={iconArrow} alt={'icon arrow'} />
							</div>
						</div>
					</div>
					<div className='flex-auto'>
						<img src={imageFavouriteTwo} alt='image favourite' />
						<div className='flex justify-between items-center  sm:flex-col sm:items-start py-5 h-40'>
							<div className='space-y-2'>
								<h1 className='font-medium text-lg sm:text-sm text-[#191919]'>
									All Under $40
								</h1>
								<h2 className='font-medium text-sm sm:text-xs text-[#7f7f7f]'>
									Explore Now!
								</h2>
							</div>
							<div className='w-[24px] cursor-pointer'>
								<img src={iconArrow} alt={'icon arrow'} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
