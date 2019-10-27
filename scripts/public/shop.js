function Main() {
	const body = document.querySelector('body')
	const products = [
		{
			name: 'Iphone 11 Pro',
			image:
				'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812930312',
			price: '$1200.00'
		},
		{
			name: 'Ipad Pro',
			image:
				'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-201810?wid=435&amp;hei=550&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1540576039631',
			price: '$999.00'
		},
		{
			name: 'Macbook Pro 15-inch',
			image:
				'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp15touch-space-select-201807?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1529520056969',
			price: '$2399.00'
		},
		{
			name: 'Nike Lebron 17',
			image:
				'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ch5saivwwtxwfk1sej4u/lebron-17-basketball-shoe-6LSXgh.jpg',
			price: '$200.00'
		},
		{
			name: 'Nike Air Zoom Pegasus',
			image:
				'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ijvfwori4n0f0kjnkexe/air-zoom-pegasus-36-shield-mens-running-shoe-24FBGb.jpg',
			price: '$130.00'
		},
		{
			name: 'Nike Epic Phantom React',
			image:
				'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ovscbyirqelax6dwupad/custom-nike-epic-react-flyknit-2-by-you.jpg',
			price: '$170.00'
		},
		{
			name: 'Adidas Pharrel Williams X',
			image:
				'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/5f2e6a6d52544b118388aa4f010ff35a_9366/Pharrell_Williams_x_adidas_Solar_Hu_Shoes_White_EF2378_01_standard.jpg',
			price: '$160.00'
		},
		{
			name: 'Adidas Alpha Boost',
			image:
				'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/d5997cf97dbd497ab14fa9fc0170f82f_9366/Alphaboost_Shoes_White_G28581_01_standard.jpg',
			price: '$150.00'
		},
		{
			name: 'Cole Haan ZERØGRAND Anorak',
			image:
				'https://www.colehaan.com/on/demandware.static/-/Sites-itemmaster_colehaan/default/dw3f91df2b/images/large/T50128_M.jpg',
			price: '$120.00'
		}
	]
	function createLinks() {
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

	function createListItems(items, element) {
		const ul = document.createElement('ul')
		for (let i = 0; i < items.length; i++) {
			const listItem = document.createElement('li')
			listItem.innerText = items[i]
			ul.appendChild(listItem)
		}
		element.appendChild(ul)
	}

	function createButtons(text, attribute) {
		const button = document.createElement('button')
		button.innerText = text
		if (attribute) button.setAttribute(attribute.type, attribute.title)

		return button
	}

	function createInputs(num, element, params) {
		for (let i = 0; i < num; i++) {
			const inputContainer = document.createElement('div')
			inputContainer.classList.add('input')
			const input = document.createElement('input')
			const label = document.createElement('label')
			const span = document.createElement('span')

			for (let j = 0; j < params.length; j++) {
				label.setAttribute('for', params[i].name)
				span.innerText =
					params[i].name[0].toUpperCase() + params[i].name.substring(1)

				input.setAttribute('name', params[i].name)
				input.setAttribute('type', params[i].type)
				if (params[j].required === true) {
					input.setAttribute('required', '')
				}
			}
			label.appendChild(span)
			inputContainer.appendChild(input)
			inputContainer.appendChild(label)
			element.appendChild(inputContainer)
		}
		return element
	}

	function nav() {
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

	function searchContainer(element) {
		const params = [{ name: 'search', type: 'text', required: true }]
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

	function filterContainer(element) {
		const filterContainer = document.createElement('div')
		filterContainer.className = 'filter-container'
		// snack(filterContainer)
		element.appendChild(filterContainer)
	}

	function shopContainer() {
		const container = document.createElement('div')
		container.className = 'container'
		searchContainer(container)
		filterContainer(container)
		body.appendChild(container)
		return container
	}

	function itemContainer(element) {
		const productContainer = document.createElement('div')
		productContainer.className = 'product-container'
		products.forEach((item) => {
			const product = document.createElement('div')
			product.className = 'item'
			const image = document.createElement('img')
			image.setAttribute('src', item.image)
			const price = document.createElement('p')
			price.innerText = item.price
			const title = document.createElement('h3')
			title.innerText = item.name
			const purchase = document.createElement('div')
			purchase.className = 'buy-now'
			const button = createButtons('Buy Now')
			purchase.append(button, price)

			product.append(image, title, purchase)
			return productContainer.append(product)
		})
		element.appendChild(productContainer)
	}
	function footer(element) {
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
		element.appendChild(footer)
	}

	nav()
	itemContainer(shopContainer())
	footer(body)
}

document.onload = Main()
