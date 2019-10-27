const snack = require('./Snack')
module.exports = function(element) {
	const filterContainer = document.createElement('div')
	filterContainer.className = 'filter-container'
	snack(filterContainer)
	element.appendChild(filterContainer)
}
