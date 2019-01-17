import React from 'react';
import PropTypes from 'prop-types';

const QuickDetail = props => (
	<li className="quick-details__item flex middle">
		<img
			src={ props.image }
			alt="Icon"
			className={ `quick-details__item-icon quick-details__item-icon--${ props.bg }` }
		/>
		<span className="quick-details__item-about">{ props.about }</span>
		<span className="quick-details__item-duration">{ props.duration }</span>
	</li>
);

QuickDetail.propTypes = {
	image: PropTypes.string.isRequired,
	about: PropTypes.string.isRequired,
	duration: PropTypes.string.isRequired,
};

export default QuickDetail;
