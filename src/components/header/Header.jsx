/* eslint-disable no-undef */
import { useRef } from 'react'
import '../../scss/header.scss'
import { Navigation } from './Navigation'
import logo from '/logo.svg'

export const Header = () => {
	const headerRef = useRef(null)
	const headerTlRef = useRef()

	return (
		<header ref={headerTlRef} className='header'>
			<div className='header__container __container'>
				<div className='header__body'>
					<div className='header__logo'>
						<a href='#' target='_blank' rel='noopener noreferrer'>
							<img src={logo} alt='logo' />
							<h1>fashion</h1>
						</a>
					</div>
					<Navigation headerRefProp={headerRef} />
				</div>
			</div>
		</header>
	)
}
