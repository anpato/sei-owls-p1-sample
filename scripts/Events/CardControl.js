module.exports = function() {
	let loginButton = document.getElementById('toggle-btn')
	let loginForm = document.querySelector('.login-card')

	loginButton.addEventListener('click', () => {
		if (loginForm.classList.contains('closed')) {
			loginForm.classList.remove('closed')
			loginForm.classList.add('open')
			loginForm.classList.remove('hidden')
		} else {
			loginForm.classList.add('closed')
			loginForm.classList.remove('open')
			setTimeout(() => loginForm.classList.add('hidden'), 1000)
		}
	})
}
