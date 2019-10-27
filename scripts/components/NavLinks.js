module.exports = function() {
	const linkText = ['Home', 'Shop', 'About']
	const linkContainer = document.createElement('div')
	linkContainer.setAttribute('class', 'links')
	for (let i = 0; i < linkText.length; i++) {
		const link = document.createElement('a')
		link.innerText = linkText[i]
		link.setAttribute(
			'href',
			i === 0 ? '/' : `./pages/${linkText[i].toLowerCase()}.html`
		)
		linkContainer.appendChild(link)
	}
	return linkContainer
}
