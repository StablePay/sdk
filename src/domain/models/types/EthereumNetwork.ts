import { ApplicationError, ErrorType } from "@core";

const NETWORKS = new Map<string, EthereumNetwork>();

export class EthereumNetwork {
    private constructor(public name: string, public url: string = `https://${name}.etherscan.io`) {}

    public static Mainnet = new EthereumNetwork('homestead', 'https://etherscan.io');
    public static Ropsten = new EthereumNetwork('ropsten');
    public static Morden = new EthereumNetwork('morden');
    public static Rinkeby = new EthereumNetwork('rinkeby');
    public static Kovan = new EthereumNetwork('kovan');
    public static Local = new EthereumNetwork('local', 'http://localhost:8545');
    public static All = Array.of(...NETWORKS.values());

    toHashUrl(txHash: string): string {
        return `${this.url}/tx/${txHash}`;
    }

    toAddressUrl(address: string): string {
        return `${this.url}/address/${address}`;
    }

    toTokenUrl(tokenAddress: string): string {
        return `${this.url}/token/${tokenAddress}`;
    }

    toEnsUrl(ens: string): string {
        return `${this.url}/enslookup?q=${ens}`;
    }

    toString(): string {
        return this.name;
    }

    isNetwork(name: string): boolean {
        return this.name.toLowerCase() === name.toLowerCase();
    }

    static of(networkName:string): EthereumNetwork {
        if(!NETWORKS.has(networkName.toLowerCase())) {
            throw new ApplicationError(ErrorType.Validation, `Network is invalid ${networkName}`);
        }
        return NETWORKS.get(networkName.toLowerCase()) as EthereumNetwork;
    }
}

NETWORKS.set('homestead', EthereumNetwork.Mainnet);
NETWORKS.set('morden', EthereumNetwork.Morden);
NETWORKS.set('rinkeby', EthereumNetwork.Rinkeby);