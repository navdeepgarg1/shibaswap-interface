import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42,
    MATIC = 137,
    MATIC_TESTNET = 80001,
    FANTOM = 250,
    FANTOM_TESTNET = 4002,
    XDAI = 100,
    BSC = 56,
    BSC_TESTNET = 97,
    ARBITRUM = 79377087078960,
    MOONBASE = 1287,
    AVALANCHE = 43114,
    FUJI = 43113,
    HECO = 128,
    HECO_TESTNET = 256,
    HARMONY = 1666600000,
    HARMONY_TESTNET = 1666700000,
    PUPPYNET917 = 917,
    PUPPYNET = 719,
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const INIT_CODE_HASH: string;
export declare const SHIBA_CODE_HASH: string;
export declare const SUSHI_FACTORY_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const SHIBASWAP_FACTORY_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const SHIBASWAP_ROUTER_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const SHIBASWAP_BONE_TOKEN_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const SHIBASWAP_BURY_BONE_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const SHIBASWAP_BURY_LEASH_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const SHIBASWAP_BURY_SHIB_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const BONE_LOCKER_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const SHIBASWAP_TOPDOG_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const SHIBASWAP_UNI_FETCH_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const SHIBASWAP_SUSHI_FETCH_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const SHIBA_DASHBOARD_1_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const SHIBA_DASHBOARD_2_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const SHIBASWAP_SHIB_TOKEN_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const SHIBASWAP_LEASH_TOKEN_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const SHIBASWAP_TIMELOCK_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const SHIBA_BORING_HELPER_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
export declare const xSHIB_BONE_MERKLE_DISTRIBUTOR_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const xLEASH_BONE_MERKLE_DISTRIBUTOR_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const xSHIB_WETH_MERKLE_DISTRIBUTOR_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const WBTC_MERKLE_DISTRIBUTOR_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const USDT_MERKLE_DISTRIBUTOR_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const USDC_MERKLE_DISTRIBUTOR_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const DAI_MERKLE_DISTRIBUTOR_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const tBONE_BONE_MERKLE_DISTRIBUTOR_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const XFUND_MERKLE_DISTRIBUTOR_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const PERL_MERKLE_DISTRIBUTOR_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const F9_MERKLE_DISTRIBUTOR_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const RYOSHIS_MERKLE_DISTRIBUTOR_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const ZIG_MERKLE_DISTRIBUTOR_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const CIV_MERKLE_DISTRIBUTOR_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const BASIC_BONE_REWARDS_MERKLE_DISTRIBUTOR: {
    [chainId in ChainId]?: string;
};
export declare const VEMP_MERKLE_DISTRIBUTOR_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const UFO_MERKLE_DISTRIBUTOR_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const ARCHIEVE_MERKLE_DISTRIBUTOR_ADDRESS: {
    [chainId in ChainId]?: string;
};
