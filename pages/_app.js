import { AuthUserProvide } from "@/firebase/auth";
import "@/styles/globals.css";
import Head from "next/head";



export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>JS Dev - Todo App</title>
            </Head>
            <AuthUserProvide>
                <Component {...pageProps} />
            </AuthUserProvide>
        </>
    );
}
