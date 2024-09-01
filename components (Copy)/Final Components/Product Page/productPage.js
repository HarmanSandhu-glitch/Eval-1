const relatedContainer = document.querySelector(".relatedProductsContainer");
const youMayAlsoLike = document.querySelector(".youMayAlsoLike");

for (let i = 0; i < 8; i++) {
  const div = document.createElement("div");
  div.classList.add("productCard");
  div.innerHTML = `<img
            src="https://cdn.shopify.com/s/files/1/0549/9555/0392/files/MTLK00080WHITE_1_360x.jpg?v=1715411825"
            alt=""
          />
          <div class="productCard-info">
            <h4>Heritage Threads</h4>
            <h2>Regular Fit solid kurta</h2>
            <h2>
              <span style="font-size: 1rem; margin-right: 8px">from</span>
              <span style="color: maroon;font-weight:600">$74.89</span>
            </h2>
            <button>Add To Cart</button>
          </div>`;
  relatedContainer.appendChild(div);
}

for (let i = 0; i < 8; i++) {
  const div = document.createElement("div");
  div.classList.add("productCard");
  div.innerHTML = `<img
            src="https://cdn.shopify.com/s/files/1/0549/9555/0392/files/MTLK00080WHITE_1_360x.jpg?v=1715411825"
            alt=""
          />
          <div class="productCard-info">
            <h4>Heritage Threads</h4>
            <h2>Regular Fit solid kurta</h2>
            <h2>
              <span style="font-size: 1rem; margin-right: 8px">from</span>
              <span style="color: maroon;font-weight:600">$74.89</span>
            </h2>
            <button>Add To Cart</button>
          </div>`;
  youMayAlsoLike.appendChild(div);
}
