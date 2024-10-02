import Image from "next/image";
import Link from "next/link";

export default function ProtocolLogo() {
    return (
        <div className="hidden lg:flex">
            <Link ariaLabel="Home" href="/">
                <Image
                    src="/assets/icons/logo.svg"
                    alt="Protocol"
                    class="h-6 w-auto"
                    width={32}
                    height={32}
                    quality={100}
                    priority
                />
            </Link>
        </div>
    );
}
