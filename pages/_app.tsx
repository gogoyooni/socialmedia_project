import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Modal actionLabel="Submit" isOpen title="Test Modal" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
