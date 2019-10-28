const { createListItems } = require('../../tools')
module.exports = function(body) {
	const items = ['Policy', 'Contact', 'Terms and Conditions']
	const footer = document.createElement('footer')
	const adminLinks = document.createElement('div')
	const copyright = document.createElement('h4')
	const designer = document.createElement('p')
	designer.innerText = 'Design by Andre Pato'
	footer.className = 'main-footer'
	copyright.innerText = 'Copyright \u00A9 Andre Pato 2019'
	adminLinks.className = 'admin'
	createListItems(items, adminLinks)
	footer.append(adminLinks, copyright, designer)
	body.appendChild(footer)
}
