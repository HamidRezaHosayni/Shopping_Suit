import type { AppProps } from 'next/app';
import "../public/style/input.css";
import Header_and_footer from './header_and_footer/index';
import Layout from '@/public/component/loading-page';
import Counter_Slice from '../public/redux/story';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Provider store={Counter_Slice}>
        <Layout>
          <Header_and_footer>
            <Component {...pageProps} />
          </Header_and_footer>
        </Layout>
      </Provider>

    </>
  );

}
