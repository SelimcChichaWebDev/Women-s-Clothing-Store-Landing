import linkGP from '../../../assets/img/mobile/links/01.png'
import linkAS from '../../../assets/img/mobile/links/02.png'

export const MobileTitle = () => {
	return (
		<div className=' flex-initial md:mb-10'>
			<div className='text-4xl sm:text-2xl uppercase font-black space-y-1'>
				<h1>download app &</h1>
				<h2>get the voucher!</h2>
			</div>
			<div className='my-8 font-medium text-xl sm:text-sm text-[#7c7c7c] leading-9'>
				<p>
					Get 30% off for first transaction using <br /> Rondovision mobile app
					for now.
				</p>
			</div>
			<div className='flex gap-x-3 items-center max-w-80'>
				<a href='https://play.google.com/store/games?hl=ru'>
					<img src={linkGP} alt='Google play' />
				</a>
				<a href='https://www.apple.com/app-store/'>
					<img src={linkAS} alt='App store' />
				</a>
			</div>
		</div>
	)
}
