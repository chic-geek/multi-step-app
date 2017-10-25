/**
 * Convert a string to a camelCase string
 * @type {String}
 */

"use strict";

 const camelize = str => {
     return (
		 str.replace(
		 	/\W+(.)/g,
		 	(match, char) => char.toUpperCase()
		)
	);
 };

export default camelize;
