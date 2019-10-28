const renderSignUpCard = require('../common/SignUpCard')
module.exports = function(body) {
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
