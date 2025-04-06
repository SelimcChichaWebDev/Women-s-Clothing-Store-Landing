import iconMain from '../../../assets/icons/main/01.svg'
import { cardInfo } from '../../../utils/card'

export const CardMain = () => {
	return (
		<section className='mt-20'>
			<div className='__container relative'>
				<h1 className='__title'>new arrivals</h1>
				<div className='absolute top-5 left-40'>
					<img src={iconMain} alt='icon main' className='w-[100px]' />
				</div>
				<div className='grid grid-cols-3 gap-x-8'>
					{cardInfo.map(card => (
						<div key={card.id} className='grid-flow-col'>
							<img src={card.cardImage} alt={card.cardAlt} />
							<div className='flex justify-between items-center  sm:flex-col sm:items-start py-5 h-40'>
								<div className='space-y-2'>
									<h1 className='font-medium text-lg sm:text-sm text-[#191919]'>
										{card.cardTitle}
									</h1>
									<h2 className='font-medium text-sm sm:text-xs text-[#7f7f7f]'>
										{card.cardSubtitle}
									</h2>
								</div>
								<div className='w-[24px] cursor-pointer'>
									<img src={card.cardIcon} alt={card.cardAltIcon} />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
