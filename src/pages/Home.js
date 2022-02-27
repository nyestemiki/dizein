import React, { useState } from 'react'
import styled from 'styled-components'
import { CartoonButton } from '../components'
import Card from '../components/Card'
import { settingTypes } from '../components/Settings'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 1rem;
	max-width: 1000px;
	margin: 0 auto;

	h1 {
		margin: 1.5rem 0;
		font-size: 2.5rem;
	}
`

const ContentWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 1rem;
`

const Home = () => {
	const [selectedColor, setSelectedColor] = useState('red')
	const [isDisabled, setIsDisabled] = useState(false)

	return (
		<Wrapper>
			<h1>Dizein</h1>
			<ContentWrapper>
				<Card
					name='<CartoonButton/>'
					settings={[
						{
							type: settingTypes.SELECT,
							name: 'Color',
							values: [
								{ key: 'Red', value: 'red' },
								{ key: 'Blue', value: 'blue' }
							],
							selection: selectedColor,
							onSettingChanged: e => setSelectedColor(e.target.value)
						},
						{
							type: settingTypes.TOGGLE,
							name: 'Disabled',
							selection: isDisabled,
							onSettingChanged: e => setIsDisabled(e.target.checked)
						}
					]}
				>
					<CartoonButton
						hue={selectedColor === 'red' ? '0' : '233'}
						disabled={isDisabled}
					>
						Button
					</CartoonButton>
				</Card>
			</ContentWrapper>
		</Wrapper>
	)
}

export default Home
