import Head from "next/head";

function Header() {
  return (
    <Head>
      <title>SourceCraft</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="SourceCraft" />

      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}

export default Header;
