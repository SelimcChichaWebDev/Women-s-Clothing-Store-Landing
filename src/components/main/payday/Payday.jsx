import payDayIcon from '../../../assets/icons/main/star.svg'
import payDayImage from '../../../assets/img/payday/01.jpg'

export const PayDay = () => {
	return (
		<section className='bg-[#F7DB53]'>
			<div className='__container '>
				<div className='grid grid-cols-2 place-items-center md:grid-cols-1 md:py-8'>
					<div className='relative md:hidden'>
						<img src={payDayImage} alt='image pay-day' className='' />
						<img
							className='absolute top-40 left-32 w-12 -rotate-45'
							src={payDayIcon}
							alt='icon star'
						/>
						<img
							className='absolute top-56 right-28 w-12  -rotate-45'
							src={payDayIcon}
							alt='icon star'
						/>
						<img
							className='absolute bottom-72 left-44 w-12  -rotate-45'
							src={payDayIcon}
							alt='icon star'
						/>
						<img
							className='absolute bottom-44 right-40 w-12'
							src={payDayIcon}
							alt='icon star'
						/>
					</div>
					<div className='md:grid '>
						<div className='font-black text-6xl sm:text-4xl uppercase space-y-3'>
							<h1 className='bg-white inline-block py-2 px-4 -rotate-2'>
								payday
							</h1>
							<h2>sale now</h2>
						</div>
						<div className='my-5 max-w-96'>
							<p className='font-normal text-xl leading-8'>
								Spend minimal $120 get 30% off voucher code for your next
								purchase
							</p>
						</div>
						<div className='space-y-3 mb-5'>
							<span className='font-bold text-xl'>1 June - 12 June 2021</span>
							<h2 className='font-normal text-xl'>*Terms & Conditions apply</h2>
						</div>
						<button className=' rounded-md bg-black text-white hover:text-black uppercase px-10 py-6 text-xl font-semibold hover:bg-[#fff] transition-colors'>
							shop now
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
