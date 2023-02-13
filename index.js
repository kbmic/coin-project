const data = [
    {
      id: 1,
      name: "Bitcoin",
      img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 21628,
      marketcap : 417000000,
      cat: "Stablecoin",
    },
    {
      id: 2,
      name: "Tether",
      img: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
      price: 1,
      marketcap : 68000000,
      cat: "Stablecoin",
    },
    {
      id: 3,
      name: "USD Coin",
      img: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
      price: 0.99,
      marketcap : 41000000,
      cat: "Stablecoin",
    },
    {
      id: 4,
      name: "Digit Gold Token",
      img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2739.png",
      price: 46,
      marketcap : 2500000,
      cat: "Altcoin",
    },
    {
      id: 5,
      name: "Decentraland",
      img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1966.png",
      price: 0.6,
      marketcap : 1150000,
      cat: "NFT",
    },
    {
      id: 6,
      name: "Wax Coin",
      img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2300.png",
      price: 0.06,
      marketcap : 163956000,
      cat: "NFT",
    },
    {
        id: 7,
        name: "Stacks coin",
        img: "https://s2.coinmarketcap.com/static/img/coins/64x64/4847.png",
        price: 0.03,
        marketcap : 413000,
        cat: "Metaverse",
      },
      {
        id: 8,
        name: "Wax Coin",
        img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2300.png",
        price: 0.06,
        marketcap : 163956000,
        cat: "Metaverse",
      },
      {
        id: 9,
        name: "Biswap Coin",
        img: "https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png",
        price: 0.06,
        marketcap : 163956000,
        cat: "NFT",
      },
      {
        id: 10,
        name: "Polkadot Coin",
        img: "https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png",
        price: 6.00,
        marketcap : 70395600,
        cat: "Altcoin",
      },
  ];
  
  const productsContainer = document.querySelector(".products");
  const searchInput = document.querySelector(".search");
  const categoriesContainer = document.querySelector(".cats");
  const priceRange = document.querySelector(".priceRange");
  const priceValue = document.querySelector(".priceValue");
  const capValue = document.querySelector(".capValue");
  const capRange = document.querySelector(".capRange")

  const displayProducts = (filterProducts) => {
    productsContainer.innerHTML = filterProducts.map(
        (product) => 
        `
        <div class="product">
            <img src=${product.img} alt="">
            <span class="name">${product.name}</span>
            <span class="priceText">${product.price}</span>
            </img>
        </div>
        `
    )
  }
  displayProducts(data)

  searchInput.addEventListener("keyup",(e)=> {
    const value = e.target.value.toLowerCase()
    console.log(value)
    if(value) {
        displayProducts(data.filter(item => item.name.toLowerCase().indexOf(value) !== -1))
    }else{
        displayProducts(data)
    }

  })

  const setCategories = () => {
    const allCategories = data.map((item) => item.cat)
    console.log(allCategories)
    const categories = ["All",...allCategories.filter((item, i) => {
        return allCategories.indexOf(item) === i;
    }),
    ]
    console.log(categories)

    categoriesContainer.innerHTML = categories.map(cat =>
    `<span class="cats">${cat}</span>
    `).join("");

    categoriesContainer.addEventListener("click",(e) => {
        const selectedCat = e.target.textContent

    selectedCat === "All"
    ? displayProducts(data)
    : displayProducts(data.filter((item) => item.cat === selectedCat))
    })
    
  }

    const setPrices = () => {
        const priceList = data.map((item) => item.price)
        const minPrice = Math.min(...priceList)
        const maxPrice = Math.max(...priceList)
        console.log(priceList)
        console.log(minPrice)
        console.log(maxPrice)

        priceRange.min = minPrice
        priceRange.max = maxPrice
        priceRange.value = maxPrice
        priceValue.textContent = "$" + maxPrice

        priceRange.addEventListener("input",(e)=>{
            priceValue.textContent="$" + e.target.value
            displayProducts(data.filter((item) => item.price <=  e.target.value))
        })
    }

    // setCap
    const setCap = () => {
        const capList = data.map((item) => item.marketcap)
        const minValue = Math.min(...capList)
        const maxValue = Math.max(...capList)
        console.log(capList)
        console.log(minValue)
        console.log(maxValue)

        capRange.min = minValue
        capRange.max = maxValue
        capRange.value = maxValue
        capValue.textContent = "$" + maxValue

        capRange.addEventListener("input",(e)=>{
            capValue.textContent="$" + e.target.value
            displayProducts(data.filter((item) => item.marketcap <=  e.target.value))
        })
    }


  setCategories()
  setPrices()
  setCap()
