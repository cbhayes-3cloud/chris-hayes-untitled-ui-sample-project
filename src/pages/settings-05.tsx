import { Fragment, useState } from "react";
import { Bell01, CheckCircle, Monitor04, Phone01, Settings01, Zap } from "@untitledui/icons";
import { NavButton } from "@/components/application/app-navigation/base-components/nav-button";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";
import { SectionFooter } from "@/components/application/section-footers/section-footer";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { DropdownAvatar } from "@/components/base/dropdown/dropdown-avatar";
import { DropdownIconSimple } from "@/components/base/dropdown/dropdown-icon-simple";
import { Form } from "@/components/base/form/form";
import { HintText } from "@/components/base/input/hint-text";
import { InputBase, TextField } from "@/components/base/input/input";
import { Label } from "@/components/base/input/label";
import { NativeSelect } from "@/components/base/select/select-native";
import { cx } from "@/utils/cx";

const tabs = [
    { id: "details", label: "My details" },
    { id: "profile", label: "Profile" },
    { id: "password", label: "Password" },
    { id: "team", label: "Team" },
    { id: "plan", label: "Plan" },
    { id: "billing", label: "Billing" },
    { id: "email", label: "Email" },
    { id: "notifications", label: "Notifications", badge: 2 },
    { id: "integrations", label: "Integrations" },
    { id: "api", label: "API" },
];

const sessions = [
    {
        icon: Monitor04,
        deviceName: "2026 MacBook Pro 14-inch",
        location: "Melbourne, Australia",
        date: "22 Jan at 10:40am",
        active: true,
    },
    {
        icon: Monitor04,
        deviceName: "2026 MacBook Pro 14-inch",
        location: "Melbourne, Australia",
        date: "22 Jan at 4:20pm",
    },
    {
        icon: Monitor04,
        deviceName: "2026 MacBook Pro 14-inch",
        location: "Melbourne, Australia",
        date: "22 Jan at 12:15pm",
    },
    {
        icon: Phone01,
        deviceName: "2026 iPhone 16 Pro",
        location: "Melbourne, Australia",
        date: "22 Jan at 7:30am",
    },
    {
        icon: Monitor04,
        deviceName: "2026 MacBook Pro 14-inch",
        location: "Melbourne, Australia",
        date: "21 Jan at 4:00pm",
    },
    {
        icon: Monitor04,
        deviceName: "2026 MacBook Pro 14-inch",
        location: "Melbourne, Australia",
        date: "21 Jan at 3:20pm",
    },
    {
        icon: Monitor04,
        deviceName: "2026 MacBook Pro 14-inch",
        location: "Melbourne, Australia",
        date: "21 Jan at 11:15am",
    },
    {
        icon: Phone01,
        deviceName: "2026 iPhone 16 Pro",
        location: "Melbourne, Australia",
        date: "21 Jan at 8:30am",
    },
    {
        icon: Monitor04,
        deviceName: "2026 MacBook Pro 14-inch",
        location: "Melbourne, Australia",
        date: "20 Jan at 3:20pm",
    },
    {
        icon: Monitor04,
        deviceName: "2026 MacBook Pro 14-inch",
        location: "Melbourne, Australia",
        date: "20 Jan at 1:10pm",
    },
];

