const searchBar = document.querySelector('#myInput');
const form = document.querySelector('#searchForm')
const submitBtn = document.querySelector('button[type="submit"]');
const list = document.querySelector('div.ingredients ul');
let ingredients = [];
// functions

function addToArray(e){
	if(e.code === 'Enter'){
		e.preventDefault();
		if (e.target.value != ''){ 
			ingredients.push(e.target.value);
			list.insertAdjacentHTML('beforeend', `
			<li>${ingredients[ingredients.length-1]}</li>
			`)
		}
		

		searchBar.value = "";
	}

}

function submit(e) {
	searchBar.value = ingredients.toString().replace(/[,]/g,'+');
	console.log(e)
}




// Event Listeners

searchBar.addEventListener('keypress', addToArray );
form.addEventListener('submit', submit)

