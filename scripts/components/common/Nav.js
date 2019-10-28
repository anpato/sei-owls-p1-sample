const { createButtons } = require('../../tools')
const createLinks = require('./NavLinks')

module.exports = function(body) {
	const linkContainer = createLinks()
	const nav = document.createElement('nav')

	const logInContainer = document.createElement('div')
	logInContainer.classList.add('log-in')

	const logInToggleButton = createButtons('Log In', {
		type: 'id',
		title: 'toggle-btn'
	})

	logInContainer.appendChild(logInToggleButton)
	nav.appendChild(logInContainer)
	nav.appendChild(linkContainer)
	body.appendChild(nav)
}
