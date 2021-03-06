const { createInputs, createButtons } = require('../../tools')

module.exports = function(element, value) {
	const params = [{ name: 'search', type: 'text', value, required: true }]
	const searchContainer = document.createElement('div')
	const inputContainer = document.createElement('div')
	inputContainer.className = 'search-input'
	createInputs(1, inputContainer, params)
	const button = createButtons('Search')
	inputContainer.appendChild(button)
	searchContainer.className = 'search-container'
	searchContainer.appendChild(inputContainer)
	element.appendChild(searchContainer)
}
