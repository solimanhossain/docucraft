import "./globals.css";
import Header from "@/components/Header";
import localFont from "next/font/local";
import { getDocs } from "@/lib/docs";
import Footer from "@/components/Footer";

const geistSans = localFont({
    src: "../public/assets/fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../public/assets/fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "DocuCraft",
    description: "DocuCraft is a documention website by protocol",
};

export default function RootLayout({ children }) {
    const docs = getDocs();
    // console.log(docs);

    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased h-full lg:ml-72 xl:ml-80`}
            >
                <Header docs={docs} />
                {children}
                <Footer />
            </body>
        </html>
    );
}
