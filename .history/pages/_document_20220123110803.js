import Document, { Html, Head, Main, NextScript } from 'next/document'
import emotionCache from "../lib/emotion-cache";
import { ColorModeScript } from "@chakra-ui/react";
import createEmotionServer from "@emotion/server/create-instance";
import * as React from 'react'
const { extractCritical } = createEmotionServer(emotionCache);

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        const styles = extractCritical(initialProps.html);
        return {
            ...initialProps,
            styles: [
                initialProps.styles,
                <style 
                    id="holderStyle"
                    dangerouslySetInnerHTML={{
                        __html: `
      /* https://github.com/ant-design/ant-design/issues/16037#issuecomment-483140458 */
      /* Not only antd, but also any other style if you want to use ssr. */
      *, *::before, *::after {
        transition: none!important;
      }
                    key='emotion-css'
                    data-emotion-css={styles.ids.join(" ")}
                    dangerouslySetInnerHTML={{ __html: styles.css}}
                />
            ]


        }
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument