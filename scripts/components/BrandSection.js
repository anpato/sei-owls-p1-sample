const { createHeaders, createListItems } = require('../tools')
module.exports = function(body) {
	const brands = ['Nike', 'Adidas', 'Gucci', 'Cole Haan', 'Rolex', 'Supreme']
	const brandSection = document.createElement('section')
	const header = createHeaders('Products By')
	brandSection.className = 'brands'
	brandSection.appendChild(header)
	createListItems(brands, brandSection)

	body.appendChild(brandSection)
}
