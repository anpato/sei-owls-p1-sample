const nav = require('../../components/Nav')
const shopContainer = require('../../components/ShopContainer')
function Main() {
	const body = document.querySelector('body')
	nav(body)
	shopContainer(body)
}

document.onload = Main()
