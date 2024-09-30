import Header from "@/components/Header";
import { getDoc } from "@/lib/docs";
export default function page() {
    getDoc();

    return (
        <main class="h-full lg:ml-72 xl:ml-80">
            <Header />
        </main>
    );
}
