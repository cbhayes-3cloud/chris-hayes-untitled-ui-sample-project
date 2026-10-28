import { Bell01, Settings01, Zap } from "@untitledui/icons";
import { NavButton } from "@/components/application/app-navigation/base-components/nav-button";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";
import { SectionLabel } from "@/components/application/section-headers/section-label";
import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
import { Button } from "@/components/base/buttons/button";
import { DropdownAvatar } from "@/components/base/dropdown/dropdown-avatar";

export const Settings17 = () => {
    return (
        <div className="bg-primary">
            <HeaderNavigationBase
                activeUrl="/settings/billing"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Projects", href: "/projects" },
                    { label: "Tasks", href: "/tasks" },
                    { label: "Reporting", href: "/reporting" },
                    { label: "Users", href: "/users" },
                ]}
                subItems={[
                    { label: "My details", href: "/settings/my-details" },
                    { label: "Profile", href: "/settings/profile" },
                    { label: "Password", href: "/settings/password" },
                    { label: "Team", href: "/settings/team" },
                    { label: "Billing", href: "/settings/billing" },
                    { label: "Notifications", href: "/settings/notifications" },
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

            <main className="bg-primary pt-8 pb-12 lg:pt-12 lg:pb-24">
                <div className="flex flex-col gap-8">
                    <div className="mx-auto flex w-full max-w-container flex-col gap-5 px-4 lg:px-8">
                        {/* Page header simple with search */}
                        <div className="relative flex flex-col gap-4">
                            <div className="flex flex-col gap-4 border-b border-secondary pb-4 lg:flex-row">
                                <div className="flex flex-1 flex-col gap-0.5">
                                    <h1 className="text-xl font-semibold text-primary">Notifications</h1>
                                    <p className="text-md text-tertiary">Select when and how you'll be notified.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto flex w-full max-w-container flex-col gap-6 px-4 lg:px-8">
                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                            <SectionLabel.Root
                                size="sm"
                                title="General notifications"
                                description="Select when you'll be notified when the following changes occur."
                            />

                            <ul className="flex flex-col gap-4 pb-4">
                                <li className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
                                    <p className="flex-1 text-sm font-medium text-secondary">I'm mentioned in a message</p>

                                    <ButtonGroup size="sm" aria-label="I'm mentioned in a message" defaultSelectedKeys={["in-app"]} selectionMode="single">
                                        <ButtonGroupItem id="none">None</ButtonGroupItem>
                                        <ButtonGroupItem id="in-app">In-app</ButtonGroupItem>
                                        <ButtonGroupItem id="email">Email</ButtonGroupItem>
                                    </ButtonGroup>
                                </li>
                                <li role="presentation">
                                    <hr className="h-px w-full border-none bg-border-secondary" aria-hidden="true" />
                                </li>
                                <li className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
                                    <p className="flex-1 text-sm font-medium text-secondary">Someone replies to any message</p>

                                    <ButtonGroup size="sm" aria-label="Someone replies to any message" defaultSelectedKeys={["in-app"]} selectionMode="single">
                                        <ButtonGroupItem id="none">None</ButtonGroupItem>
                                        <ButtonGroupItem id="in-app">In-app</ButtonGroupItem>
                                        <ButtonGroupItem id="email">Email</ButtonGroupItem>
                                    </ButtonGroup>
                                </li>
                                <li role="presentation">
                                    <hr className="h-px w-full border-none bg-border-secondary" aria-hidden="true" />
                                </li>
                                <li className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
                                    <p className="flex-1 text-sm font-medium text-secondary">I'm assigned a task</p>

                                    <ButtonGroup size="sm" aria-label="I'm assigned a task" defaultSelectedKeys={["in-app"]} selectionMode="single">
                                        <ButtonGroupItem id="none">None</ButtonGroupItem>
                                        <ButtonGroupItem id="in-app">In-app</ButtonGroupItem>
                                        <ButtonGroupItem id="email">Email</ButtonGroupItem>
                                    </ButtonGroup>
                                </li>
                                <li role="presentation">
                                    <hr className="h-px w-full border-none bg-border-secondary" aria-hidden="true" />
                                </li>
                                <li className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
                                    <p className="flex-1 text-sm font-medium text-secondary">A task is overdue</p>

                                    <ButtonGroup size="sm" aria-label="A task is overdue" defaultSelectedKeys={["in-app"]} selectionMode="single">
                                        <ButtonGroupItem id="none">None</ButtonGroupItem>
                                        <ButtonGroupItem id="in-app">In-app</ButtonGroupItem>
                                        <ButtonGroupItem id="email">Email</ButtonGroupItem>
                                    </ButtonGroup>
                                </li>
                                <li role="presentation">
                                    <hr className="h-px w-full border-none bg-border-secondary" aria-hidden="true" />
                                </li>
                                <li className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
                                    <p className="flex-1 text-sm font-medium text-secondary">A task status is updated</p>

                                    <ButtonGroup size="sm" aria-label="A task status is updated" defaultSelectedKeys={["email"]} selectionMode="single">
                                        <ButtonGroupItem id="none">None</ButtonGroupItem>
                                        <ButtonGroupItem id="in-app">In-app</ButtonGroupItem>
                                        <ButtonGroupItem id="email">Email</ButtonGroupItem>
                                    </ButtonGroup>
                                </li>
                            </ul>
                        </div>

                        <hr className="h-px w-full border-none bg-border-secondary" aria-hidden="true" />

                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                            <SectionLabel.Root
                                size="sm"
                                title="Summary notifications"
                                description="Select when you'll be notified when the following summaries or report are ready."
                            />

                            <ul className="flex flex-col gap-4 pb-4">
                                <li className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
                                    <p className="flex-1 text-sm font-medium text-secondary">Daily summary</p>

                                    <ButtonGroup size="sm" aria-label="Daily summary" defaultSelectedKeys={["email"]} selectionMode="single">
                                        <ButtonGroupItem id="none">None</ButtonGroupItem>
                                        <ButtonGroupItem id="in-app">In-app</ButtonGroupItem>
                                        <ButtonGroupItem id="email">Email</ButtonGroupItem>
                                    </ButtonGroup>
                                </li>
                                <li role="presentation">
                                    <hr className="h-px w-full border-none bg-border-secondary" aria-hidden="true" />
                                </li>
                                <li className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
                                    <p className="flex-1 text-sm font-medium text-secondary">Weekly summary</p>

                                    <ButtonGroup size="sm" aria-label="Weekly summary" defaultSelectedKeys={["email"]} selectionMode="single">
                                        <ButtonGroupItem id="none">None</ButtonGroupItem>
                                        <ButtonGroupItem id="in-app">In-app</ButtonGroupItem>
                                        <ButtonGroupItem id="email">Email</ButtonGroupItem>
                                    </ButtonGroup>
                                </li>
                                <li role="presentation">
                                    <hr className="h-px w-full border-none bg-border-secondary" aria-hidden="true" />
                                </li>
                                <li className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
                                    <p className="flex-1 text-sm font-medium text-secondary">Monthly summary</p>

                                    <ButtonGroup size="sm" aria-label="Monthly summary" defaultSelectedKeys={["email"]} selectionMode="single">
                                        <ButtonGroupItem id="none">None</ButtonGroupItem>
                                        <ButtonGroupItem id="in-app">In-app</ButtonGroupItem>
                                        <ButtonGroupItem id="email">Email</ButtonGroupItem>
                                    </ButtonGroup>
                                </li>
                                <li role="presentation">
                                    <hr className="h-px w-full border-none bg-border-secondary" aria-hidden="true" />
                                </li>
                                <li className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
                                    <p className="flex-1 text-sm font-medium text-secondary">Quarterly summary</p>

                                    <ButtonGroup size="sm" aria-label="Quarterly summary" defaultSelectedKeys={["email"]} selectionMode="single">
                                        <ButtonGroupItem id="none">None</ButtonGroupItem>
                                        <ButtonGroupItem id="in-app">In-app</ButtonGroupItem>
                                        <ButtonGroupItem id="email">Email</ButtonGroupItem>
                                    </ButtonGroup>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
