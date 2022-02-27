import map from 'lodash/map'

const Select = ({ options, onChanged, selection }) => {
	return (
		<select onChange={onChanged} defaultValue={selection}>
			{map(options, ({ key, value }) => (
				<option key={key} value={value}>
					{key}
				</option>
			))}
		</select>
	)
}

export default Select
