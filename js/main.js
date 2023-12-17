// Variables
const orderBtn = document.querySelector("#btnOrder");
const strainBtn = document.querySelector("#btnStrain");
const displayElement = document.querySelector(".display");
const productBtn = document.querySelector("#btnAdd");
const cartContainer = document.querySelector("#cart-list tbody");
const emptyCartBtn = document.querySelector("#empty-cart");
const cart = document.querySelector("#cart-container");
const productTotalQuantity = document.querySelector(
    ".cart-product_total-quantity"
);
let cartArticles = [];

// Modal
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
    },
    buttonsStyling: true,
    allowOutsideClick: false,
});
swalWithBootstrapButtons
    .fire({
        title: "Ya tenés el REPROCANN?",
        text: "Lo necesitás si querés comprar cannabis medicinal.",
        icon: "question",
        position: "center",
        showCancelButton: true,
        color: "#154644",
        background: "#F8F8F2",
        confirmButtonColor: "#154644",
        cancelButtonColor: "#4B4E54",
        confirmButtonAriaLabel: "",
        confirmButtonText: "Si, proceda!",
        cancelButtonText: "No",
        reverseButtons: true,
    })
    .then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                color: "#154644",
                background: "#F8F8F2",
                confirmButtonColor: "#154644",
                title: "Ingresá tu código de vinculación de REPROCANN:",
                input: "password",
                inputLabel: "Ingresá tu código de vinculación.",
                inputPlaceholder: "Escribí tu código de vinculación acá...",
                showCancelButton: false,
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.getHtmlContainer(
                document
                    .getElementById("btnStrain")
                    .setAttribute("disabled", true)
            );
            swalWithBootstrapButtons.getHtmlContainer(
                document
                    .getElementById("medical-condition-list")
                    .setAttribute("placeholder", "deshabilitado")
            );
            swalWithBootstrapButtons.fire({
                color: "#154644",
                background: "#F8F8F2",
                confirmButtonColor: "#154644",
                title: "No te preocupes!",
                html: `Ingresá a
            <a href="https://reprocann.msal.gob.ar/auth">https://reprocann.msal.gob.ar/auth</a>, y obtenelo!
            `,
                icon: "info",
            });
        }
    });

// Toasts

function eliminated() {
    const eliminationToast = Swal.mixin({
        toast: true,
        position: "top-end",
        color: "hsl(359, 54%, 51%, 80%)",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });
    eliminationToast.fire({
        icon: "warning",
        title: "Producto eliminado del carrito.",
    });
}

function notFound() {
    const notFoundToast = Swal.mixin({
        toast: true,
        position: "bottom-start",
        color: "#154644",
        background:"#F8F8F2",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });
    notFoundToast.fire({
        icon: "warning",
        title: "No contamos una cepa para esa dolencia. Contactate con nosotros para que te asesoremos al: 11-5656-8080",
    });
}

function addedToCart() {
    const addedToCartToast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });
    addedToCartToast.fire({
        icon: "success",
        title: "Producto agregado al carrito!",
    });
}

// Fetch from strainDB

const strainDBArray = [];

async function fetchData() {
    try {
        const response = await fetch("data/strainDB.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        for (object of data) {
            strainDBArray.push(object);
        }
    } catch (err) {
        console.log(err);
    }
}

fetchData();

// Functions

// Selección de Strain
function filterStrain() {
    const helpData = document.querySelector("#medical-condition-list");
    const selectedCondition = helpData.value.trim();
    const filteredStrains =
        selectedCondition !== ""
            ? strainDBArray.filter((strain) =>
                strain.helps.includes(selectedCondition)
            )
            : [];
    return filteredStrains;
}

function showStrains(filteredStrains) {
    displayElement.innerHTML = "";

    for (let strain of filteredStrains) {
        let container = document.createElement("div");
        container.setAttribute("class","card");
        container.innerHTML = `<h3 class="name">Nombre: ${strain.name}</h3>
                        <img class="image" src="${strain.imgThumb}"/>
                        <p>Efectos: ${strain.feelings}</p>
                        <p>Ayuda con: ${strain.helps}</p>
                        <p class="negatives">Efectos Adversos: ${strain.negatives}</p>
                        <p>THC: ${strain.thc}</p>
                        <p>CBD: ${strain.cbd}</p>
                        <p>CBG: ${strain.cbg}</p>
                        <p>Rating: ${strain.rating}</p>
                        <p class="ammount"><span>Cantidad: 1gr</span></p>
                        <p>Tipo: ${strain.strainType}</p>
                        <button id="btnAdd" data-id="${strain.id}" class="add-cart">Agregar al Carrito</button>
                        `;
        displayElement.appendChild(container);
    }
}

function chooseStrainByMedicalCondition(evt) {
    evt.preventDefault(evt);
    const result = filterStrain();
    if (result.length > 0) {
        showStrains(result);
    } else {
        displayElement.innerHTML = "";
        notFound();
    }
}

