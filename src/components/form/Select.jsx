import React from 'react';
import PropTypes from 'prop-types';

const Select = props => (
	<div className="select-box">
		<select defaultValue={ props.defaultValue } onChange={ props.onChange }>
			{
				Object.entries(props.options).map(([value, option], i) =>
					<option value={value} key={i}>
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

Select.propTypes = {
	options: PropTypes.object.isRequired,
};

export default Select;
