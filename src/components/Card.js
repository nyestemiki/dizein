import React, { useCallback, useState } from 'react'
import Portal from './Portal'
import Row from './Row'
import Settings from './Settings'
import { Styled, PortalContent } from './card/styles'
import Center from './Center'

const Card = ({ children, name, settings, ...props }) => {
	const [isOpen, setIsOpen] = useState(false)

	const copy = useCallback(() => navigator.clipboard.writeText(name), [name])

	return (
		<Styled {...props}>
			<Row>
				<code title='Click to copy' onClick={copy}>
					{name}
				</code>

				<span className='gear' onClick={() => setIsOpen(true)}>
					⚙
				</span>
			</Row>
			{children}
			<Portal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<PortalContent>
					<Center>{children}</Center>
					<div>
						<Settings settings={settings} />
					</div>
				</PortalContent>
			</Portal>
		</Styled>
	)
}

export default Card
