import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <iframe
    src="https://ipfs-2.thirdwebcdn.com/ipfs/QmSmkcH3AzLPTcub173t7bCtTzQV3dRb4gwG3uU84J6YJq?contract=0x74203bF00a3cECc4B1f2E6e8dd9743A90693D0d3&chain=%7B%22name%22%3A%22Goerli%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fgoerli.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Goerli+Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22gor%22%2C%22chainId%22%3A5%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22goerli%22%7D&primaryColor=purple"
    width="600px"
    height="600px"
    // style="max-width:100%;"
    // frameborder="0"
    ></iframe>
  );
};

export default Home;
