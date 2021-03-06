import Document, { Html, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Header from "components/Header/Header";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            <Html lang="en">
              <Header />
              {initialProps.styles}
              {sheet.getStyleElement()}
            </Html>
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
