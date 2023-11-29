// Events


// Functions

// Swal.fire({
//     template: "#my-template"
//   });

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: true,
    allowOutsideClick: false
  });
  swalWithBootstrapButtons.fire({
    title: "Ya tenés el REPROCANN?",
    text: "Lo necesitás si querés comprar cannabis medicinal.",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Si, proceda!",
    cancelButtonText: "No, qué es eso!?",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
            title: "Ingresá tu código de vinculación de REPROCANN:",
            input: "textarea",
            inputLabel: "Ingresá tu código de vinculación.",
            inputPlaceholder: "Escribí tu código de vinculación acá...",
            showCancelButton: true
    });
    } else if (
      /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel 
    ) {
        swalWithBootstrapButtons.fire({
            title: "No te preocupes!",
            html: `Ingresá a
            <a href="https://reprocann.msal.gob.ar/auth">https://reprocann.msal.gob.ar/auth</a>, y obtenelo!
            `,
            icon: "info"
    });
    }
  });



// function openDialog() {
    // let customMsg = "Ya tenés el Reprocann?";
    // let number = 0;
    
    // if (confirm(customMsg, number)) {
    //     number = Number(prompt("Ingrese su número de autorización de 5 dígitos."));
    //     length = number.toFixed(0).length;
    //     budget(length);
    // } else {
    //     alert("Ingresá a https://reprocann.msal.gob.ar/auth y obtenelo!");
    // };
// };

// function budget(length) {
//     if (length<=5){
//         grams = Number(prompt("Cuantos gramos de medicina necesitas?"));
//     } else {
//         alert("Número incorrecto, vuelva a escribirlo.")
//     }
//     calculateBudget(grams);
// };

// function calculateBudget() {
//     if (grams<=10) {
//         multi = grams*3;
//         alert('El valor total de su pedido es de u$d '+multi+'.');
//     } else {
//         multi1 = grams*2;
//         alert('El valor total de su pedido es de u$d '+multi1+'.');
//     }
// };

//----------- 2da Entrega ----------

// alert('Ahora elegí la cepa prescripta por tu médico.');
// let helpPrompt = prompt('Ingrese cuál es su dolencia principal (Ansiedad, Estrés, Depresión, Dolor, Insomnio, Enfermedad de Crohn´s): ');


// Variables
const orderBtn = document.querySelector('#btnOrder');
const strainBtn = document.querySelector('#btnStrain');
const displayElement = document.querySelector('.display');
const productBtn = document.querySelector('#btnAdd');
const cartContainer = document.querySelector('#cart-list tbody');
const emptyCartBtn = document.querySelector('#empty-cart');
const cart = document.querySelector("#cart")
const disableStrainBtn = document.querySelector('.swal2-cancel btn btn-danger swal2-styled')
let cartArticles = [];

// Functions

function disableStrain(evt) {
    console.log(evt.target.classList.contains("swal2-cancel btn btn-danger swal2-styled"))
    evt.preventDefault();
    strainBtn.setAttribute("disable");
// if(evt.target.classList.contains("swal2-cancel btn btn-danger swal2-styled")) {};
}

function filterStrain() {
    const helpData = document.querySelector("#medical-condition-list");
    const selectedCondition = helpData.value.trim();
    if (selectedCondition !== "") {
            const filteredStrains = strains.filter(strain => strain.helps.includes(selectedCondition));
            return filteredStrains;
        } else {
            return[];
        }
}

function showStrains(filteredStrains){
    displayElement.innerHTML = '';

    for (let strain of filteredStrains) {
        let container = document.createElement('div')
        container.innerHTML=`<h3>Nombre: ${strain.name}</h3>
                        <img class="image" src="${strain.image}"/>
                        <p>Efectos: ${strain.feelings}</p>
                        <p>Ayuda con: ${strain.helps}</p>
                        <p>Efectos Adversos: ${strain.negatives}</p>
                        <p>THC: ${strain.thc}</p>
                        <p>CBD: ${strain.cbd}</p>
                        <p>Rating: ${strain.rating}</p>
                        <p class="price"><span>${strain.price}</span></p>
                        <p>Descripción: ${strain.description}</p>
                        <button id="btnAdd" data-id="${strain.id}" class="add-cart">Agregar al Carrito</button>
                        `
            displayElement.appendChild(container);
                    }
                };


function chooseStrainByMedicalCondition(evt) {
    evt.preventDefault();
    const result = filterStrain();
    if (result.length > 0) {
        showStrains(result);
    } else {
        displayElement.innerHTML = '';
        alert("No contamos una cepa para esa dolencia. Contactate con nosotros para que te asesoremos al: 11-5656-8080");
    };
}

function addProduct(evt) {
    evt.preventDefault();
if(evt.target.classList.contains("add-cart")) {
    const product = evt.target.parentElement;
    readProductData(product);
}

}

function readProductData(item) {
    const productInfo = {
        imagen: item.querySelector("img").src,
        titulo: item.querySelector("h3").textContent,
        precio: item.querySelector(".price span").textContent,
        id: item.querySelector("button").getAttribute("data-id"),
        cantidad: 1
    };

    if(cartArticles.some((prod)=> prod.id === productInfo.id)){
        const products = cartArticles.map((product) => {
            if (product.id === productInfo.id) {
                let cantidad = parseInt(product.cantidad);
                cantidad += 1;
                product.cantidad = cantidad;
                return product;
            } else {
                return product;
            }
        });
    cartArticles = products.slice();
} else {
    cartArticles.push(productInfo);
};

console.log(cartArticles);
renderCart();
}

function renderCart() {
    clearCart();
    cartArticles.forEach((product)=> {
        const row = document.createElement("tr");
    row.innerHTML = `
        <td><img src="${product.imagen}" width="90px"/></td>
        <td>${product.titulo}</td>
        <td>${product.precio}</td>
        <td>${product.cantidad}</td>
        <td>
            <button class="erase-product" data-id="${product.id}"></button>
        </td>
        `;
        cartContainer.appendChild(row);
    });
    
    storageSync();
};

function clearCart() {
    while(cartContainer.firstChild) {
        cartContainer.removeChild(cartContainer.firstChild);
    };
};

function emptyCart() {
    while(cartContainer.firstChild) {
        cartContainer.removeChild(cartContainer.firstChild);
    };
    cartArticles = [];
    storageSync();
};

function eliminateProduct(evt) {
    evt.preventDefault();
    if(evt.target.classList.contains("erase-product")) {
        const product = evt.target.parentElement.parentElement;
        const productId = product.querySelector("button").getAttribute("data-id");
        cartArticles = cartArticles.filter((product) => product.id !== productId);
        renderCart();
    }
};

function storageSync() {
    localStorage.setItem("cart", JSON.stringify(cartArticles));
};


// Events
window.addEventListener("DOMContentLoaded", ()=> {
    cartArticles = JSON.parse(localStorage.getItem("cart")) || [];
    renderCart();
});
strainBtn.addEventListener('click', chooseStrainByMedicalCondition);
displayElement.addEventListener('click', addProduct);
emptyCartBtn.addEventListener('click', emptyCart);
cart.addEventListener('click', eliminateProduct);
disableStrainBtn.addEventListener('click', disableStrain)
// Queria aprovechar la entrega para preguntar como hacer para agregar un eventListener a un elemento que pertenece a Sweet Alert 2, intente seleccionarlo con un queryselector para agregarle una funcion escuchandolo y no me lo lee a pesar de que uso su class especifica. Gracias!