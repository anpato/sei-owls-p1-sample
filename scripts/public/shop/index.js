const Nav = require('../../components/common/Nav')
const ShopContainer = require('../../components/shop/ShopContainer')
const FilterContainer = require('../../components/shop/FilterContainer')
const SearchContainer = require('../../components/shop/SearchContainer')
const ProductContainer = require('../../components/shop/ProductContainer')

function Main() {
	const body = document.querySelector('body')
	let query = ''
	Nav(body)
	ShopContainer(body, query)
	// SearchContainer(ShopContainer())
}
Main()
