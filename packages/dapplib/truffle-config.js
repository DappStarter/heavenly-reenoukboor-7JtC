require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remind erosion grace inflict tail struggle'; 
let testAccounts = [
"0x2cea04bf9ef0c2caf452a1d39555b0835765de3d134bb4095f37191d00246d92",
"0xd6b67eb31dff4baa07d74cf318352fb87db016ecdc525e477d7e8848e44b8589",
"0x4097b94fc77c1f89e4db399ebbb2d0ddc7a8d289dc20789d40e29bf5ac6e16a9",
"0x546ea34376342d58afdc2e02993ff337bb506c0fa0611caa538abaafbd2b35ab",
"0x9b370fd0f100092380b752a5147cc541b935167388855e8fe7972d9ce6744df0",
"0x8218ee97f23e649eb4c2fb102e3ff66d203fa7c499c0d21c69a034f84c681fbf",
"0x762f91eeba1a12a4f9a6844b5e8dd29ce3d6a4bd406726376db4aedb83d58191",
"0x94b57896cb6f67fdd4ca96b74cda1e017183aff5407935df99d9fb13e4ff5a28",
"0xac7e1d1261c1b289b982b919a853d5cfae9cf8a3afb5870a1a62ed7aa850cb8d",
"0x9b1a252bb1f1af7063d591568df5b02778b1cbddbca602a5ea385f51643fdf3a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


