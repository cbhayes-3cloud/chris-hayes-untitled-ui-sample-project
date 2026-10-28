import { Button } from "@/components/base/buttons/button";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";

export const FooterSmall01 = () => {
    return (
        <footer className="bg-primary py-12">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between lg:flex-row lg:items-center">
                    <div className="lg:w-40">
                        <UntitledLogo className="h-7 w-min shrink-0" />
                    </div>
                    <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-[repeat(6,max-content)] lg:mt-0">
                        {[
                            {
                                label: "Overview",
                                href: "#",
                            },
                            {
                                label: "Features",
                                href: "#",
                            },
                            {
                                label: "Pricing",
                                href: "#",
                            },
                            {
                                label: "Careers",
                                href: "#",
                            },
                            {
                                label: "Help",
                                href: "#",
                            },
                            {
                                label: "Privacy",
                                href: "#",
                            },
                        ].map((item) => (
                            <li key={item.label} className="flex">
                                <Button color="link-gray" size="md" href={item.href} className="max-h-5">
                                    {item.label}
                                </Button>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-12 text-sm text-quaternary lg:mt-0 lg:w-40 lg:text-right">
                        © 2077 Untitled UI <span className="ml-1 md:hidden">All rights reserved.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};
