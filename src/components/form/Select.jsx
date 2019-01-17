import React from 'react';

const Select = props => (
	<div className="select-box">
		<select defaultValue={ props.defaultValue } onChange={ props.onChange }>
			{
				props.options.map((option, i) =>
					<option key={i}>
						{option}
					</option>
				)
			}
		</select>
	</div>
)

Select.defaultProps = {
	defaultValue: null,
	onChange: e => e.preventDefault(),
};

export default Select;
