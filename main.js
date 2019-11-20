(function() {

	let contents = document.querySelectorAll('.c-content');
	let buttons = document.querySelectorAll('.btn');
	let cContainer = document.querySelector('.c-content-container');
	let currentValue = document.querySelector('.c-active').attributes.dataValue.value
	let initialHeight = document.querySelector('.c-content').offsetHeight;
	let initialWidth = document.querySelector('.c-content').offsetWidth;

	init()

	for(var i = 0; i < buttons.length; i++) {

		buttons[i].addEventListener('click', function(e) {

			e.preventDefault
			e.stopPropragation

			if(this.classList.contains('left')) {

				init()
				prev(currentValue - 1)
				currentValue = document.querySelector('.c-active').attributes.dataValue.value
			}else {

				init()
				next(currentValue - 1)
				currentValue = document.querySelector('.c-active').attributes.dataValue.value
			}
		})
	}

	function next(elt) {

		if(elt == contents.length - 1) {

			removeActive()
			contents[0].classList.remove('hide')
			contents[0].classList.add('c-active')
		}else {

			removeActive()
			contents[elt + 1].classList.remove('hide')
			contents[elt + 1].classList.add('c-active')
		}
	}

	function prev(elt) {

		if(elt == 0) {

			var last = contents.length
			removeActive()
			contents[last - 1].classList.remove('hide')
			contents[last - 1].classList.add('c-active')

		}else {

			removeActive()
			contents[elt - 1].classList.remove('hide')
			contents[elt - 1].classList.add('c-active')
		}
	}

	function removeActive() {

		for(var i = 0; i < contents.length; i++) {

			contents[i].classList.remove('c-active')
			contents[i].classList.add('hide')
		}
	}

	function init() {
		
		for(var i = 0; i < contents.length; i++) {

			if(!contents[i].classList.contains('c-active')) {
				contents[i].style.display = 'none'
			}

			contents[i].style.marginTop = ((cContainer.offsetHeight - initialHeight) / 2)+"px"
			contents[i].style.marginLeft = ((cContainer.offsetWidth - initialWidth) / 2)+"px"
		}
	}
})();