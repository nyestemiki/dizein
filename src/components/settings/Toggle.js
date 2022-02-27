const Toggle = ({ active, onChanged }) => {
	return <input type='checkbox' onChange={onChanged} checked={active} />
}

export default Toggle
