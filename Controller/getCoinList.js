let bitcoin, ethereum, tether, solana, dogecoin, bnb;

// BITCOIN ELEMENTS
const bitcoinElTitle = document.querySelector(".bitcoin-title");
const bitcoinPriceEl = document.querySelector(".bitcoin-price");
const bitcoinCapEl = document.querySelector(".bitcoin-market-cap");
const bitcoinSupplyEl = document.querySelector(".bitcoin-max-supply");

// ETHEREUM ELEMENTS
const ethereumElTitle = document.querySelector(".ethereum-title");
const ethereumPriceEl = document.querySelector(".ethereum-price");
const ethereumCapEl = document.querySelector(".ethereum-market-cap");
const ethereumSupplyEl = document.querySelector(".ethereum-max-supply");

// SOLANA ELEMENTS
const solanaElTitle = document.querySelector(".solana-title");
const solanaPriceEl = document.querySelector(".solana-price");
const solanaCapEl = document.querySelector(".solana-market-cap");
const solanaSupplyEl = document.querySelector(".solana-max-supply");

// TETHER ELEMENTS
const tetherElTitle = document.querySelector(".tether-title");
const tetherPriceEl = document.querySelector(".tether-price");
const tetherCapEl = document.querySelector(".tether-market-cap");
const tetherSupplyEl = document.querySelector(".tether-max-supply");

// DOGECOIN ELEMENTS
const dogecoinElTitle = document.querySelector(".dogecoin-title");
const dogecoinPriceEl = document.querySelector(".dogecoin-price");
const dogecoinCapEl = document.querySelector(".dogecoin-market-cap");
const dogecoinSupplyEl = document.querySelector(".dogecoin-max-supply");

export default async function fetchCoinList() {
  try {
    const allCoinsListResponse = await fetch(
      "https://api.coingecko.com/api/v3/coins/list"
    );
    if (!allCoinsListResponse.ok)
      throw new Error(`HTTP Error: ${allCoinsListResponse.status}`);
    const allCoinsList = await allCoinsListResponse.json();

    for (let i = 0; i < allCoinsList.length; i++) {
      const name = allCoinsList[i].name.toLowerCase();
      if (name === "bitcoin")
        bitcoin = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
      if (name === "ethereum")
        ethereum = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
      if (name === "tether")
        tether = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
      if (name === "solana")
        solana = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
      if (name === "dogecoin")
        dogecoin = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
    }

    // Fetch all data
    const bitcoinResponse = await fetch(
      `https://api.coinpaprika.com/v1/tickers/${bitcoin}`
    );
    if (!bitcoinResponse.ok)
      throw new Error(`Bitcoin fetch failed: ${bitcoinResponse.status}`);
    const bitcoinInfo = await bitcoinResponse.json();

    const ethereumResponse = await fetch(
      `https://api.coinpaprika.com/v1/tickers/${ethereum}`
    );
    if (!ethereumResponse.ok)
      throw new Error(`Ethereum fetch failed: ${ethereumResponse.status}`);
    const ethereumInfo = await ethereumResponse.json();

    const solanaResponse = await fetch(
      `https://api.coinpaprika.com/v1/tickers/${solana}`
    );
    if (!solanaResponse.ok)
      throw new Error(`Solana fetch failed: ${solanaResponse.status}`);
    const solanaInfo = await solanaResponse.json();

    const tetherResponse = await fetch(
      `https://api.coinpaprika.com/v1/tickers/${tether}`
    );
    if (!tetherResponse.ok)
      throw new Error(`Tether fetch failed: ${tetherResponse.status}`);
    const tetherInfo = await tetherResponse.json();

    const dogecoinResponse = await fetch(
      `https://api.coinpaprika.com/v1/tickers/${dogecoin}`
    );
    if (!dogecoinResponse.ok)
      throw new Error(`Dogecoin fetch failed: ${dogecoinResponse.status}`);
    const dogecoinInfo = await dogecoinResponse.json();

    // Sequential updates with setTimeout
    const updateCoin = (
      delay,
      coinData,
      titleEl,
      priceEl,
      capEl,
      supplyEl,
      coinId
    ) => {
      setTimeout(() => {
        if (titleEl) titleEl.textContent = coinId.toUpperCase();
        if (priceEl)
          priceEl.textContent = `Price: ${coinData.quotes.USD.price.toLocaleString(
            "en-US",
            { style: "currency", currency: "USD" }
          )}`;
        if (capEl)
          capEl.textContent = `Market cap: ${coinData.quotes.USD.market_cap.toLocaleString(
            "en-US",
            {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }
          )}`;
        if (supplyEl)
          supplyEl.textContent = `Max supply: ${
            coinData.max_supply
              ? coinData.max_supply.toLocaleString("en-US")
              : "N/A"
          }`;
      }, delay);
    };

    updateCoin(
      0,
      bitcoinInfo,
      bitcoinElTitle,
      bitcoinPriceEl,
      bitcoinCapEl,
      bitcoinSupplyEl,
      bitcoin
    );
    updateCoin(
      5000,
      ethereumInfo,
      ethereumElTitle,
      ethereumPriceEl,
      ethereumCapEl,
      ethereumSupplyEl,
      ethereum
    );
    updateCoin(
      10000,
      solanaInfo,
      solanaElTitle,
      solanaPriceEl,
      solanaCapEl,
      solanaSupplyEl,
      solana
    );
    updateCoin(
      15000,
      tetherInfo,
      tetherElTitle,
      tetherPriceEl,
      tetherCapEl,
      tetherSupplyEl,
      tether
    );
    updateCoin(
      20000,
      dogecoinInfo,
      dogecoinElTitle,
      dogecoinPriceEl,
      dogecoinCapEl,
      dogecoinSupplyEl,
      dogecoin
    );
  } catch (error) {
    console.error("Error:", error.message);
  }
}
// let bitcoin, ethereum, tether, bnb, solana, dogecoin;

