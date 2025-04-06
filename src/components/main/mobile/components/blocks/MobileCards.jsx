/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
import {
	mobileCard,
	mobileCardNew,
	mobileCardTrend,
} from '../../../../../utils/mobile'

export const MobileCards = ({ children }) => {
	return <div className='mobile__cards'>{children}</div>
}

export const CardsSearch = ({ isSearchInputCard }) => {
	return (
		<>
			{isSearchInputCard
				? mobileCard.map(card => (
						<div key={card.id} className='cards__item'>
							<img src={card.cardImg} alt={card.cardTitle} />
							<h1>{card.cardTitle}</h1>
							<h2>{card.cardSubTitle}</h2>
						</div>
				  ))
				: null}
		</>
	)
}

export const CardsAll = ({ onClickAllHandle }) => {
	return (
		<>
			{onClickAllHandle
				? mobileCard.map(card => (
						<div key={card.id} className='cards__item'>
							<img src={card.cardImg} alt={card.cardTitle} />
							<h1>{card.cardTitle}</h1>
							<h2>{card.cardSubTitle}</h2>
						</div>
				  ))
				: null}
		</>
	)
}

export const CardsTrend = ({ onClickTrendingHandle }) => {
	return (
		<>
			{onClickTrendingHandle
				? mobileCardTrend.map(card => (
						<div key={card.id} className='cards__item'>
							<img src={card.cardImg} alt={card.cardTitle} />
							<h1>{card.cardTitle}</h1>
							<h2>{card.cardSubTitle}</h2>
						</div>
				  ))
				: null}
		</>
	)
}

export const CardsNew = ({ onClickNewHandle }) => {
	return (
		<>
			{onClickNewHandle
				? mobileCardNew.map(card => (
						<div key={card.id} className='cards__item'>
							<img src={card.cardImg} alt={card.cardTitle} />
							<h1>{card.cardTitle}</h1>
							<h2>{card.cardSubTitle}</h2>
						</div>
				  ))
				: null}
		</>
	)
}
