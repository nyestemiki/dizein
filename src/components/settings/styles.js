import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	h2 {
		font-weight: bold;
	}
`

const InnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`

const SettingItem = styled.div`
	display: flex;
	gap: 0.25rem;
	align-items: center;
	justify-content: space-between;
`

export { Wrapper, InnerWrapper, SettingItem }
