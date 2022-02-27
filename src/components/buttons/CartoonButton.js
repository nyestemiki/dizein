import styled, { css } from 'styled-components'

export default styled.button`
	/* colors */
	--hue: 326;
	--bg-saturation: 100%;
	--border-saturation: 20%;
	--side-saturation: 100%;
	--shadow-saturation: 25%;
	--bg-lightness: 93%;
	--side-lightness: 87%;
	--border-lightness: 35%;
	--shadow-lightness: 83%;

	/* sizes */
	--radius: 0.5rem;
	--border-width: 1px;

	/* overrides */
	${props =>
		props.hue &&
		css`
			--hue: ${props.hue};
		`}

	text-transform: uppercase;
	font-weight: bold;
	width: min-content;
	white-space: nowrap;
	padding: 1em 2em;
	border-radius: var(--radius);
	background-color: hsl(var(--hue), var(--bg-saturation), var(--bg-lightness));
	border: var(--border-width) solid
		hsl(var(--hue), var(--border-saturation), var(--border-lightness));
	position: relative;
	cursor: pointer;

	::before,
	::after {
		content: '';
		display: block;
		height: 50%;
		position: absolute;
		border-radius: var(--radius);
	}

	::before {
		width: calc(100% + 2 * var(--border-width));
		left: calc(-1 * var(--border-width));
		background-color: hsl(var(--hue), var(--side-saturation), var(--side-lightness));
		z-index: -1;
		border: var(--border-width) solid
			hsl(var(--hue), var(--border-saturation), var(--border-lightness));
	}

	::after {
		width: 100%;
		left: 0;
		background-color: hsl(var(--hue), var(--shadow-saturation), var(--shadow-lightness));
		border: none;
		z-index: -2;
		opacity: 0.5;
	}

	/* depth */
	--depth: 0.5rem;

	--duration: 0.1s;
	--timing: cubic-bezier(0.17, 0.67, 0.83, 0.67);

	::before {
		transition: var(--duration) bottom var(--timing);
		will-change: bottom;

		--multiplier: -1;
		bottom: calc(var(--multiplier) * var(--depth));
	}

	::after {
		transition: var(--duration) bottom var(--timing);
		will-change: bottom;

		--multiplier: -1.5;
		bottom: calc(var(--multiplier) * var(--depth));
	}

	--pressed: -0.25rem;

	top: var(--pressed);
	transition: var(--duration) top var(--timing);
	will-change: bottom;

	:hover:not(:disabled) {
		--depth: 0.25rem;
		--pressed: 0;
	}

	:active {
		--depth: 0.2rem;
		--pressed: 0.1rem;
	}

	:focus-visible {
		--depth: 0.25rem;
		--pressed: 0;
		outline: none;
	}

	:disabled {
		--bg-saturation: 25%;
		--border-saturation: 15%;
		--side-saturation: 25%;
		--shadow-saturation: 18%;
		cursor: not-allowed;
	}
`
