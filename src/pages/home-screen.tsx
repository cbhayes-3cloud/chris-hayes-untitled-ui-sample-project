import { useState } from "react";
import { Bell01, SearchLg, Settings01 } from "@untitledui/icons";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";
import { SectionHeader } from "@/components/application/section-headers/section-header";
import { NavButton } from "@/components/application/app-navigation/base-components/nav-button";
import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
import { Input } from "@/components/base/input/input";
import { Select } from "@/components/base/select/select";
import { DropdownAvatar } from "@/components/base/dropdown/dropdown-avatar";
import { TabList, Tabs } from "@/components/application/tabs/tabs";

const teamSettingsTabs = [
    { id: "My details", label: "My details" },
    { id: "Profile", label: "Profile" },
    { id: "Password", label: "Password" },
    { id: "Team", label: "Team" },
    { id: "Plan", label: "Plan" },
    { id: "Billing", label: "Billing" },
    { id: "Email", label: "Email" },
    { id: "Notifications", label: "Notifications", badge: 2 },
    { id: "Integrations", label: "Integrations" },
    { id: "API", label: "API" },
];

export const HomeScreen = () => {
    const [selectedPeriod, setSelectedPeriod] = useState("12 months");
    const [selectedTab, setSelectedTab] = useState("My details");

    return (
        <>
            <HeaderNavigationBase
                activeUrl="/"
                items={[]}
                actions={
                    <>
                        <div className="flex gap-0.5">
                            <NavButton icon={SearchLg} label="Search" href="/search" tooltipPlacement="bottom" />
                            <NavButton icon={Settings01} label="Settings" href="/settings-01" tooltipPlacement="bottom" />
                            <div className="relative">
                                <NavButton icon={Bell01} label="Notifications" href="/notifications-01" tooltipPlacement="bottom" />
                                <div className="absolute -top-0.25 -right-0.25 flex size-3.5 items-center justify-center rounded-full bg-fg-error-primary text-xs font-bold text-white">
                                    2
                                </div>
                            </div>
                        </div>
                        <DropdownAvatar />
                    </>
                }
            />
            <main className="mx-auto w-full max-w-container px-4 py-8 md:px-8">
                <section className="border-b border-secondary pb-8">
                    <SectionHeader
                        title="Team members"
                        description="Manage your team members and their account permissions here."
                        contentTrailing={
                            <ButtonGroup
                                aria-label="Reporting period"
                                selectedKeys={[selectedPeriod]}
                                onSelectionChange={(keys) => {
                                    const selectedKey = Array.from(keys)[0];
                                    if (selectedKey === "12 months" || selectedKey === "30 days" || selectedKey === "7 days") {
                                        setSelectedPeriod(selectedKey);
                                    }
                                }}
                            >
                                <ButtonGroupItem id="12 months">12 months</ButtonGroupItem>
                                <ButtonGroupItem id="30 days">30 days</ButtonGroupItem>
                                <ButtonGroupItem id="7 days">7 days</ButtonGroupItem>
                            </ButtonGroup>
                        }
                    />
                </section>
                <section className="pt-8">
                    <SectionHeader
                        title="Data Table"
                        description="Manage your data table and its contents here."
                        contentTrailing={<Input aria-label="Search team settings" placeholder="Search" icon={SearchLg} shortcut className="w-full sm:w-80" />}
                    />
                    <div className="mt-8 hidden lg:block">
                        <Tabs selectedKey={selectedTab} onSelectionChange={(key) => setSelectedTab(String(key))}>
                            <TabList aria-label="Team settings" type="button-border" className="w-full gap-2" items={teamSettingsTabs} />
                        </Tabs>
                    </div>
                    <div className="mt-8 lg:hidden">
                        <Select
                            aria-label="Data table section"
                            selectedKey={selectedTab}
                            onSelectionChange={(key) => setSelectedTab(String(key))}
                            size="sm"
                            className="w-full"
                            items={teamSettingsTabs}
                        >
                            {(item) => (
                                <Select.Item id={item.id} key={item.id}>
                                    {item.label}
                                </Select.Item>
                            )}
                        </Select>
                    </div>
                </section>
            </main>
        </>
    );
};