export const Settings05 = () => {
    const [selectedTab, setSelectedTab] = useState<string>("password");
    const [password, setPassword] = useState("");

    return (
        <div className="bg-primary">
            <HeaderNavigationBase
                activeUrl="/settings/profile"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Projects", href: "/projects" },
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

            <main className="bg-primary pt-8 pb-16 lg:pt-12 lg:pb-24">
                <div className="flex flex-col gap-8 lg:gap-12">
                    <div className="mx-auto flex w-full max-w-container flex-col gap-8 px-4 lg:flex-row lg:gap-16 lg:px-8">
                        <NativeSelect
                            size="sm"
                            aria-label="Page tabs"
                            className="lg:hidden"
                            value={selectedTab}
                            onChange={(event) => setSelectedTab(event.target.value)}
                            options={tabs.map((tab) => ({ label: tab.label, value: tab.id }))}
                        />

                        <Tabs
                            orientation="vertical"
                            className="hidden w-auto lg:flex"
                            selectedKey={selectedTab}
                            onSelectionChange={(value) => setSelectedTab(value as string)}
                        >
                            <TabList type="button-gray" items={tabs} />
                        </Tabs>

                        <div className="flex flex-1 flex-col gap-6">
                            <SectionHeader.Root>
                                <SectionHeader.Group>
                                    <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                                        <SectionHeader.Heading>Password</SectionHeader.Heading>
                                        <SectionHeader.Subheading>Please enter your current password to change your password.</SectionHeader.Subheading>
                                    </div>
                                </SectionHeader.Group>
                            </SectionHeader.Root>

                            <Form
                                className="contents"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const data = Object.fromEntries(new FormData(e.currentTarget));
                                    console.log("Form data:", data);
                                }}
                            >
                                <div className="flex flex-col gap-5">
                                    <TextField isRequired name="currentPassword" type="password">
                                        <Label>Current password</Label>
                                        <InputBase size="md" placeholder="••••••••" autoComplete="current-password" />
                                    </TextField>

                                    <TextField isRequired name="newPassword" type="password" value={password} onChange={setPassword} minLength={8}>
                                        <Label>New password</Label>
                                        <InputBase size="md" placeholder="••••••••" autoComplete="new-password" />
                                        <HintText className="flex items-center gap-1">
                                            <CheckCircle
                                                className={cx(
                                                    "size-4 stroke-[2.25px] text-fg-quaternary group-invalid:text-fg-error-secondary",
                                                    password.length >= 8 && "text-fg-success-primary",
                                                )}
                                            />
                                            Must be at least 8 characters.
                                        </HintText>
                                    </TextField>

                                    <TextField
                                        isRequired
                                        name="confirmPassword"
                                        type="password"
                                        validate={(value) => value === password || "Passwords do not match"}
                                    >
                                        <Label>Confirm new password</Label>
                                        <InputBase size="md" placeholder="••••••••" autoComplete="new-password" />
                                    </TextField>
                                </div>
                                <SectionFooter.Root>
                                    <SectionFooter.Actions>
                                        <Button color="secondary" size="sm">
                                            Cancel
                                        </Button>
                                        <Button type="submit" color="primary" size="sm">
                                            Update password
                                        </Button>
                                    </SectionFooter.Actions>
                                </SectionFooter.Root>
                            </Form>
                        </div>

                        <div className="flex min-w-0 flex-1 flex-col gap-6 lg:max-w-100">
                            <SectionHeader.Root>
                                <SectionHeader.Group>
                                    <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5 self-stretch">
                                        <SectionHeader.Heading>Where you're logged in</SectionHeader.Heading>
                                        <SectionHeader.Subheading className="lg:truncate">
                                            We'll alert you via <span className="font-semibold">olivia@untitledui.com</span> if there is any unusual activity on
                                            your account.
                                        </SectionHeader.Subheading>
                                    </div>

                                    <div className="absolute top-0 right-0 md:static">
                                        <DropdownIconSimple />
                                    </div>
                                </SectionHeader.Group>
                            </SectionHeader.Root>

                            <div className="flex flex-col gap-5">
                                {sessions.map((session, index) => (
                                    <Fragment key={index}>
                                        <div className="flex gap-4">
                                            <session.icon className="size-6 text-fg-quaternary" />

                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2">
                                                    <p className="text-sm font-medium text-secondary">{session.deviceName}</p>
                                                    {session.active && (
                                                        <BadgeWithDot color="success" type="modern" size="sm">
                                                            Active now
                                                        </BadgeWithDot>
                                                    )}
                                                </div>
                                                <p className="text-sm text-tertiary">
                                                    {session.location} • {session.date}
                                                </p>
                                            </div>
                                        </div>

                                        <hr className="h-px w-full border-none bg-border-secondary last:hidden" />
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
