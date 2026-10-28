import { useMemo, useState } from "react";
import { Bell01, DownloadCloud02, LayersThree01, LayersTwo01, Settings01, Zap } from "@untitledui/icons";
import type { SortDescriptor } from "react-aria-components";
import { NavButton } from "@/components/application/app-navigation/base-components/nav-button";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { Table, TableCard } from "@/components/application/table/table";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import { DropdownAccountCardSM } from "@/components/base/dropdown/dropdown-account-card-sm";
import { RadioGroupIconCard } from "@/components/base/radio-groups/radio-group-icon-card";

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

const invoices = [
    {
        id: "invoice-01",
        invoice: "Basic Plan",
        billingPeriod: new Date(2026, 11, 1).getTime(),
        amount: 10.0,
        date: new Date(2026, 11, 1).getTime(),
        status: "Paid",
    },
    {
        id: "invoice-02",
        invoice: "Basic Plan",
        billingPeriod: new Date(2026, 10, 1).getTime(),
        amount: 10.0,
        date: new Date(2026, 10, 1).getTime(),
        status: "Paid",
    },
    {
        id: "invoice-03",
        invoice: "Basic Plan",
        billingPeriod: new Date(2026, 9, 1).getTime(),
        amount: 10.0,
        date: new Date(2026, 9, 1).getTime(),
        status: "Paid",
    },
    {
        id: "invoice-04",
        invoice: "Basic Plan",
        billingPeriod: new Date(2026, 8, 1).getTime(),
        amount: 10.0,
        date: new Date(2026, 8, 1).getTime(),
        status: "Paid",
    },
    {
        id: "invoice-05",
        invoice: "Basic Plan",
        billingPeriod: new Date(2026, 7, 1).getTime(),
        amount: 10.0,
        date: new Date(2026, 7, 1).getTime(),
        status: "Paid",
    },
    {
        id: "invoice-06",
        invoice: "Basic Plan",
        billingPeriod: new Date(2026, 6, 1).getTime(),
        amount: 10.0,
        date: new Date(2026, 6, 1).getTime(),
        status: "Paid",
    },
    {
        id: "invoice-07",
        invoice: "Basic Plan",
        billingPeriod: new Date(2026, 5, 1).getTime(),
        amount: 10.0,
        date: new Date(2026, 5, 1).getTime(),
        status: "Paid",
    },
];

const plans = [
    {
        value: "basic",
        title: "Basic plan",
        secondaryTitle: "per month",
        price: "$10",
        description: "Includes up to 10 users, 20 GB individual data and access to all features.",
        icon: LayersTwo01,
        badge: "Limited time only",
    },
    {
        value: "business",
        title: "Business plan",
        secondaryTitle: "per month",
        price: "$20",
        description: "Includes up to 20 users, 40 GB individual data and access to all features.",
        icon: LayersThree01,
    },
    {
        value: "enterprise",
        title: "Enterprise plan",
        secondaryTitle: "per month",
        price: "$40",
        description: "Unlimited users, unlimited individual data and access to all features.",
        icon: Zap,
    },
];

export const Settings11 = () => {
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
        <div className="bg-secondary">
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
                secondaryType="tabs"
                subItems={[
                    { label: "My details", href: "/settings/my-details" },
                    { label: "Profile", href: "/settings/profile" },
                    { label: "Password", href: "/settings/password" },
                    { label: "Team", href: "/settings/team" },
                    { label: "Plan", href: "/settings/plan" },
                    { label: "Billing", href: "/settings/billing" },
                    { label: "Email", href: "/settings/email" },
                    { label: "Notifications", href: "/settings/notifications" },
                    { label: "Integrations", href: "/settings/integrations" },
                    { label: "API", href: "/settings/api" },
                ]}
                actions={
                    <>
                        <div className="flex gap-0.5">
                            <NavButton icon={Settings01} label="Settings" href="/settings" tooltipPlacement="bottom" />
                            <div className="relative">
                                <NavButton icon={Bell01} label="Notifications" href="/notifications-01" tooltipPlacement="bottom" />
                                <div className="absolute -top-0.25 -right-0.25 flex size-3.5 items-center justify-center rounded-full bg-fg-error-primary text-[10px] font-bold text-white">
                                    2
                                </div>
                            </div>
                        </div>
                        <DropdownAccountCardSM />
                    </>
                }
            />

            <main className="bg-secondary pt-8 pb-12 lg:pt-12 lg:pb-24">
                <div className="flex flex-col gap-8">
                    <div className="mx-auto w-full max-w-container px-4 lg:px-8">
                        {/* Page header simple */}
                        <div className="relative flex flex-col gap-5">
                            <div className="flex flex-col gap-4 lg:flex-row">
                                <div className="flex flex-1 flex-col gap-0.5">
                                    <h1 className="text-xl font-semibold text-primary">Billing</h1>
                                    <p className="text-md text-tertiary">Manage your billing and payment details.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-container px-4 lg:px-8">
                        <RadioGroupIconCard aria-label="Plans" defaultValue="basic" items={plans} className="lg:max-w-160" />
                    </div>

                    <div className="mx-auto flex w-full max-w-container flex-col gap-6 px-4 lg:px-8">
                        <SectionHeader.Root className="border-none pb-0">
                            <SectionHeader.Group>
                                <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                                    <SectionHeader.Heading>Billing history</SectionHeader.Heading>
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
                                    <Table.Head id="actions" />
                                </Table.Header>
                                <Table.Body items={sortedItems}>
                                    {(invoice) => (
                                        <Table.Row id={invoice.id}>
                                            <Table.Cell className="font-semibold! text-nowrap">
                                                {formatInvoice(invoice.invoice, invoice.billingPeriod)}
                                            </Table.Cell>
                                            <Table.Cell className="text-nowrap">{formatCurrency(invoice.amount)}</Table.Cell>
                                            <Table.Cell className="text-nowrap">{formatDate(invoice.date)}</Table.Cell>
                                            <Table.Cell>
                                                <BadgeWithDot
                                                    color={invoice.status === "Paid" ? "success" : invoice.status === "Failed" ? "error" : "gray"}
                                                    type="modern"
                                                    size="sm"
                                                >
                                                    {invoice.status}
                                                </BadgeWithDot>
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
            </main>
        </div>
    );
};
