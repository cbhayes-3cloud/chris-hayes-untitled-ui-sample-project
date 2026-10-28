import { useMemo, useState } from "react";
import { Bell01, DownloadCloud02, Plus, Settings01, Zap } from "@untitledui/icons";
import type { SortDescriptor } from "react-aria-components";
import { NavButton } from "@/components/application/app-navigation/base-components/nav-button";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";
import { FilterBarSimpleDemo } from "@/components/application/filter-bar/filter-bar.demo";
import { PaginationCardDefault, PaginationPageDefault } from "@/components/application/pagination/pagination";
import { Table, TableCard } from "@/components/application/table/table";
import { Avatar } from "@/components/base/avatar/avatar";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
import { Button } from "@/components/base/buttons/button";
import { DropdownAvatar } from "@/components/base/dropdown/dropdown-avatar";

// Helper functions for formatting
const formatCurrency = (amount: number): string => amount.toLocaleString("en-US", { style: "currency", currency: "USD" });

const formatDate = (timestamp: number): string =>
    new Date(timestamp).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

const trades = [
    {
        id: "trade-001",
        label: "TSLA BUY",
        company: "Tesla, Inc.",
        amount: 30021.23,
        deliveryDate: new Date(2026, 0, 13).getTime(),
        status: "processing",
        author: {
            name: "Olivia Rhye",
            email: "olivia@untitledui.com",
            avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
            initials: "OR",
        },
    },
    {
        id: "trade-002",
        label: "MTCH SELL",
        company: "Match Group, Inc,",
        amount: 10045.0,
        deliveryDate: new Date(2026, 0, 13).getTime(),
        status: "success",
        author: {
            name: "Phoenix Baker",
            email: "phoenix@untitledui.com",
            avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
            initials: "PB",
        },
    },
    {
        id: "trade-003",
        label: "DDOG BUY",
        company: "Datadog Inc",
        amount: 40132.16,
        deliveryDate: new Date(2026, 0, 13).getTime(),
        status: "success",
        author: { name: "Lana Steiner", email: "lana@untitledui.com", avatarUrl: "", initials: "LS" },
    },
    {
        id: "trade-004",
        label: "ARKG BUY",
        company: "ARK Genomic Revolution ETF",
        amount: 22665.12,
        deliveryDate: new Date(2026, 0, 13).getTime(),
        status: "declined",
        author: { name: "Demi Wilkinson", email: "demi@untitledui.com", avatarUrl: "", initials: "DW" },
    },
    {
        id: "trade-005",
        label: "SQ BUY",
        company: "Square, Inc.",
        amount: 18221.3,
        deliveryDate: new Date(2026, 0, 12).getTime(),
        status: "success",
        author: {
            name: "Candice Wu",
            email: "candice@untitledui.com",
            avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80",
            initials: "CW",
        },
    },
    {
        id: "trade-006",
        label: "MSTR SELL",
        company: "MicroStrategy Inc.",
        amount: 24118.18,
        deliveryDate: new Date(2026, 0, 12).getTime(),
        status: "success",
        author: { name: "Natali Craig", email: "natali@untitledui.com", avatarUrl: "", initials: "NC" },
    },
];

