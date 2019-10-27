function Main() {
	const body = document.querySelector('body')
	function LoginCardControl() {
		let loginButton = document.getElementById('toggle-btn')
		let loginForm = document.querySelector('.login-card')

		loginButton.addEventListener('click', () => {
			if (loginForm.classList.contains('closed')) {
				loginForm.classList.remove('closed')
				loginForm.classList.add('open')
			} else {
				loginForm.classList.add('closed')
				loginForm.classList.remove('open')
			}
		})
	}
	// resusable element creators
	// creates multiple inputs
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
	// end create multiple inputs
	// creates links for nav
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
	// end create links for nav
	function createHeaders(title) {
		const header = document.createElement('h3')
		header.innerText = title
		return header
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
	// end resusable element creators

	function renderNav() {
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

	function renderLoginCard() {
		const inputParams = [
			{ name: 'username', type: 'text', required: true },
			{ name: 'password', type: 'password', required: true }
		]
		const loginCard = document.createElement('div')
		loginCard.classList.add('login-card', 'closed')
		const formContainer = document.createElement('div')
		const loginForm = document.createElement('form')
		const formHeader = createHeaders('Sign In')
		const loginButton = createButtons('Sign In')
		const triangle = document.createElement('div')
		triangle.className = 'triangle'
		formContainer.classList.add('form')
		formContainer.append(formHeader, loginForm)
		loginCard.append(triangle, formContainer)

		createInputs(2, loginForm, inputParams)
		loginForm.appendChild(loginButton)
		body.appendChild(loginCard)
		LoginCardControl()
	}

	function renderSignUpCard() {
		const params = [
			{ name: 'name', type: 'text', required: true },
			{ name: 'email', type: 'email', required: true },
			{ name: 'username', type: 'text', required: true },
			{ name: 'password', type: 'password', required: true }
		]
		const formContainer = document.createElement('div')
		formContainer.className = 'form'
		const form = document.createElement('form')
		const formHeader = createHeaders('Sign Up')
		formContainer.appendChild(formHeader)
		createInputs(4, form, params)
		const button = createButtons('Sign Up')
		form.appendChild(button)
		formContainer.appendChild(form)
		return formContainer
	}

	function renderContainer() {
		const hero = document.createElement('div')
		const left = document.createElement('div')
		const right = document.createElement('div')
		left.classList.add('left')
		right.classList.add('right')
		right.appendChild(renderSignUpCard())
		hero.append(left, right)
		hero.classList.add('hero')
		body.appendChild(hero)
	}

	function renderBrandSection() {
		const brands = ['Nike', 'Adidas', 'Gucci', 'Cole Haan', 'Rolex', 'Supreme']
		const brandSection = document.createElement('section')
		const header = createHeaders('Products By')
		brandSection.className = 'brands'
		brandSection.appendChild(header)
		createListItems(brands, brandSection)

		body.appendChild(brandSection)
	}

	function renderFooter() {
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

	function run() {
		renderNav()
		renderLoginCard()
		renderContainer()
		renderBrandSection()
		renderFooter()
	}
	run()
}

window.onload = Main()
