import { brandsInfo } from '../../../utils/brands'

export const Brand = () => {
	return (
		<section className='mt-16 bg-[#EBD96B]'>
			<div className='__container'>
				<div className='grid grid-cols-6 gap-x-4 place-items-center pt-16 pb-14 sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-8'>
					{brandsInfo.map(brand => (
						<div key={brand.id} className='place-self-center cursor-pointer'>
							<img src={brand.brandImage} alt={brand.brandAlt} />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