export const Informational02 = () => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "deliveryDate",
        direction: "descending",
    });

    const sortedItems = useMemo(() => {
        if (!sortDescriptor) return trades;

        return [...trades].sort((a, b) => {
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
        <div className="flex flex-col">
            <HeaderNavigationBase
                activeUrl="/dashboard/trade-history"
                items={[
                    { label: "Home", href: "/" },
                    {
                        label: "Dashboard",
                        href: "/dashboard",
                        items: [
                            { label: "Overview", href: "/dashboard/overview" },
                            { label: "Notifications", href: "/dashboard/notifications" },
                            { label: "Trade history", href: "/dashboard/trade-history" },
                            { label: "Deposits", href: "/dashboard/deposits" },
                            { label: "Withdrawals", href: "/dashboard/withdrawals" },
                            { label: "Saved reports", href: "/dashboard/saved-reports" },
                        ],
                    },
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
            <main className="min-w-0 flex-1 bg-primary pt-8 pb-16 shadow-none lg:pt-12 lg:pb-24">
                <div className="mx-auto mb-8 flex max-w-container flex-col gap-5 px-4 lg:px-8">
                    {/* Page header simple */}
                    <div className="relative flex flex-col gap-5">
                        <div className="flex flex-col gap-4 lg:flex-row">
                            <div className="flex flex-1 flex-col gap-0.5">
                                <p className="text-xl font-semibold text-primary">Trade history</p>
                                <p className="text-md text-tertiary">View your team's trades and transactions.</p>
                            </div>
                            <div className="flex flex-col gap-4 lg:flex-row">
                                <div className="flex items-start gap-3">
                                    <Button iconLeading={DownloadCloud02} color="secondary" size="sm">
                                        Download CSV
                                    </Button>
                                    <Button iconLeading={Plus} size="sm">
                                        Add
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ButtonGroup defaultSelectedKeys={["all"]} selectionMode="single" size="sm">
                        <ButtonGroupItem id="all">All trades</ButtonGroupItem>
                        <ButtonGroupItem id="buy">Buy side</ButtonGroupItem>
                        <ButtonGroupItem id="sell">Sell side</ButtonGroupItem>
                    </ButtonGroup>
                </div>
                <div className="mx-auto flex max-w-container flex-col gap-6 px-4 lg:px-8">
                    <div className="hidden ring-1 ring-secondary ring-inset lg:block lg:rounded-xl lg:bg-secondary lg:px-4 lg:py-3">
                        <FilterBarSimpleDemo />
                    </div>
                    <TableCard.Root className="-mx-4 rounded-none lg:mx-0 lg:rounded-xl">
                        <Table
                            aria-label="Trades"
                            selectionMode="multiple"
                            sortDescriptor={sortDescriptor}
                            onSortChange={setSortDescriptor}
                            className="bg-primary"
                        >
                            <Table.Header className="bg-transparent">
                                <Table.Head id="trade" isRowHeader label="Trade" className="w-full" />
                                <Table.Head id="amount" label="Order amount" />
                                <Table.Head id="deliveryDate" label="Delivery date" allowsSorting />
                                <Table.Head id="status" label="Status" />
                                <Table.Head id="author" label="Executed by" />
                                <Table.Head id="actions" />
                            </Table.Header>
                            <Table.Body items={sortedItems}>
                                {(trade) => (
                                    <Table.Row id={trade.id}>
                                        <Table.Cell>
                                            <div>
                                                <p className="text-sm font-medium whitespace-nowrap text-primary">{trade.label}</p>
                                                <p className="text-sm whitespace-nowrap text-tertiary">{trade.company}</p>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell>{formatCurrency(trade.amount)}</Table.Cell>
                                        <Table.Cell>{formatDate(trade.deliveryDate)}</Table.Cell>
                                        <Table.Cell>
                                            <BadgeWithDot
                                                color={
                                                    trade.status === "success"
                                                        ? "success"
                                                        : trade.status === "processing"
                                                          ? "gray"
                                                          : trade.status === "declined"
                                                            ? "error"
                                                            : "gray"
                                                }
                                                size="sm"
                                                type="pill-color"
                                                className="capitalize"
                                            >
                                                {trade.status}
                                            </BadgeWithDot>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <div className="group flex items-center gap-3 outline-hidden">
                                                <Avatar src={trade.author.avatarUrl} alt={trade.author.name} size="sm" initials={trade.author.initials} />
                                                <div>
                                                    <p className="text-sm font-medium text-primary">{trade.author.name}</p>
                                                    <p className="text-sm text-tertiary">{trade.author.email}</p>
                                                </div>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Button size="sm" color="link-color">
                                                Edit
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>
                                )}
                            </Table.Body>
                        </Table>
                        <div className="max-lg:hidden">
                            <PaginationCardDefault page={1} total={10} />
                        </div>
                    </TableCard.Root>
                    <div className="lg:hidden">
                        <PaginationPageDefault page={1} total={10} />
                    </div>
                </div>
            </main>
        </div>
    );
};
