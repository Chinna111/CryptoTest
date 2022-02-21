import React from 'react';
import './marketdata.scss'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CryptoTracker from "../CryptoTracker";
import "../../styles/styles.css";

const MarketData = () => {

    console.log('markete data function calledd------')

    const queryClient = new QueryClient();


    return (
        <QueryClientProvider client={queryClient}>
            <CryptoTracker cryptoName="bitcoin" />
            <ReactQueryDevtools />
            <a
                className="api-link"
                href="https://www.coingecko.com/en/api"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by CoinGecko API
            </a>
        </QueryClientProvider>
    );
}

export default MarketData;
