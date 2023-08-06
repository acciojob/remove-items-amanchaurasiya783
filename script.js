//your JS code here. If required.
let removeBtn = document.getElementById("removeBtn");
let select = document.getElementByid("colorSelect");
colorSelect.addEventListener('click', ()=>{
	colorSelect.remove(colorSelect.selectedIndex);
})