import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Wrapper } from './components/wrapper'
import './scss/App.scss'

export default function App() {
	return (
		<Wrapper>
			<Header />
			<Main />
			<Footer />
		</Wrapper>
	)
}
