const image_1 = document.querySelector(".image_1")
const image_2 = document.querySelector(".image_2")
const image_3 = document.querySelector(".image_3")
const image = document.querySelector(".image")


image_1.addEventListener("mouseenter", () => {
    image.src = "/imgs/shop img7.webp"
});

image_1.addEventListener("mouseleave", () => {
    image.src = "/imgs/shop img7.webp"
});


image_2.addEventListener("mouseenter", () => {
    image.src = "/product_imgs/product15 img1.png"
});

image_2.addEventListener("mouseleave", () => {
    image.src = "/product_imgs/product15 img1.png"
});



image_3.addEventListener("mouseenter", () => {
    image.src = "/product_imgs/product15 img2.png"
});

image_3.addEventListener("mouseleave", () => {
    image.src = "/product_imgs/product15 img2.png"
});


const minus = document.querySelector(".minus")
const count = document.querySelector(".count");
const plus = document.querySelector(".plus");

let counter = 1;

plus.addEventListener("click", () => {
    counter++;
    if (counter > 10) {
        alert("Mahsulotni kamaytiring")
    } else {
        count.textContent = counter;
    }
});



minus.addEventListener("click", () => {
    counter--;
    if (counter < 0) {
        minus.style.color = "red"
    } else {
        count.textContent = counter;
        minus.style.color = "#B88E2F"
    }
});


