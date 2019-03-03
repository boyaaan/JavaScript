function solve() {
	let createTitle = document.getElementById('createTitle');
	let createContent = document.getElementById('createContent');

	let createTitleValue = createTitle.value;
	let createContentValue = createContent.value;
	
	if (createTitleValue && createContentValue) {
		let createTitleElement = document.createElement('h3');
		createTitleElement.textContent = createTitleValue;
		let createContentElement = document.createElement('p');
		createContentElement.textContent = createContentValue;

		let articleElement = document.createElement('article')
        articleElement.appendChild(createTitleElement);
		articleElement.appendChild(createContentElement);
		
		let artilesElements = document.getElementById('articles');
		artilesElements.appendChild(articleElement);

		createTitle.value = '';
		createContent.value = '';
	}
}