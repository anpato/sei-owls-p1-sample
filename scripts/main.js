function Main() {
	function LoginCard() {
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
	LoginCard()
}

window.onload = Main()
