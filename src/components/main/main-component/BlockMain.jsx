/* eslint-disable react/no-unescaped-entities */
import iconMain from '../../../assets/icons/main/01.svg'
import iconStar from '../../../assets/icons/main/star.svg'
import imageMain from '../../../assets/img/main/01.jpg'
import { Btn } from '../../btn'

export const BlockMain = () => {
	return (
		<section className='mt-32'>
			<div className='__container bg-[#F4F6F5] rounded-[59px]'>
				<div className='flex gap-3 justify-around pt-12'>
					<div className='md:flex md:flex-wrap md:space-x-5 space-y-2'>
						<div className='main__title'>
							<h1 className='text-[66px] font-black leading-tight uppercase bg-white py-2 pl-4 -rotate-3'>
								let's
							</h1>
							<h1 className='text-[66px] font-black leading-tight uppercase '>
								explore
							</h1>
							<h1 className='text-[66px] font-black leading-tight uppercase bg-[#e6c744] py-2 pl-4 -rotate-3'>
								unique
							</h1>
							<h1 className='text-[66px] font-black leading-tight uppercase'>
								clothes.
							</h1>
							<p className='py-3'>
								Live for Influential and Innovative fashion!
							</p>
						</div>
						<div className='flex items-center space-x-5 pb-10'>
							<img src={iconMain} alt='icon main' className='w-[100px]' />
							<div>
								<Btn title={'Shop Now'} />
							</div>
						</div>
					</div>
					<div className='md:hidden flex max-w-[560px] items-end relative'>
						<img src={imageMain} alt='main image' />
						<img
							src={iconStar}
							alt='icon star'
							className='absolute top-0 left-0 w-10 z-2'
						/>
						<img
							src={iconStar}
							alt='icon star'
							className='absolute top-10 right-0 w-10 z-2'
						/>
						<img
							src={iconStar}
							alt='icon star'
							className='absolute bottom-3 left-5 w-10 z-2'
						/>
						<img
							src={iconStar}
							alt='icon star'
							className='absolute bottom-10 right-5 w-10 z-2'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
