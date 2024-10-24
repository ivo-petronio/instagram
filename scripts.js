/*** JAVASCRIPT ***
******************/


/*****************
 Global Variables
*****************/

var orderItems = new Object();



/*****************
    Functions
*****************/


function selectFood(food) {
	justSelected(document.querySelector('.food .selected'));
	food.classList.add('selected');
	orderItems.food = {
				name: food.children[1].innerHTML,
				price: food.children[4].innerHTML
			  }
}

function selectDrink(drink) {
	justSelected(document.querySelector('.drink .selected'));
	drink.classList.add('selected');
	orderItems.drink = {
				name: drink.children[1].innerHTML,
				price: drink.children[4].innerHTML
			   }
}

function selectDessert(dessert) {
	justSelected(document.querySelector('.dessert .selected'));
	dessert.classList.add('selected');
	orderItems.dessert = {
				name: dessert.children[1].innerHTML,
				price: dessert.children[4].innerHTML
			     }
}




/**************************************************************
 This function tests if an option has not been selected before
**************************************************************/


function justSelected(selected) {
	if(selected && selected.className.indexOf('.selected')) {
		selected.classList.remove('selected');
	}
}



/******************************************************************
 This function verifies if all the options have just been selected
                and ability the order buttom
******************************************************************/

const timer = setInterval(() => {
	      if(Object.keys(orderItems).length === 3) {
		const button = document.querySelector('.orderBtn');
		button.children[0].innerHTML = "Fechar pedido";
		button.children[1].innerHTML = "";
		button.disabled = false;
		button.classList.add('complete');
		clearInterval(timer);
	      }
}, 20);






/******************************************************************
		THIS FUNCTION CONFIRMS THE ORDER
******************************************************************/

function checkout() {
	const confirm_screen = document.querySelector('.order-confirmation-screen');
	confirm_screen.style.display = "flex";
	
	let foodPrice = parseFloat(orderItems.food.price);
	let drinkPrice = parseFloat(orderItems.drink.price);
	let dessertPrice = parseFloat(orderItems.dessert.price);
	let total = (foodPrice + drinkPrice + dessertPrice);

	confirm_screen.children[0].children[1].innerHTML = `${orderItems.food.name}: R$${orderItems.food.price}`;
	confirm_screen.children[0].children[2].innerHTML = `${orderItems.drink.name}: R$${orderItems.drink.price}`;
	confirm_screen.children[0].children[3].innerHTML = `${orderItems.dessert.name}: R$${orderItems.dessert.price}`;
	confirm_screen.children[0].children[4].innerHTML = `total: R$${total.toFixed(2)}`;


	const sendOrderBtn = document.querySelector(".sendOrderBtn");

	sendOrderBtn.addEventListener("mouseover", () => {

		const message =

`Olá, gostaria de fazer o pedido:\n
- *Prato:* ${orderItems.food.name}\n
- *Bebida:* ${orderItems.drink.name}\n
- *Sobremesa:* ${orderItems.dessert.name}\n
*Total:* R$ ${total.toFixed(2)}`;

		const url = encodeURIComponent(message);

		alert(url);

		sendOrderBtn.setAttribute("href", `https://wa.me/5561981033400?text=${url}`);
	});
}





/*******************************************************************
  THIS FUNCTION CANCELS AND CLOSES THE ORDER CONFIRMATION SCREEN
*******************************************************************/

const cancelBtn = document.querySelector('.cancelOrderBtn');
cancelBtn.style.cursor = "pointer";

cancelBtn.addEventListener("mouseover", () => {
	cancelBtn.style.filter = "drop-shadow( 3px 3px 5px #000)";
})

cancelBtn.addEventListener("mouseout", () => {
	cancelBtn.style.filter = "none";
	cancelBtn.style.color = "#fff";
})



function cancelOrder(cancelBtn) {

	const confirm_screen = document.querySelector('.order-confirmation-screen');
	confirm_screen.style.display = "none";
}










/*******************************************************************
     THIS FUNCTION SENDS THE ORDER TO THE COMPANY'S WHATSAPP
*******************************************************************/


function approveOrder() {
	alert("Por gentileza, implemente o envio para o whatsapp da empresa");
}