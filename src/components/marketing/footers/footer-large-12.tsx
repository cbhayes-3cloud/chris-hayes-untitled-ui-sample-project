import { ChevronRight } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";

const footerNavList = [
    {
        label: "Product",
        items: [
            {
                label: "Overview",
                href: "#",
            },
            {
                label: "Features",
                href: "#",
            },
            {
                label: "Solutions",
                href: "#",
                badge: (
                    <Badge color="gray" type="modern" size="sm" className="ml-1">
                        New
                    </Badge>
                ),
            },
            {
                label: "Tutorials",
                href: "#",
            },
            {
                label: "Pricing",
                href: "#",
            },
            {
                label: "Releases",
                href: "#",
            },
        ],
    },
    {
        label: "Company",
        items: [
            {
                label: "About us",
                href: "#",
            },
            {
                label: "Careers",
                href: "#",
            },
            {
                label: "Press",
                href: "#",
            },
            {
                label: "News",
                href: "#",
            },
            {
                label: "Media kit",
                href: "#",
            },
            {
                label: "Contact",
                href: "#",
            },
        ],
    },
    {
        label: "Resources",
        items: [
            {
                label: "Blog",
                href: "#",
            },
            {
                label: "Newsletter",
                href: "#",
            },
            {
                label: "Events",
                href: "#",
            },
            {
                label: "Help centre",
                href: "#",
            },
            {
                label: "Tutorials",
                href: "#",
            },
            {
                label: "Support",
                href: "#",
            },
        ],
    },
    {
        label: "Social",
        items: [
            {
                label: "X",
                href: "#",
            },
            {
                label: "LinkedIn",
                href: "#",
            },
            {
                label: "Facebook",
                href: "#",
            },
            {
                label: "GitHub",
                href: "#",
            },
            {
                label: "AngelList",
                href: "#",
            },
            {
                label: "Dribbble",
                href: "#",
            },
        ],
    },
    {
        label: "Legal",
        items: [
            {
                label: "Terms",
                href: "#",
            },
            {
                label: "Privacy",
                href: "#",
            },
            {
                label: "Cookies",
                href: "#",
            },
            {
                label: "Licenses",
                href: "#",
            },
            {
                label: "Settings",
                href: "#",
            },
            {
                label: "Contact",
                href: "#",
            },
        ],
    },
];
const footerSocials = [
    {
        label: "X",
        icon: X,
        href: "https://x.com/",
    },
    {
        label: "LinkedIn",
        icon: LinkedIn,
        href: "https://www.linkedin.com/",
    },
    {
        label: "Facebook",
        icon: Facebook,
        href: "https://www.facebook.com/",
    },
    {
        label: "GitHub",
        icon: GitHub,
        href: "https://github.com/",
    },
    {
        label: "AngelList",
        icon: AngelList,
        href: "https://angel.co/",
    },
    {
        label: "Dribbble",
        icon: Dribbble,
        href: "https://dribbble.com/",
    },
    {
        label: "Layers",
        icon: Layers,
        href: "https://layers.com/",
    },
];

const socialProofAvatars = [
    { src: "https://www.untitledui.com/logos/images/Kintsugi.jpg", alt: "Kintsugi" },
    { src: "https://www.untitledui.com/logos/images/Refractional.jpg", alt: "Refractional" },
    { src: "https://www.untitledui.com/logos/images/Leapyear.jpg", alt: "Leapyear" },
    { src: "https://www.untitledui.com/logos/images/ContrastAI.jpg", alt: "ContrastAI" },
];

const FooterSocialProofBadge = () => (
    <a
        href="#"
        className="flex w-max items-center gap-3 rounded-full bg-primary_alt py-1.5 pr-2 pl-1.5 shadow-xs ring-1 ring-secondary_alt transition duration-100 ease-linear hover:bg-primary_hover"
    >
        <div className="flex items-start">
            {socialProofAvatars.map((avatar, i) => (
                <img
                    key={i}
                    src={avatar.src}
                    alt={avatar.alt}
                    className="-ml-1 size-6 rounded-full object-cover ring-[1.5px] ring-white outline-[0.5px] -outline-offset-[0.5px] outline-black/16 first:ml-0"
                />
            ))}
        </div>
        <hr className="h-4 w-px rounded-full border-none bg-border-secondary" />
        <div className="flex items-center gap-1.5">
            <p className="text-sm font-semibold text-primary">Join 2,000+ companies</p>
            <ChevronRight className="size-4 text-fg-quaternary" />
        </div>
    </a>
);

export const FooterLarge12 = () => {
    return (
        <footer className="bg-primary">
            <div className="bg-secondary_alt py-10 md:py-12">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2 md:gap-4">
                                <p id="newsletter-label" className="text-display-xs font-semibold text-primary md:text-display-sm">
                                    Get notified when we launch
                                </p>
                                <p id="newsletter-hint" className="text-md text-tertiary md:text-xl">
                                    Stay up to date with the latest news, announcements, and articles.
                                </p>
                            </div>
                        </div>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="w-full sm:w-100"
                        >
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Input
                                    isRequired
                                    aria-labelledby="newsletter-label"
                                    aria-describedby="newsletter-hint"
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    size="lg"
                                    wrapperClassName="flex-1"
                                />
                                <Button type="submit" size="lg">
                                    Subscribe
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-container px-4 py-12 md:px-8 md:pt-16">
                <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                    <div className="flex flex-col gap-6 md:w-80">
                        <UntitledLogo className="h-7 w-min shrink-0" />
                        <p className="text-md text-tertiary">Design amazing digital experiences that create more happy in the world.</p>
                        <FooterSocialProofBadge />
                    </div>
                    <nav className="flex-1">
                        <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-5">
                            {footerNavList.slice(0, 5).map((category) => (
                                <li key={category.label}>
                                    <h4 className="text-sm font-semibold text-quaternary">{category.label}</h4>
                                    <ul className="mt-4 flex flex-col gap-3">
                                        {category.items.map((item) => (
                                            <li key={item.label} className="flex">
                                                <Button color="link-gray" size="md" href={item.href} iconTrailing={item.badge} className="max-h-5 gap-1">
                                                    {item.label}
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="mt-12 flex flex-col-reverse justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row">
                    <p className="text-sm text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
                    <ul className="flex gap-4">
                        {footerSocials.map(({ label, icon: Icon, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex rounded-xs text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    <Icon className="size-5" aria-label={label} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};
