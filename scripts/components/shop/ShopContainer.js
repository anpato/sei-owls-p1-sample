const searchContainer = require('./SearchContainer')
const filterContainer = require('./FilterContainer')
module.exports = function(body, filters) {
	const container = document.createElement('div')
	container.className = 'container'
	searchContainer(container)
	container.appendChild(filterContainer(filters))
	body.appendChild(container)
	return container
}
