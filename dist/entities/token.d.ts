import { ChainId } from '../constants';
import { Currency } from './currency';
/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export declare class Token extends Currency {
    readonly chainId: ChainId;
    readonly address: string;
    constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string);
    /**
     * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
     * @param other other token to compare
     */
    equals(other: Token): boolean;
    /**
     * Returns true if the address of this token sorts before the address of the other token
     * @param other other token to compare
     * @throws if the tokens have the same address
     * @throws if the tokens are on different chains
     */
    sortsBefore(other: Token): boolean;
}
/**
 * Compares two currencies for equality
 */
export declare function currencyEquals(currencyA: Currency, currencyB: Currency): boolean;
export declare const WETH: {
    1: Token;
    3: Token;
    4: Token;
    5: Token;
    42: Token;
    250: Token;
    4002: Token;
    137: Token;
    80001: Token;
    100: Token;
    56: Token;
    97: Token;
    79377087078960: Token;
    1287: Token;
    43114: Token;
    43113: Token;
    128: Token;
    256: Token;
    1666600000: Token;
    1666700000: Token;
    917: Token;
};
export declare type ChainTokenMap = {
    readonly [chainId in ChainId]?: Token;
};
export declare const USDC: ChainTokenMap;
export declare const USDT: ChainTokenMap;
export declare const WBTC: ChainTokenMap;
export declare const DAI: ChainTokenMap;
export declare const BONE: ChainTokenMap;
export declare const SHIBA_INU: ChainTokenMap;
export declare const LEASH: ChainTokenMap;
export declare const UNISWAP_TOKEN: ChainTokenMap;
export declare const SUSHI_TOKEN: ChainTokenMap;
export declare const LINK_TOKEN: ChainTokenMap;
export declare const XFUND_TOKEN: ChainTokenMap;
export declare const SNX_TOKEN: ChainTokenMap;
export declare const GRT_TOKEN: ChainTokenMap;
export declare const MEME_TOKEN: ChainTokenMap;
export declare const ELON_TOKEN: ChainTokenMap;
export declare const DUCK_TOKEN: ChainTokenMap;
export declare const VXV_TOKEN: ChainTokenMap;
export declare const PERL_TOKEN: ChainTokenMap;
export declare const F9_TOKEN: ChainTokenMap;
export declare const ZIG_TOKEN: ChainTokenMap;
export declare const RYOSHIS_TOKEN: ChainTokenMap;
export declare const CIV_TOKEN: ChainTokenMap;
export declare const VEMP_TOKEN: ChainTokenMap;
export declare const UFO_TOKEN: ChainTokenMap;
