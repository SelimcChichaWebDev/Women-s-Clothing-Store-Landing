import { Btn } from '../../btn'

export const FormCommunity = () => {
	return (
		<section className='bg-[#E5C643]'>
			<div className='__container'>
				<form action='#' method='post'>
					<div className='flex flex-col justify-center text-center items-center py-16 space-y-10'>
						<h1 className=' font-black text-4xl leading-10 text-white  w-6/12'>
							JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
						</h1>
						<h2 className='font-normal text-xl text-[#fffcf8]'>
							Type your email down below and be young wild generation
						</h2>
						<div className='xxsm:px-2 bg-white px-4 py-2 rounded-md xxs:flex '>
							<input
								type='email'
								placeholder='Add your email here'
								className='outline-none border-none pr-10 xxsm:pr-5'
							/>
							<Btn title={'SEND'} />
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}
