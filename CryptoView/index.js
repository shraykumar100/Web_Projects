function convertToJson(response){
    return response.json();
}

function showData(data){
    console.log(data);
    const bitcoin_price = document.getElementById("bitcoin_price");
    bitcoin_price.innerText = data.bitcoin.inr;
    const ethereum_price = document.getElementById("ethereum_price");
    ethereum_price.innerText = data.ethereum.inr;
    const tether_price = document.getElementById("tether_price");
    tether_price.innerText = data.tether.inr;
    const binancecoin_price = document.getElementById("binancecoin_price");
    binancecoin_price.innerText = data.binancecoin.inr;
    const dogecoin_price = document.getElementById("dogecoin_price");
    dogecoin_price.innerText = data.dogecoin.inr;
    const helium_price = document.getElementById("helium_price");
    helium_price.innerText = data.helium.inr;
    const litecoin_price = document.getElementById("litecoin_price");
    litecoin_price.innerText = data.litecoin.inr;
    const polkadot_price = document.getElementById("polkadot_price");
    polkadot_price.innerText = data.polkadot.inr;
    const solana_price = document.getElementById("solana_price");
    solana_price.innerText = data.solana.inr;
    const stellar_price = document.getElementById("stellar_price");
    stellar_price.innerText = data.stellar.inr;
    const cardano_price = document.getElementById("cardano_price");
    cardano_price.innerText = data.cardano.inr;
    
}

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cpolkadot%2Cdogecoin%2Ctether%2Cbinancecoin%2Chelium%2Ccardano%2Csolana%2Clitecoin%2Cstellar&vs_currencies=inr").then(convertToJson).then(showData);