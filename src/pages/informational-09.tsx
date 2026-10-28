import { Bell01, SearchLg, Settings01, Zap } from "@untitledui/icons";
import { NavButton } from "@/components/application/app-navigation/base-components/nav-button";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";
import { Calendar } from "@/components/application/calendar/calendar";
import { events } from "@/components/application/calendar/config";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Button } from "@/components/base/buttons/button";
import { DropdownAvatar } from "@/components/base/dropdown/dropdown-avatar";
import { Input } from "@/components/base/input/input";

const tabs = [
    { id: "all", label: "All events" },
    { id: "shared", label: "Shared" },
    { id: "public", label: "Public" },
    { id: "archived", label: "Archived" },
];

export const Informational09 = () => {
    return (
        <div className="flex flex-col bg-primary">
            <HeaderNavigationBase
                activeUrl="/calendar"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Projects", href: "/projects" },
                    { label: "Calendar", href: "/calendar" },
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
            <main className="mx-auto flex w-full max-w-container flex-col gap-8 bg-primary pt-8 pb-12 lg:pt-12 lg:pb-24">
                <div className="flex flex-col gap-5 px-4 lg:px-8">
                    <div className="flex flex-col gap-4 md:flex-row">
                        <h1 className="flex-1 text-xl font-semibold text-primary">My calendar</h1>

                        {/* Desktop search input */}
                        <Input shortcut className="w-full max-md:hidden md:max-w-70" size="sm" aria-label="Search" placeholder="Search" icon={SearchLg} />

                        {/* Mobile search input */}
                        <Input className="md:hidden" size="md" aria-label="Search" placeholder="Search" icon={SearchLg} />
                    </div>
                    <Tabs orientation="horizontal" selectedKey="all" className="-mx-4 inline-flex pl-4">
                        <TabList size="sm" type="underline" items={tabs} />
                    </Tabs>
                </div>

                <div className="lg:px-8">
                    <Calendar events={events} view="week" className="max-lg:rounded-none max-lg:shadow-none" />
                </div>
            </main>
        </div>
    );
};
