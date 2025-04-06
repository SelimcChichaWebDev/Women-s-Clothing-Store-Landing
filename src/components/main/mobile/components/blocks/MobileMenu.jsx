/* eslint-disable react-hooks/exhaustive-deps */
import { Home, Menu, ShoppingCart, User } from 'lucide-react'
import { useCallback, useState } from 'react'

export const MobileMenu = () => {
	const [countCart, setCountCart] = useState(0)
	const countIncrement = useCallback(() => {
		setCountCart(countCart + 1)
	}, [countCart, setCountCart])
	return (
		<nav className='mobile__menu'>
			<ul>
				<li>
					<a href='#!'>
						<Home className='menu__icons' />
					</a>
				</li>
				<li>
					<a href='#!'>
						<Menu className='menu__icons' />
					</a>
				</li>
				<li className='list__cart'>
					<a href='#!'>
						<ShoppingCart
							className='menu__icons'
							onClick={e => {
								e.preventDefault()
								countIncrement()
							}}
						/>
						<span className='icon__cart'>{countCart}</span>
					</a>
				</li>
				<li>
					<a href='#!'>
						<User className='menu__icons' />
					</a>
				</li>
			</ul>
		</nav>
	)
}
