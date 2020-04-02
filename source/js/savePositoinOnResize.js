window.addEventListener('load', () => {
	let xOffset = null
	let slideWidth = null
	let activeSlide = null
	let screenWidth = null

	const slides = document.querySelectorAll('.slide')

	function getSideWidth(slideWidth) {
		return parseInt((window.pageXOffset + window.innerWidth) / slideWidth)
	}

	function setParameters() {
		xOffset = window.pageXOffset
		slideWidth = document.querySelector('#slideNumber1').getBoundingClientRect().width
		activeSlide = getSideWidth(slideWidth)
		screenWidth = window.innerWidth
	}

	setParameters()

	window.addEventListener('scroll', () => {
		if (window.innerWidth > 560)
			activeSlide = getSideWidth(slideWidth)
	})

	window.addEventListener('resize', () => {
		console.log(screenWidth, window.innerWidth)
		if (screenWidth !== window.innerWidth) {
			slides[activeSlide - 1].scrollIntoView({ inline: "center" })
			setParameters()
		}
	})
})