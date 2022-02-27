import styled from 'styled-components'

const Styled = styled.div`
	padding: 1rem;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;

	code {
		background: #f4f4f4;
		border-left: 3px solid #f36d33;
		color: #666;
		page-break-inside: avoid;
		font-family: monospace;
		max-width: 100%;
		padding: 0.25em 1em;
		cursor: pointer;

		:hover {
			background-color: #eee;
		}

		:active {
			background-color: #ccc;
		}
	}

	.gear {
		cursor: pointer;
		transition: 0.1s transform;
		will-change: transform;

		:hover {
			transform: scale(1.2);
		}
	}
`

const PortalContent = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;

	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`

export { Styled, PortalContent }
