import { useMemo, useState } from "react";
import { Bell01, Check, DownloadCloud02, Plus, Settings01, Zap } from "@untitledui/icons";
import type { SortDescriptor } from "react-aria-components";
import { NavButton } from "@/components/application/app-navigation/base-components/nav-button";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { SectionLabel } from "@/components/application/section-headers/section-label";
import { Table, TableCard } from "@/components/application/table/table";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import { BadgeWithIcon } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import { DropdownAvatar } from "@/components/base/dropdown/dropdown-avatar";
import { RadioGroupPaymentIcon } from "@/components/base/radio-groups/radio-group-payment-icon";
import { ApplePayIcon, MastercardIcon, VisaIcon } from "@/components/foundations/payment-icons";

// Helper functions for formatting
const formatCurrency = (amount: number): string => `USD ${amount.toLocaleString("en-US", { style: "currency", currency: "USD" })}`;

const formatDate = (timestamp: number): string =>
    new Date(timestamp).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

const formatInvoice = (planName: string, billingPeriod: number): string => {
    const date = new Date(billingPeriod);
    const monthYear = date.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });

    return `${planName} – ${monthYear}`;
};

const tabs = [
    { id: "details", label: "My details" },
    { id: "profile", label: "Profile" },
    { id: "password", label: "Password" },
    { id: "team", label: "Team", badge: 2 },
    { id: "plan", label: "Plan" },
    { id: "billing", label: "Billing" },
    { id: "email", label: "Email" },
    { id: "notifications", label: "Notifications", badge: 2 },
    { id: "integrations", label: "Integrations" },
    { id: "api", label: "API" },
];

const invoices = [
    {
        id: "invoice-01",
        billingPeriod: new Date(2026, 11, 1).getTime(),
        plan: "Basic plan",
        amount: 10.0,
        date: new Date(2026, 11, 1).getTime(),
        status: "Paid",
        admin: {
            name: "Olivia Rhye",
            avatar: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
            email: "olivia@untitledui.com",
        },
    },
    {
        id: "invoice-02",
        billingPeriod: new Date(2026, 10, 1).getTime(),
        plan: "Basic plan",
        amount: 10.0,
        date: new Date(2026, 10, 1).getTime(),
        status: "Paid",
        admin: {
            name: "Olivia Rhye",
            avatar: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
            email: "olivia@untitledui.com",
        },
    },
    {
        id: "invoice-03",
        billingPeriod: new Date(2026, 9, 1).getTime(),
        plan: "Basic plan",
        amount: 10.0,
        date: new Date(2026, 9, 1).getTime(),
        status: "Paid",
        admin: {
            name: "Olivia Rhye",
            avatar: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
            email: "olivia@untitledui.com",
        },
    },
    {
        id: "invoice-04",
        billingPeriod: new Date(2026, 8, 1).getTime(),
        plan: "Basic plan",
        amount: 10.0,
        date: new Date(2026, 8, 1).getTime(),
        status: "Paid",
        admin: {
            name: "Olivia Rhye",
            avatar: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
            email: "olivia@untitledui.com",
        },
    },
    {
        id: "invoice-05",
        billingPeriod: new Date(2026, 7, 1).getTime(),
        plan: "Basic plan",
        amount: 10.0,
        date: new Date(2026, 7, 1).getTime(),
        status: "Paid",
        admin: {
            name: "Olivia Rhye",
            avatar: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
            email: "olivia@untitledui.com",
        },
    },
    {
        id: "invoice-06",
        billingPeriod: new Date(2026, 6, 1).getTime(),
        plan: "Basic plan",
        amount: 10.0,
        date: new Date(2026, 6, 1).getTime(),
        status: "Paid",
        admin: {
            name: "Olivia Rhye",
            avatar: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
            email: "olivia@untitledui.com",
        },
    },
    {
        id: "invoice-07",
        billingPeriod: new Date(2026, 5, 1).getTime(),
        plan: "Basic plan",
        amount: 10.0,
        date: new Date(2026, 5, 1).getTime(),
        status: "Paid",
        admin: {
            name: "Olivia Rhye",
            avatar: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
            email: "olivia@untitledui.com",
        },
    },
];

const paymentCards = [
    {
        value: "card-01",
        title: "Visa ending in 1234",
        description: "Expiry 06/2028",
        logo: <VisaIcon className="h-8 w-11.5" />,
    },
    {
        value: "card-02",
        title: "Mastercard ending in 1234",
        description: "Expiry 06/2028",
        logo: <MastercardIcon className="h-8 w-11.5" />,
    },
    {
        value: "card-03",
        title: "Visa ending in 1234",
        description: "Expiry 06/2028",
        logo: <ApplePayIcon className="h-8 w-11.5" />,
    },
];

