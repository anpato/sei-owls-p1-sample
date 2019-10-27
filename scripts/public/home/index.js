const renderNav = require('../../components/Nav')
const renderLoginCard = require('../../components/LoginCard')
const renderContainer = require('../../components/Container')
const renderBrandSection = require('../../components/BrandSection')
const renderFooter = require('../../components/Footer')

function Main() {
	const body = document.querySelector('body')

	renderNav(body)
	renderLoginCard(body)
	renderContainer(body)
	renderBrandSection(body)
	renderFooter(body)
}

document.onload = Main()
