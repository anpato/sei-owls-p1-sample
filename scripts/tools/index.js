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

function createHeaders(title) {
	const header = document.createElement('h3')
	header.innerText = title
	return header
}

module.exports = {
	createHeaders,
	createInputs,
	createListItems,
	createButtons
}
