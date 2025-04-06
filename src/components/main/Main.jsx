import { Brand } from './brands/Brand'
import { CardMain } from './card/CardMain'
import { FormCommunity } from './community/FormCommunity'
import { Favourite } from './favourite/Favourite'
import { BlockMain } from './main-component/BlockMain'
import { MobileApp } from './mobile/MobileApp'
import { MobileMain } from './mobile/MobileMain'
import { MobileTitle } from './mobile/MobileTitle'
import { PayDay } from './payday/Payday'

export const Main = () => {
	return (
		<main className='flex-auto'>
			<BlockMain />
			<Brand />
			<CardMain />
			<PayDay />
			<Favourite />
			<MobileMain>
				<MobileTitle />
				<MobileApp />
			</MobileMain>
			<FormCommunity />
		</main>
	)
}
