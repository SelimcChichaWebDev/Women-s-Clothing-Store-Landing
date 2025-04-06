// eslint-disable-next-line react/prop-types
export const Wrapper = ({ children }) => {
	return (
		<div className='min-h-[100vh] overflow-hidden flex flex-col'>
			{children}
		</div>
	)
}
