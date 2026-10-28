import { useState } from "react";
import { Bell01, Check, Copy01, Mail01, Plus, Settings01, UserPlus01, Zap } from "@untitledui/icons";
import { NavButton } from "@/components/application/app-navigation/base-components/nav-button";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";
import { ContentDivider } from "@/components/application/content-divider/content-divider";
import { FileUpload } from "@/components/application/file-upload/file-upload-base";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Button } from "@/components/base/buttons/button";
import { DropdownAvatar } from "@/components/base/dropdown/dropdown-avatar";
import { DropdownIconSimple } from "@/components/base/dropdown/dropdown-icon-simple";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { useClipboard } from "@/hooks/use-clipboard";

const tabs = [
    { id: "brief", label: "Project brief" },
    { id: "goals", label: "Goals" },
    { id: "timeline", label: "Timeline" },
    { id: "about", label: "About the client" },
    { id: "notes", label: "Notes" },
];

export const Informational14 = () => {
    const { copy, copied } = useClipboard();
    const [selectedTab, setSelectedTab] = useState("brief");

    return (
        <div className="flex flex-col bg-primary">
            <HeaderNavigationBase
                activeUrl="/projects/overview"
                hideBorder
                items={[
                    { label: "Home", href: "/" },
                    { label: "Dashboard", href: "/dashboard" },
                    {
                        label: "Projects",
                        href: "/projects",
                        items: [
                            { label: "Overview", href: "/projects/overview" },
                            { label: "Notifications", href: "/projects/notifications" },
                            { label: "Analytics", href: "/projects/analytics" },
                            { label: "Saved reports", href: "/projects/saved-reports" },
                            { label: "Messages", href: "/projects/messages" },
                            { label: "User reports", href: "/projects/user-reports" },
                        ],
                    },
                    { label: "Tasks", href: "/tasks" },
                    { label: "Reporting", href: "/reporting" },
                    { label: "Users", href: "/users" },
                ]}
                actions={
                    <>
                        <Button iconLeading={Zap} color="secondary" size="sm">
                            Upgrade now
                        </Button>
                        <div className="flex gap-0.5">
                            <NavButton icon={Settings01} label="Settings" href="/settings" tooltipPlacement="bottom" />
                            <div className="relative">
                                <NavButton icon={Bell01} label="Notifications" href="/notifications-01" tooltipPlacement="bottom" />
                                <div className="absolute -top-0.25 -right-0.25 flex size-3.5 items-center justify-center rounded-full bg-fg-error-primary text-[10px] font-bold text-white">
                                    2
                                </div>
                            </div>
                        </div>
                        <DropdownAvatar />
                    </>
                }
            />
            <main className="flex w-full flex-1 flex-col gap-8 pb-16 lg:pb-24">
                {/* Page header simple */}
                <div className="flex flex-col">
                    <div className="px-1 pt-1">
                        <img
                            src="https://www.untitledui.com/application/color-pattern-orange.webp"
                            alt="Orange color pattern background"
                            className="h-40 w-full rounded-xl object-cover lg:h-60"
                        />
                    </div>
                    <div className="relative mx-auto flex w-full max-w-container flex-col gap-y-6 px-4 pt-5 lg:px-8 lg:pt-6">
                        <div className="flex w-full flex-col items-start justify-between gap-y-4 lg:flex-row">
                            <p className="text-xl font-semibold text-primary">Marketing site redesign</p>
                            <div className="flex gap-3">
                                <Button color="secondary" size="sm">
                                    Messages
                                </Button>
                                <Button size="sm">Edit</Button>
                            </div>
                        </div>
                        <hr className="w-full border-secondary max-lg:hidden" />
                    </div>
                </div>

                <div className="mx-auto flex w-full max-w-container flex-col gap-y-8 overflow-hidden px-4 lg:flex-row lg:gap-16 lg:px-8">
                    <div className="hidden max-w-[133px] min-w-[133px] lg:block">
                        <Tabs orientation="vertical" selectedKey={selectedTab} onSelectionChange={(value) => setSelectedTab(value as string)}>
                            <TabList size="sm" type="button-gray" items={tabs} />
                        </Tabs>
                    </div>
                    <div className="flex flex-1 flex-col gap-6 lg:gap-8">
                        <SectionHeader.Root className="border-b-0 pb-0 lg:border-b lg:pb-5">
                            <SectionHeader.Group>
                                <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5 self-stretch">
                                    <SectionHeader.Heading>Project overview</SectionHeader.Heading>
                                    <SectionHeader.Subheading className="truncate">A overview of the project, goals and outcomes.</SectionHeader.Subheading>
                                </div>

                                <div className="absolute top-0 right-0 md:static">
                                    <DropdownIconSimple />
                                </div>
                            </SectionHeader.Group>

                            <Tabs
                                orientation="horizontal"
                                selectedKey={selectedTab}
                                onSelectionChange={(value) => setSelectedTab(value as string)}
                                className="w-full lg:hidden"
                            >
                                <TabList size="sm" type="underline" className="w-full" items={tabs} />
                            </Tabs>
                        </SectionHeader.Root>

                        <div className="flex flex-col gap-8 lg:max-w-180">
                            <p className="rounded-lg bg-secondary p-4 text-md font-medium text-secondary">
                                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
                                quis montes, sit sit. Tellus aliquam enim urna, etiam.
                            </p>
                            <div className="flex flex-col gap-3">
                                <p className="text-md font-semibold text-primary">About the company</p>
                                <div className="prose max-w-180 text-md">
                                    <p>
                                        Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac
                                        vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla. Elit nisi in eleifend sed nisi.
                                        Pulvinar at orci, proin imperdiet commodo consectetur convallis risus.
                                    </p>
                                    <ul>
                                        <li>
                                            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.Diam elit, orci, tincidunt aenean tempus.
                                            Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
                                        </li>
                                        <li>Non pellentesque congue eget consectetur turpis.</li>
                                        <li>
                                            Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed
                                            vel, congue felis elit erat nam nibh orci.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-2">
                                <img
                                    src="https://www.untitledui.com/application/man-and-laptop.webp"
                                    alt="Man and laptop"
                                    className="h-51.5 w-full object-cover lg:h-44"
                                />
                                <img src="https://www.untitledui.com/application/spirals.webp" alt="Sythesize" className="h-51.5 w-full object-cover lg:h-44" />
                                <img src="https://www.untitledui.com/application/plants.webp" alt="Plants" className="h-51.5 w-full object-cover lg:h-44" />
                                <FileUpload.DropZone className="flex justify-center lg:h-44" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-md font-semibold text-primary">Target audience</p>
                                <div className="prose max-w-180 text-md">
                                    <p>
                                        Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur
                                        turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus.
                                        Sed vel, congue felis elit erat nam nibh orci.
                                    </p>
                                    <p>
                                        Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac
                                        vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                                    </p>
                                    <p>
                                        Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum
                                        enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate
                                        posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu
                                        vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-md font-semibold text-primary">What does success look like?</p>
                                <div className="prose max-w-180 text-md">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tellus vel pretium posuere. Id maecenas a tristique
                                        in fusce hendrerit. Amet, mattis in vitae, est urna, diam. Ante fringilla nulla at sed tincidunt. Et aliquam neque cras
                                        mauris non bibendum. Hac ut ridiculus enim urna felis amet. Dolor aliquam diam suspendisse non elit faucibus id orci,
                                        mi.
                                    </p>
                                    <p>
                                        Pharetra nam gravida commodo accumsan sapien aliquet bibendum purus nunc. Quam cursus at eu, aliquam integer. Accumsan,
                                        nisi ultricies ut pulvinar fames neque risus. Eu et, elementum leo amet bibendum gravida vitae ridiculus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ContentDivider type="single-line">
                                <Button iconLeading={Plus} color="secondary" size="sm">
                                    Add section
                                </Button>
                            </ContentDivider>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 lg:w-90 lg:gap-y-5">
                        <div className="flex flex-col gap-5 rounded-xl bg-secondary px-4 py-5 lg:px-5">
                            <div className="flex flex-col gap-1">
                                <p className="text-md font-semibold text-primary">Share this project</p>
                                <p className="text-sm text-tertiary">Your new project has been created. Invite colleagues to collaborate on this project.</p>
                            </div>
                            <div className="flex items-end gap-1">
                                <Input isReadOnly size="md" label="Share link" value="join.yourcompany.io/project" />
                                <Button size="sm" iconLeading={copied ? Check : Copy01} onClick={() => copy("join.yourcompany.io/project")} color="tertiary" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 overflow-hidden rounded-xl bg-secondary px-4 py-5 lg:px-5">
                            <div className="flex flex-col gap-y-5">
                                <FeaturedIcon icon={UserPlus01} size="lg" color="gray" theme="modern" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-md font-semibold text-primary">Invite collaborators</p>
                                    <p className="text-sm text-tertiary">
                                        Your new project has been created. Invite colleagues to collaborate on this project.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    <Input icon={Mail01} label="Email address" size="md" placeholder="you@yourcompany.io" />
                                    <Input icon={Mail01} size="md" placeholder="you@yourcompany.io" />
                                    <Button size="sm" color="link-color" iconLeading={Plus}>
                                        Add another
                                    </Button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-3">
                                <Button size="sm" color="secondary">
                                    Cancel
                                </Button>
                                <Button size="sm">Confirm</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
