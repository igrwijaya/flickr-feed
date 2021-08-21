import '../styles/app.scss'
import type { AppProps } from 'next/app'
import {useStore} from "../infrastructure/stores/store";
import React from 'react';
import {Provider} from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore()

  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}
export default MyApp