export const Settings16 = () => {
    const [selectedTab, setSelectedTab] = useState<string>("billing");

    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "billingPeriod",
        direction: "descending",
    });

    const sortedItems = useMemo(() => {
        return [...invoices].sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            // Handle numbers
            if (typeof first === "number" && typeof second === "number") {
                return sortDescriptor.direction === "ascending" ? first - second : second - first;
            }

            // Handle strings
            if (typeof first === "string" && typeof second === "string") {
                const result = first.localeCompare(second);
                return sortDescriptor.direction === "ascending" ? result : -result;
            }

            return 0;
        });
    }, [sortDescriptor]);

    return (
        <div className="bg-primary">
            <HeaderNavigationBase
                activeUrl="/settings/notifications"
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
                        <div className="relative flex flex-col gap-4 lg:border-b lg:border-secondary lg:pb-4">
                            <div className="flex flex-col gap-4 lg:flex-row">
                                <div className="flex flex-1 flex-col gap-0.5">
                                    <h1 className="text-xl font-semibold text-primary">Settings</h1>
                                    <p className="text-md text-tertiary">Manage your team and preferences here.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto flex w-full max-w-container gap-24 px-4 lg:px-8">
                        <Tabs
                            orientation="vertical"
                            className="hidden w-auto lg:flex"
                            selectedKey={selectedTab}
                            onSelectionChange={(value) => setSelectedTab(value as string)}
                        >
                            <TabList type="button-gray" items={tabs} />
                        </Tabs>

                        <div className="flex min-w-0 flex-1 flex-col gap-6">
                            <SectionHeader.Root>
                                <SectionHeader.Group>
                                    <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                                        <SectionHeader.Heading>Payment method</SectionHeader.Heading>
                                        <SectionHeader.Subheading>Update your billing details and address.</SectionHeader.Subheading>
                                    </div>
                                </SectionHeader.Group>
                            </SectionHeader.Root>

                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                                <SectionLabel.Root isRequired size="sm" title="Card details" description="Select default payment method." />

                                <div className="flex flex-col gap-4">
                                    <RadioGroupPaymentIcon defaultValue="card-01" items={paymentCards} />

                                    <div className="flex gap-3">
                                        <Button color="link-gray" size="md" iconLeading={Plus}>
                                            Add new payment method
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <hr className="hidden h-px w-full border-none bg-border-secondary lg:block" />

                            <SectionHeader.Root className="mt-2 border-none pb-0 lg:mt-0">
                                <SectionHeader.Group>
                                    <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                                        <SectionHeader.Heading>Billing history</SectionHeader.Heading>
                                        <SectionHeader.Subheading>Access all your previous invoices.</SectionHeader.Subheading>
                                    </div>
                                    <SectionHeader.Actions>
                                        <Button color="secondary" size="sm" iconLeading={DownloadCloud02}>
                                            Download all
                                        </Button>
                                    </SectionHeader.Actions>
                                </SectionHeader.Group>
                            </SectionHeader.Root>

                            <TableCard.Root className="-mx-4 rounded-none bg-transparent shadow-none ring-0 lg:mx-0 lg:rounded-xl lg:bg-primary lg:shadow-xs lg:ring-1">
                                <Table
                                    aria-label="Invoices"
                                    selectionMode="multiple"
                                    sortDescriptor={sortDescriptor}
                                    onSortChange={setSortDescriptor}
                                    className="bg-primary"
                                >
                                    <Table.Header className="bg-primary">
                                        <Table.Head id="billingPeriod" isRowHeader label="Invoice" allowsSorting className="w-full" />
                                        <Table.Head id="amount" label="Amount" />
                                        <Table.Head id="date" label="Date" />
                                        <Table.Head id="status" label="Status" />
                                        <Table.Head id="users" label="Users on plan" />
                                        <Table.Head id="actions" />
                                    </Table.Header>
                                    <Table.Body items={sortedItems}>
                                        {(invoice) => (
                                            <Table.Row id={invoice.id} className="odd:bg-secondary">
                                                <Table.Cell className="font-semibold! text-nowrap">
                                                    {formatInvoice(invoice.plan, invoice.billingPeriod)}
                                                </Table.Cell>
                                                <Table.Cell className="text-nowrap">{formatCurrency(invoice.amount)}</Table.Cell>
                                                <Table.Cell className="text-nowrap">{formatDate(invoice.date)}</Table.Cell>
                                                <Table.Cell>
                                                    <BadgeWithIcon
                                                        iconLeading={Check}
                                                        color={invoice.status === "Paid" ? "success" : invoice.status === "Failed" ? "error" : "gray"}
                                                        type="pill-color"
                                                        size="sm"
                                                    >
                                                        {invoice.status}
                                                    </BadgeWithIcon>
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <div className="flex -space-x-1">
                                                        <Avatar
                                                            className="ring-[1.5px] ring-bg-primary"
                                                            size="xs"
                                                            src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                                                            alt="Olivia Rhye"
                                                        />
                                                        <Avatar
                                                            className="ring-[1.5px] ring-bg-primary"
                                                            size="xs"
                                                            src="https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80"
                                                            alt="Phoenix Baker"
                                                        />
                                                        <Avatar
                                                            className="ring-[1.5px] ring-bg-primary"
                                                            size="xs"
                                                            src="https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80"
                                                            alt="Lana Steiner"
                                                        />
                                                        <Avatar
                                                            className="ring-[1.5px] ring-bg-primary"
                                                            size="xs"
                                                            src="https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80"
                                                            alt="Demi Wilkinson"
                                                        />
                                                        <Avatar
                                                            className="ring-[1.5px] ring-bg-primary"
                                                            size="xs"
                                                            src="https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80"
                                                            alt="Candice Wu"
                                                        />
                                                        <Avatar
                                                            size="xs"
                                                            className="ring-[1.5px] ring-bg-primary"
                                                            placeholder={<span className="text-xs font-semibold text-quaternary">+5</span>}
                                                        />
                                                    </div>
                                                </Table.Cell>

                                                <Table.Cell className="px-4">
                                                    <div className="flex justify-end gap-0.5">
                                                        <ButtonUtility size="xs" color="tertiary" tooltip="Download" icon={DownloadCloud02} />
                                                    </div>
                                                </Table.Cell>
                                            </Table.Row>
                                        )}
                                    </Table.Body>
                                </Table>
                            </TableCard.Root>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
