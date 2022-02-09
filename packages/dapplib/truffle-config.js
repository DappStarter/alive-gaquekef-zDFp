require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski stool radar shift protect hidden clinic metal genre'; 
let testAccounts = [
"0xdf066ab89321714417a154cd810025bb1f3d2607f255f41c7e3e9cc503a2769a",
"0x6be297fa89a1bd41cf2ee377aeb96c41a789e838342f6d1e2c41cf2d27188c53",
"0xfe1c9184bf44451c1bfed7116020c2278e8a443d05735c56ef3ecb553a2f3f94",
"0xc657fd0350fa2f5a80eb1c29c7fa2e0087cce4ee6880930ad46b8a15fbbcd1cf",
"0xaccb59b8c1a6eec5297b2ad7a085e68c1657f8df459230f51663ab8259399213",
"0x01f4a7b17dcff0fc5ec0e7b2e7b451ac246f66630356fd9a58ab48f0487fd3b1",
"0xc74c0c0a26f1ede195b383879074a126b0fc5b3ca4f07316e2febea12e9637fe",
"0x6adc8c85cc3b3e669a3252dfff6086de26ea5e25ef2c5b21d9208041a95de321",
"0xbabd2bb8b1b080fdfcd4254d8746a39ad3943e712a86d149ee0a8f56d71cf4d5",
"0xb3459af8afc862830d2713a14b3899a43e88775ef622e17b7e1555351116026d"
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


