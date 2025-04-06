/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import { mobileCard } from '../../../utils/mobile'
import { MobileBlocks } from './components/MobileBlocks'
import { MobileBtn } from './components/blocks/MobileBtn'
import {
	CardsAll,
	CardsNew,
	CardsSearch,
	CardsTrend,
	MobileCards,
} from './components/blocks/MobileCards'
import { MobileHeader } from './components/blocks/MobileHeader'
import { MobileMenu } from './components/blocks/MobileMenu'
import { MobileSearch } from './components/blocks/MobileSearch'
import { MobileTitle } from './components/blocks/MobileTitle'

export const MobileApp = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [isShowSearchInputCard, setIsShowSearchInputCard] = useState(false)
	const [isShowCardAll, setIsShowCardAll] = useState(false)
	const [isShowCardTrend, setIsShowCardTrend] = useState(false)
	const [isShowCardNew, setIsShowCardNew] = useState(false)
	const onInputSearch = e => {
		mobileCard.filter(item => {
			if (item.cardTitle || item.cardSubTitle === e.target.value) {
				setIsShowSearchInputCard(true)
				setIsShowCardAll(false)
				setIsShowCardTrend(false)
				setIsShowCardNew(false)
			} else false
		})
	}
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(true)
		}, 5000)
	}, [isLoading, setIsLoading])
	return (
		<div className='mobile__app'>
			<div className='mobile__body'>
				<MobileBlocks>
					<MobileHeader />
					<MobileTitle />
					<MobileSearch propsSearch={onInputSearch} />
					<MobileBtn
						onClickAllHandle={() => {
							setIsShowCardAll(true)
							setIsShowCardTrend(false)
							setIsShowCardNew(false)
							setIsShowSearchInputCard(false)
						}}
						onClickTrendingHandle={() => {
							setIsShowCardTrend(true)
							setIsShowCardAll(false)
							setIsShowCardNew(false)
							setIsShowSearchInputCard(false)
						}}
						onClickNewHandle={() => {
							setIsShowCardNew(true)
							setIsShowCardTrend(false)
							setIsShowCardAll(false)
							setIsShowSearchInputCard(false)
						}}
					/>
					{isLoading ? (
						<MobileCards>
							{isShowSearchInputCard ? (
								<CardsSearch isSearchInputCard={isShowSearchInputCard} />
							) : null}
							{isShowCardAll ? (
								<CardsAll onClickAllHandle={isShowCardAll} />
							) : null}
							{isShowCardTrend ? (
								<CardsTrend onClickTrendingHandle={isShowCardTrend} />
							) : null}
							{isShowCardNew ? (
								<CardsNew onClickNewHandle={isShowCardNew} />
							) : null}
						</MobileCards>
					) : (
						<h1 className='text-center font-bold text-sm'>Loading...</h1>
					)}
					<MobileMenu />
				</MobileBlocks>
			</div>
		</div>
	)
}
