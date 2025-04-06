/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { useRef, useState } from 'react'
import '../../scss/header.scss'
import { navigationList } from '../../utils/navbar'
import { Btn } from '../btn'

export const Navigation = ({ headerRefProp }) => {
	const [isOpen, setIsOpen] = useState(false)
	const burgerRef = useRef(null)
	const menuListRef = useRef(null)

	const clickBurgerHandle = () => {
		if (isOpen) {
			menuListRef.current.classList.toggle('menu__active')
			burgerRef.current.classList.toggle('burger__active')
			headerRefProp.current.classList.toggle('header__active')
		}
	}

	return (
		<>
			<div
				onClick={() => {
					setIsOpen(true)
					clickBurgerHandle()
				}}
				ref={burgerRef}
				className='menu__burger'
			>
				<span></span>
			</div>

			<nav ref={menuListRef} className='header__menu'>
				<ul className='menu__list'>
					{navigationList.map(item => (
						<li key={item.id}>{item.title}</li>
					))}
				</ul>
				<Btn title={'sign up'} />
			</nav>
		</>
	)
}
