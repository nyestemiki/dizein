import ReactDOM from 'react-dom'

import { Close, Content, Modal, Overlay } from './portal/styles'

const Portal = ({ isOpen, onClose, children }) =>
	isOpen
		? ReactDOM.createPortal(
				<Overlay>
					<Modal>
						<Close onClick={onClose}>&times;</Close>
						<Content>{children}</Content>
					</Modal>
				</Overlay>,
				document.body
		  )
		: null

export default Portal
