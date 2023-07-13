





const wrapper = document.getElementById("wrapper");
const modal = document.getElementById("modal");
const korzinka = document.getElementById("korzinka");
const blur = document.getElementById("blur");
const korzinaWrapper = document.getElementById("korzina-wrapper");
const searchInput = document.getElementById("search-input");
const totalPriceEl = document.getElementById("total-price");





///////// Fetching DATA
const loaderWrapper = document.querySelector('.loader-wrapper')

const baseURL = "https://64af0de7c85640541d4e191b.mockapi.io/sneakers";

async function fetchingData() {
  try {
    const response = await fetch(`${baseURL}/all`);
    const result = await response.json();
    render(result)

  } catch (error) {
    console.log("Errors " + error.message);
  } finally {
    console.log("Success")
    loaderWrapper.style.display = "none";
  }
}

fetchingData()





let sneakersKorzinka = [];
let totalPrice = 0;

totalPriceEl.innerHTML = `${totalPrice} UZS`;

//////// Search products  //////////////////////////////////////

searchInput.addEventListener("keyup", (e) => {
  wrapper.innerHTML = `
  <div class="cardd hover:shadow-lg mx-auto mt-[30px] w-[210px] h-[260px] border-[#F3F3F3] border-[2px] rounded-[40px] overflow-hidden px-[30px]">
            <div class="img-div mb-[14px]">
              
            </div>

            <div class="flex flex-col gap-2 rounded-lg overflow-hidden">
              <h1 class="font-bold text-[13px] mb-[14px]"></h1>

              <div class="flex items-center justify-between">
                <div>
                  <p class="text-[#BDBDBD] text-[13px]"></p>
                  <p class="mt-[-5px] font-bold"></p>
                </div>

                <button id="btn" class=" border-[2px] px-[10px] py-[6px] rounded-lg flex items-center justify-center "></button>
              </div>
              <div flex items-center justify-between">
                <div>
                  <p class="text-[#BDBDBD] text-[13px]"></p>
                  <p class="mt-[-5px] font-bold"></p>
                </div>

                <button id="btn" class=" border-[2px] px-[10px] py-[6px] rounded-lg flex items-center justify-center "></button>
              </div>
            </div>
          </div><div class="cardd hover:shadow-lg mx-auto mt-[30px] w-[210px] h-[260px] border-[#F3F3F3] border-[2px] rounded-[40px] overflow-hidden px-[30px]">
            <div class="img-div mb-[14px]">
              
            </div>

            <div class="flex flex-col gap-2 rounded-lg overflow-hidden">
              <h1 class="font-bold text-[13px] mb-[14px]"></h1>

              <div class="flex items-center justify-between">
                <div>
                  <p class="text-[#BDBDBD] text-[13px]"></p>
                  <p class="mt-[-5px] font-bold"></p>
                </div>

                <button id="btn" class=" border-[2px] px-[10px] py-[6px] rounded-lg flex items-center justify-center "></button>
              </div>
              <div flex items-center justify-between">
                <div>
                  <p class="text-[#BDBDBD] text-[13px]"></p>
                  <p class="mt-[-5px] font-bold"></p>
                </div>

                <button id="btn" class=" border-[2px] px-[10px] py-[6px] rounded-lg flex items-center justify-center "></button>
              </div>
            </div>
          </div><div class="cardd hover:shadow-lg mx-auto mt-[30px] w-[210px] h-[260px] border-[#F3F3F3] border-[2px] rounded-[40px] overflow-hidden px-[30px]">
            <div class="img-div mb-[14px]">
              
            </div>

            <div class="flex flex-col gap-2 rounded-lg overflow-hidden">
              <h1 class="font-bold text-[13px] mb-[14px]"></h1>

              <div class="flex items-center justify-between">
                <div>
                  <p class="text-[#BDBDBD] text-[13px]"></p>
                  <p class="mt-[-5px] font-bold"></p>
                </div>

                <button id="btn" class=" border-[2px] px-[10px] py-[6px] rounded-lg flex items-center justify-center "></button>
              </div>
              <div flex items-center justify-between">
                <div>
                  <p class="text-[#BDBDBD] text-[13px]"></p>
                  <p class="mt-[-5px] font-bold"></p>
                </div>

                <button id="btn" class=" border-[2px] px-[10px] py-[6px] rounded-lg flex items-center justify-center "></button>
              </div>
            </div>
          </div><div class="cardd hover:shadow-lg mx-auto mt-[30px] w-[210px] h-[260px] border-[#F3F3F3] border-[2px] rounded-[40px] overflow-hidden px-[30px]">
            <div class="img-div mb-[14px]">
              
            </div>

            <div class="flex flex-col gap-2 rounded-lg overflow-hidden">
              <h1 class="font-bold text-[13px] mb-[14px]"></h1>

              <div class="flex items-center justify-between">
                <div>
                  <p class="text-[#BDBDBD] text-[13px]"></p>
                  <p class="mt-[-5px] font-bold"></p>
                </div>

                <button id="btn" class=" border-[2px] px-[10px] py-[6px] rounded-lg flex items-center justify-center "></button>
              </div>
              <div flex items-center justify-between">
                <div>
                  <p class="text-[#BDBDBD] text-[13px]"></p>
                  <p class="mt-[-5px] font-bold"></p>
                </div>

                <button id="btn" class=" border-[2px] px-[10px] py-[6px] rounded-lg flex items-center justify-center "></button>
              </div>
            </div>
          </div>`;
    setTimeout(() => {
      fetchingSearch(e.target.value);
    }, 1500)
    
  
});


///////////////// Fetching search /////////////////