// // BITCOIN ELEMENTS
// const bitcoinElTitle = document.querySelector(".bitcoin-title");
// const bitcoinPriceEl = document.querySelector(".bitcoin-price");
// const bitcoinCapEl = document.querySelector(".bitcoin-market-cap");
// const bitcoinSupplyEl = document.querySelector(".bitcoin-max-supply");

// // ETHEREUM ELEMENTS
// const ethereumElTitle = document.querySelector(".ethereum-title");
// const ethereumPriceEl = document.querySelector(".ethereum-price");
// const ethereumCapEl = document.querySelector(".ethereum-market-cap");
// const ethereumSupplyEl = document.querySelector(".ethereum-max-supply");

// // DODGECOIN ELEMENTS
// const solanaElTitle = document.querySelector(".solana-title");
// const solanaPriceEl = document.querySelector(".solana-price");
// const solanaCapEl = document.querySelector(".solana-market-cap");
// const solanaSupplyEl = document.querySelector(".solana-max-supply");

// // TETHER ELEMENTS
// const tetherElTitle = document.querySelector(".tether-title");
// const tetherPriceEl = document.querySelector(".tether-price");
// const tetherCapEl = document.querySelector(".tether-market-cap");
// const tetherSupplyEl = document.querySelector(".tether-max-supply");

// export default async function fetchCoinList() {
//   try {
//     const allCoinsListResponse = await fetch(
//       "https://api.coingecko.com/api/v3/coins/list"
//     );
//     if (!allCoinsListResponse.ok) {
//       throw new Error("Error:", allCoinsListResponse.status);
//     }
//     const allCoinsList = await allCoinsListResponse.json();
//     for (let i = 0; i < allCoinsList.length; i++) {
//       // get input string for bitcoin
//       if (allCoinsList[i].name.toLowerCase() === "bitcoin") {
//         bitcoin = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
//         console.log(bitcoin);
//       }
//       // get input string for ethereum
//       if (allCoinsList[i].name.toLowerCase() === "ethereum") {
//         ethereum = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
//       }
//       // get input string for Tether
//       if (allCoinsList[i].name.toLowerCase() === "tether") {
//         tether = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
//       }

//       // get input string for BNB
//       if (allCoinsList[i].name.toLowerCase() === "bnb") {
//         bnb = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
//       }

//       // get input string for Solana
//       if (allCoinsList[i].name.toLowerCase() === "solana") {
//         solana = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
//         console.log(solana);
//       }

//       // get input string for Dogdecoin
//       if (allCoinsList[i].name.toLowerCase() === "dogecoin") {
//         dogecoin = `${allCoinsList[i].symbol}-${allCoinsList[i].id}`;
//         console.log(dogecoin);
//       }
//     }

//     async function getCoinInfo() {
//       // bitcoin
//       try {
//         // SOALANA RENDER AND MOVING
//         const solanainInfoPromise = (
//           await fetch(`https://api.coinpaprika.com/v1/tickers/${solana}`)
//         )
//           .json((res) => res)
//           .then((data) => data)
//           .catch((err) => {
//             throw new Error("ERROR:", err.status);
//           });