// Cart
function addProduct(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains("add-cart")) {
        const product = evt.target.parentElement;
        readProductData(product);
        addedToCart();
    }
}

function readProductData(item) {
    const productInfo = {
        imagen: item.querySelector("img").src,
        titulo: item.querySelector("h3").textContent,
        precio: item.querySelector(".ammount span").textContent,
        id: item.querySelector("button").getAttribute("data-id"),
        cantidad: 1,
    };

    if (cartArticles.some((prod) => prod.id === productInfo.id)) {
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
    renderCart();
};

function renderCart() {
    clearCart();
    cartArticles.forEach((product) => {
        const row = document.createElement("tr");
        row.setAttribute("class", "cart-product_container");
        row.innerHTML = `
        <td>
            <div class="cart-image">
                <img src="${product.imagen}" width="90px"/>
            </div>
        </td>
        <td>${product.titulo}</td>
        <td class="cart-btn_minus-cell">
            <button class="cart-btn_minus">-</button>
        </td>
        <td class="cart-product_quantity">${product.cantidad}gr</td>
        <td class="cart-btn_plus-cell">
            <button class="cart-btn_plus">+</button>
        </td>
        <td>
            <button class="erase-product" data-id="${product.id}">x</button>
        </td>
        `;
        cartContainer.appendChild(row);
    });
    calculateProductTotalWeight();
    storageSync();
};

function clearCart() {
    while (cartContainer.firstChild) {
        cartContainer.removeChild(cartContainer.firstChild);
    };
};

function emptyCart() {
    while (cartContainer.firstChild) {
        cartContainer.removeChild(cartContainer.firstChild);
    };
    cartArticles = [];
    updateTotalQuantity();
    storageSync();
};

function eliminateProduct(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains("erase-product")) {
        const product = evt.target.parentElement;
        const productId = product
            .querySelector("button")
            .getAttribute("data-id");
        cartArticles = cartArticles.filter(
            (product) => product.id !== productId
        );
        eliminated();
        renderCart();
    }
}

const calculateProductTotalWeight = () => {
    const cartProducts = document.querySelectorAll(".cart-product_container");
    let totalQuantity = 0;
    cartProducts.forEach((prod) => {
        const productQuantity = prod.querySelector(
            ".cart-product_quantity"
        ).innerText;
        const quantityNumber = Number(productQuantity.replace("gr", ""));
        totalQuantity += quantityNumber;
    });
    productTotalQuantity.innerText = `${totalQuantity}gr`;
};

function storageSync() {
    localStorage.setItem("cart", JSON.stringify(cartArticles));
}

const updateTotalQuantity = () => {
    calculateProductTotalWeight();
};

// Cart display

const cartButton = document.querySelector(".cart-button-image");
const cartContent = document.querySelector(".cart-container__content");
const cartCloseButton = document.querySelector(".cart-container__close")

const closeCartModal = () => {
    setTimeout(() => {
        cartContent.classList.add("cart-container--transform-out");
    }, 200);
    setTimeout(() => {
        cartContent.classList.toggle("cart-container__content--visible");
        cartContent.classList.remove("cart-container--transform-out");
        cartContent.classList.remove("cart-container--transform-in");
    }, 300);
};

document.addEventListener("click", e => {
    if (e.target === cartButton) {
        cartContent.classList.toggle("cart-container__content--visible");
        cartContent.classList.toggle("cart-container--transform-in");

    } else if (e.target === cartCloseButton) {
        console.log(cartCloseButton)
        closeCartModal();
    };
});



// Events
window.addEventListener("DOMContentLoaded", () => {
    cartArticles = JSON.parse(localStorage.getItem("cart")) || [];
    renderCart();
});

strainBtn.addEventListener("click", chooseStrainByMedicalCondition);
displayElement.addEventListener("click", addProduct);
emptyCartBtn.addEventListener("click", emptyCart);
cart.addEventListener("click", eliminateProduct);

document.addEventListener("click", (evt) => {
    const plusCell = evt.target.closest(".cart-btn_plus-cell");
    if (plusCell) {
        let input = plusCell.previousElementSibling;
        let inputValue = Number(input.innerText.replace("gr", "").trim());
        let newInputValue = inputValue + 1;
        input.innerText = `${newInputValue}gr`;
        updateTotalQuantity();
    }
});

document.addEventListener("click", (evt) => {
    const minusCell = evt.target.closest(".cart-btn_minus-cell");
    if (minusCell) {
        let input = minusCell.nextElementSibling;
        let inputValue = Number(input.innerText.replace("gr", "").trim());
        if (inputValue > 1) {
            let newInputValue = inputValue - 1;
            input.innerText = `${newInputValue}gr`;
            updateTotalQuantity();
        } else {
            const product = minusCell.parentElement;
            const productId = product
                .querySelector(".erase-product")
                .getAttribute("data-id");
            cartArticles = cartArticles.filter(
                (product) => product.id !== productId
            );
            evt.target.closest(".cart-product_container").remove();
            updateTotalQuantity();
            eliminated();
        }
    }
});