async function fetchingSearch(text) {
  try {
    const response = await fetch(`${baseURL}/all`);
    const result = await response.json();
    let arr = result.filter((val) =>
      val.name.toLowerCase().includes(text.toLowerCase())
    );
    render(arr)

  } catch (error) {
    console.log("Errors " + error.message);
  } finally {
    console.log("Success")
  }
}



korzinka.addEventListener("click", () => {
  blur.classList.remove("hidden");
  modal.classList.remove("hidden");
  document.body.style.overflowY = "hidden";
  // renderToModal(sneakersKorzinka);
});

blur.addEventListener("click", () => {
  modal.classList.add("hidden");
  blur.classList.add("hidden");
  document.body.style.overflowY = "scroll";
});




////////////// Render DATA    //////////////////////////////////////////////

function render(data) {
  let result = "";
  data?.map((item) => {
    result += `
        <div class="card hover:shadow-lg mx-auto mt-[30px] w-[210px] h-[260px] border-[#F3F3F3] border-[2px] rounded-[40px] overflow-hidden px-[30px]">
            <div class="mb-[14px]">
              <img src="${item.image}" alt="${item.name}" />
            </div>

            <div>
              <h1 class="font-bold text-[13px] mb-[14px]">${item.name}</h1>

              <div class="flex items-center justify-between">
                <div>
                  <p class="text-[#BDBDBD] text-[13px]">Цена:</p>
                  <p class="mt-[-5px] font-bold">${item.price} UZS</p>
                </div>

                ${
                  item.isLiked === true
                    ? `<img data-id="${
                      item.id - 1
                      }" id="btn2" class="w-[40px]" src="./check.svg" alt="Check"/>`
                    : `<button data-id="${item.id}" id="btn" class="border-[#F3F3F3] border-[2px] px-[10px] py-[6px] rounded-lg flex items-center justify-center  active:border-slate-300">➕</button>`
                }
              </div>
            </div>
          </div>
    `;
  });

  wrapper.innerHTML = result;
}


/////////////////////////////////////////////////////////////////////////////////////

function renderToModal() {
  let res = "";
  sneakersKorzinka?.map((tapchka) => {
    res += `<div class="mb-[22px] border-[#F3F3F3] border-[2px] rounded-[20px] py-[10px] px-[20px]  overflow-hidden flex items-center justify-between gap-x-2">
      <div class="w-[100px] flex items-center justify-center overflow-hidden">
        <img src="${tapchka.image}" alt="${tapchka.name}" class="w-full h-full m-auto mt-[-10px]" />
      </div>
    
      <div>
        <h1 class="text-[15px] mb-[14px]">${tapchka.name}</h1>
        <p class="mt-[-9px] text-[14px] font-bold">${tapchka.price}</p>
      </div>
      <button data-id="${tapchka.id}" id="x-btn" class="border-[#F3F3F3] border-[2px] px-[10px] py-[6px] rounded-lg flex items-center justify-center  active:border-slate-300">❌</button>
    </div>`;
  });

  korzinaWrapper.innerHTML = res;
}

wrapper.addEventListener("click", (e) => {
  if (e.target.id.includes("btn")) {
    let id = +e.target.getAttribute("data-id");
    fetchingCard(id)
  }
});


async function fetchingCard(id) {
  try {
    const response = await fetch(`${baseURL}/all`);
    const result = await response.json();
    

    let cross = result.find((v) => v.id === id);

    cross.isLiked = true;

    if (cross.isLiked === true) {
      sneakersKorzinka.push(cross);
      totalPrice += +cross.price;

      totalPriceEl.innerHTML = `${totalPrice} UZS`;
      renderToModal();
      render(result);
    }

  } catch (error) {
    console.log("Errors " + error.message);
  } finally {
    console.log("Success")
 
  }
}



korzinaWrapper.addEventListener("click", (e) => {
  if (e.target.id.includes("x-btn")) {
    let id = +e.target.getAttribute("data-id");

    let cross = sneakers.find((v) => v.id === id);
    cross.isLiked = false;

    sneakersKorzinka = sneakersKorzinka.filter((v) => v.id !== id);
    renderToModal();
    render(sneakers);
    totalPrice -= +cross.price;

    totalPriceEl.innerHTML = `${totalPrice} UZS`;
    if (sneakersKorzinka.length < 1 || korzinaWrapper.textContent === "") {
      korzinaWrapper.innerHTML = `
  <div style="margin-top: 200px; display: flex; flex-direction: column; align-items:center">
  <img src="./assets/korzina-pustaya.png" alt="" />
  <br>
  <h1 class="text-2xl font-bold mb-[20px]">Корзина пустая</h1>
  <p class="mb-[40px]" style="text-align: center">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
  <button class="bg-green-200 py-[10px] px-[20px] rounded-lg" id="nazad">← Вернуться назад</button>
  </div>`;
    }
    const nazad = document.getElementById("nazad");
    nazad.addEventListener("click", () => {
      modal.classList.add("hidden");
      blur.classList.add("hidden");
      document.body.style.overflowY = "scroll";
    });
  }
});



if (sneakersKorzinka.length < 1 || korzinaWrapper.textContent === "") {
  korzinaWrapper.innerHTML = `
  <div style="margin-top: 200px; display: flex; flex-direction: column; align-items:center">
  <img src="./assets/korzina-pustaya.png" alt="" />
  <br>
  <h1 class="text-2xl font-bold mb-[20px]">Корзина пустая</h1>
  <p class="mb-[40px]" style="text-align: center">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
  <button class="bg-green-200 py-[10px] px-[20px] rounded-lg" id="nazad">← Вернуться назад</button>
  </div>`;
}
const nazad = document.getElementById("nazad");
nazad.addEventListener("click", () => {
  modal.classList.add("hidden");
  blur.classList.add("hidden");
  document.body.style.overflowY = "scroll";
});