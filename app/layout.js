import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
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
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased h-full lg:ml-72 xl:ml-80`}
            >
                <Header />
                <main className="relative px-4 pt-14 sm:px-6 lg:px-8">
                    <div className="flex-auto py-16">
                        <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
                            <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"></div>
                            </div>
                        </div>
                        {children}
                    </div>
                </main>
                <Footer />
            </body>
        </html>
    );
}
