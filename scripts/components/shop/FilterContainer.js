const snack = require('../common/Snack')
module.exports = function(filters) {
	const filterContainer = document.createElement('div')
	filterContainer.className = 'filter-container'

	if (filters.length) {
		snacks.forEach((snack) => filterContainer.appendChild(snack))
	}
	return filterContainer
}