//         const solanaCoinInfo = await solanainInfoPromise;
//         // SOALANA TITLE
//         solanaElTitle.textContent = solana.toUpperCase();
//         // SOALANA PRICE
//         solanaPriceEl.textContent = `Price: ${solanaCoinInfo.quotes.USD.price.toLocaleString(
//           "en-US",
//           { style: "currency", currency: "USD" }
//         )}`;
//         console.log(
//           `Market cap: ${solanaCoinInfo.quotes.USD.market_cap.toLocaleString(
//             "en-US",
//             {
//               style: "currency",
//               currency: "USD",
//               minimumFractionDigits: 0,
//               maximumFractionDigits: 0,
//             }
//           )}`
//         );
//         // SOALANA CAP
//         solanaCapEl.textContent = `Market cap: ${solanaCoinInfo.quotes.USD.market_cap.toLocaleString(
//           "en-US",
//           {
//             style: "currency",
//             currency: "USD",
//             minimumFractionDigits: 0,
//             maximumFractionDigits: 0,
//           }
//         )}`;
//         // SOALANA SUPPLY
//         solanaSupplyEl.textContent = `Max supply: ${solanaCoinInfo.max_supply.toLocaleString(
//           "en-US"
//         )}`;
//         // TETHER RENDER AND MOVING
//         const tetherInfoPromise = (
//           await fetch(`https://api.coinpaprika.com/v1/tickers/${tether}`)
//         )
//           .json((res) => res)
//           .then((data) => data)
//           .catch((err) => {
//             throw new Error("ERROR:", err.status);
//           });

//         const tetherInfo = await tetherInfoPromise;
//         // TETHER TITLE
//         tetherElTitle.textContent = tether.toUpperCase();
//         // TETHER PRICE
//         tetherPriceEl.textContent = `Price: ${tetherInfo.quotes.USD.price.toLocaleString(
//           "en-US",
//           { style: "currency", currency: "USD" }
//         )}`;
//         console.log(
//           `Market cap: ${tetherInfo.quotes.USD.market_cap.toLocaleString(
//             "en-US",
//             {
//               style: "currency",
//               currency: "USD",
//               minimumFractionDigits: 0,
//               maximumFractionDigits: 0,
//             }
//           )}`
//         );
//         // TETHER CAP
//         tetherCapEl.textContent = `Market cap: ${tetherInfo.quotes.USD.market_cap.toLocaleString(
//           "en-US",
//           {
//             style: "currency",
//             currency: "USD",
//             minimumFractionDigits: 0,
//             maximumFractionDigits: 0,
//           }
//         )}`;
//         // ETHEREUM SUPPLY
//         tetherSupplyEl.textContent = `Max supply: ${tetherInfo.max_supply.toLocaleString(
//           "en-US"
//         )}`;

//         // BITCOIN RENDER AND MOVING
//         const bitcoinInfoPromise = (
//           await fetch(`https://api.coinpaprika.com/v1/tickers/${bitcoin}`)
//         )
//           .json((res) => res)
//           .then((data) => data)
//           .catch((err) => {
//             throw new Error("ERROR:", err.status);
//           });
//         const bitcoinInfo = await bitcoinInfoPromise;
//         // BITCOIN TITLE
//         bitcoinElTitle.textContent = bitcoin.toUpperCase();
//         // BITCOIN PRICE
//         bitcoinPriceEl.textContent = `Price: ${bitcoinInfo.quotes.USD.price.toLocaleString(
//           "en-US",
//           { style: "currency", currency: "USD" }
//         )}`;
//         // BITCOIN CAP
//         bitcoinCapEl.textContent = `Market cap: ${bitcoinInfo.quotes.USD.market_cap.toLocaleString(
//           "en-US",
//           {
//             style: "currency",
//             currency: "USD",
//             minimumFractionDigits: 0,
//             maximumFractionDigits: 0,
//           }
//         )}`;
//         // BITCOIN SUPPLY
//         bitcoinSupplyEl.textContent = `Max supply: ${bitcoinInfo.max_supply.toLocaleString(
//           "en-US"
//         )}`;

//         // ETHEREUM RENDER AND MOVING
//         const ethereumInfoPromise = (
//           await fetch(`https://api.coinpaprika.com/v1/tickers/${ethereum}`)
//         )
//           .json((res) => res)
//           .then((data) => data)
//           .catch((err) => {
//             throw new Error("ERROR:", err.status);
//           });

//         const ethereumInfo = await ethereumInfoPromise;
//         // ETHEREUM TITLE
//         ethereumElTitle.textContent = ethereum.toUpperCase();
//         // ETHEREUM PRICE
//         ethereumPriceEl.textContent = `Price: ${ethereumInfo.quotes.USD.price.toLocaleString(
//           "en-US",
//           { style: "currency", currency: "USD" }
//         )}`;
//         // ETHEREUM CAP
//         ethereumCapEl.textContent = `Market cap: ${ethereumInfo.quotes.USD.market_cap.toLocaleString(
//           "en-US",
//           {
//             style: "currency",
//             currency: "USD",
//             minimumFractionDigits: 0,
//             maximumFractionDigits: 0,
//           }
//         )}`;
//         // ETHEREUM SUPPLY
//         ethereumSupplyEl.textContent = `Max supply: ${ethereumInfo.max_supply.toLocaleString(
//           "en-US"
//         )}`;
//       } catch (error) {
//         console.log("ERROR:", error.status);
//       }
//     }
//     getCoinInfo();
//   } catch (error) {
//     console.log("ERROR:");
//   }
// }

// // let bitcoin, ethereum, tether, bnb, solana, dogdecoin;
