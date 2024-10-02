import Image from "next/image";
import Link from "next/link";

export default function Article() {
    return (
        <article className="prose dark:prose-invert">
            <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
                <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"></div>
                </div>
            </div>

            <h1>Documentation</h1>

            <p className="lead my-2">
                To get started, create a new application in your
                <Link href="#"> developer settings</Link> , then read about how
                to make requests for the resources you need to access using our
                HTTP APIs or dedicated client SDKs. When your integration is
                ready to go live, publish it to our{" "}
                <Link href="#">integrations directory</Link> to reach the
                Protocol community.
            </p>

            <div className="my-8 xl:max-w-none">
                <div className="not-prose mb-16 mt-6 flex gap-3">
                    <Link className="buttonDark" href="/quickstart">
                        Analysis
                    </Link>
                    <Link className="buttonLight" href="/sdks">
                        Test
                    </Link>
                </div>
            </div>

            <h1>More</h1>
            <div>
                <div className="not-prose grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-4 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                            Errors
                        </h3>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                            Read about the different types of errors returned by
                            the API.
                        </p>
                        <p className="mt-4">
                            <Link className="readMore" href="/authentication">
                                <span>Read more</span>
                                <Image
                                    src="./assets/icons/rightArrow.svg"
                                    className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                                    alt="svg"
                                    height={20}
                                    width={20}
                                />
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
}
