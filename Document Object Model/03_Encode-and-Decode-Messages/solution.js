function solve() {
	let buttons = document.getElementsByTagName('button');
	let textAreas = document.getElementsByTagName('textarea');

	buttons[0].addEventListener('click', encode);
	buttons[1].addEventListener('click', decode);

	function encode() {
		let text = textAreas[0].value;
		let encodeText = text.split('').map(x => x.charCodeAt(0) + 1);
		let decodeText = encodeText.map(x => String.fromCharCode(x));
		textAreas[0].value = '';
		textAreas[1].value = decodeText.join('');
	}

	function decode() {
	
		let text = textAreas[1].value;
		let encodeText = text.split('').map(x => x.charCodeAt(0) - 1);
		let decodeText = encodeText.map(x => String.fromCharCode(x));
		textAreas[0].value = '';
		textAreas[1].value = decodeText.join('');
	}
}