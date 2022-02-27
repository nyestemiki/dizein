import styled from 'styled-components'

const Overlay = styled.div`
	position: absolute;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.35);
`

const Modal = styled.div`
	background-color: white;
	border-radius: 1rem;
	box-shadow: 0 0 10px grey;
	margin: 2rem auto;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 90%;
	max-width: 800px;
	min-height: 150px;
`

const Close = styled.button`
	background: none;
	border-radius: 50%;
	border: 1px solid grey;
	line-height: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: 0.2s background;
	align-self: flex-end;

	:hover {
		background: rgba(0, 0, 0, 0.1);
	}
`

const Content = styled.div`
	flex: 1;
`

export { Close, Content, Modal, Overlay }
