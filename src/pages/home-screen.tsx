import { useState } from "react";
import { Bell01, ChartBreakoutSquare, Copy01, Download01, Eye, FilterLines, SearchLg, Settings01, X as CloseX } from "@untitledui/icons";
import type { DateValue, RangeValue, Selection } from "react-aria-components";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";
import { DateRangePicker } from "@/components/application/date-picker/date-range-picker";
import { Dialog, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { PaginationCardMinimal } from "@/components/application/pagination/pagination";
import { SectionHeader } from "@/components/application/section-headers/section-header";
import { Table, TableCard, TableRowActionsDropdown } from "@/components/application/table/table";
import { NavButton } from "@/components/application/app-navigation/base-components/nav-button";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { Badge, BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { DropdownAvatar } from "@/components/base/dropdown/dropdown-avatar";
import { Input } from "@/components/base/input/input";
import { useClipboard } from "@/hooks/use-clipboard";

const tradeStatuses = ["Executed", "Pending", "Cancelled", "Failed"] as const;

const tradeSamples = [
    { ticker: "NVDA", company: "NVIDIA Corporation", amount: "$24,680.00", status: "Executed", statusColor: "success", name: "Olivia Rhye", avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80", desk: "Equities" },
    { ticker: "MSFT", company: "Microsoft Corporation", amount: "$8,240.00", status: "Executed", statusColor: "success", name: "Phoenix Baker", avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80", desk: "Equities" },
    { ticker: "AAPL", company: "Apple Inc.", amount: "$15,120.00", status: "Pending", statusColor: "warning", name: "Lana Steiner", avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80", desk: "Technology" },
    { ticker: "AMZN", company: "Amazon.com, Inc.", amount: "$6,730.00", status: "Cancelled", statusColor: "gray", name: "Demi Wilkinson", avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80", desk: "Equities" },
    { ticker: "TSLA", company: "Tesla, Inc.", amount: "$12,400.00", status: "Executed", statusColor: "success", name: "Caitlyn King", avatarUrl: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80", desk: "Growth" },
    { ticker: "GOOGL", company: "Alphabet Inc.", amount: "$9,880.00", status: "Failed", statusColor: "error", name: "Sienna Hewitt", avatarUrl: "https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80", desk: "Technology" },
    { ticker: "META", company: "Meta Platforms, Inc.", amount: "$11,540.00", status: "Executed", statusColor: "success", name: "Olivia Rhye", avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80", desk: "Technology" },
    { ticker: "JPM", company: "JPMorgan Chase & Co.", amount: "$7,920.00", status: "Pending", statusColor: "warning", name: "Phoenix Baker", avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80", desk: "Financials" },
    { ticker: "COST", company: "Costco Wholesale Corporation", amount: "$18,360.00", status: "Executed", statusColor: "success", name: "Lana Steiner", avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80", desk: "Consumer" },
    { ticker: "AMD", company: "Advanced Micro Devices, Inc.", amount: "$10,250.00", status: "Cancelled", statusColor: "gray", name: "Demi Wilkinson", avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80", desk: "Technology" },
] as const;

const tradeDates = [
    { date: "Oct 7, 2026", dateISO: "2026-10-07" },
    { date: "Oct 6, 2026", dateISO: "2026-10-06" },
    { date: "Oct 5, 2026", dateISO: "2026-10-05" },
    { date: "Oct 4, 2026", dateISO: "2026-10-04" },
    { date: "Oct 3, 2026", dateISO: "2026-10-03" },
] as const;

const trades = tradeDates.flatMap((tradeDate, dateIndex) =>
    tradeSamples.map((trade, tradeIndex) => ({
        ...trade,
        id: `trade-${dateIndex * tradeSamples.length + tradeIndex + 1}`,
        ...tradeDate,
        type: (dateIndex + tradeIndex) % 2 === 0 ? "Buy" : "Sell",
    })),
);

const executedTradeCount = trades.filter((trade) => trade.status === "Executed").length;
const executionRate = Math.round((executedTradeCount / trades.length) * 100);
const performanceMetrics = [
    {
        id: "balance",
        title: "Available Balance",
        note: "Illustrative account balance for this demo.",
        parts: [{ label: "Available", value: "$284,650.00", change: "+3.2%", valueColor: "text-primary", badgeColor: "brand" }],
    },
    {
        id: "gain-loss",
        title: "Total Gain & Loss",
        note: "Illustrative gain and loss totals, not calculated from the sample order amounts.",
        parts: [
            { label: "Total gain", value: "+$128,430.00", change: "+12.8%", valueColor: "text-success-primary", badgeColor: "success" },
            { label: "Total loss", value: "-$24,715.00", change: "-4.6%", valueColor: "text-error-primary", badgeColor: "error" },
        ],
    },
    {
        id: "executed-trades",
        title: "Executed Trades",
        note: "Calculated from the status of the 50 sample trades.",
        parts: [
            {
                label: "Completed",
                value: `${executedTradeCount} of ${trades.length}`,
                change: `${executionRate}%`,
                valueColor: "text-primary",
                badgeColor: "success",
            },
        ],
    },
] as const;

export const HomeScreen = () => {
    const { copy } = useClipboard();
    const [activeMetric, setActiveMetric] = useState<(typeof performanceMetrics)[number] | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDates, setSelectedDates] = useState<RangeValue<DateValue> | null>(null);
    const [selectedStatuses, setSelectedStatuses] = useState<Selection>(new Set());
    const [selectedTrades, setSelectedTrades] = useState<Selection>(new Set());
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const selectedStatusCount = selectedStatuses === "all" ? tradeStatuses.length : selectedStatuses.size;
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const filteredTrades = trades.filter((trade) => {
        const matchesSearch = [trade.ticker, trade.company, trade.name].some((value) => value.toLowerCase().includes(normalizedSearch));
        const matchesStatus = selectedStatuses === "all" || selectedStatusCount === 0 || selectedStatuses.has(trade.status);
        const matchesDateRange =
            !selectedDates || (trade.dateISO >= selectedDates.start.toString() && trade.dateISO <= selectedDates.end.toString());

        return matchesSearch && matchesStatus && matchesDateRange;
    });
    const totalPages = Math.max(1, Math.ceil(filteredTrades.length / pageSize));
    const page = Math.min(currentPage, totalPages);
    const visibleTrades = filteredTrades.slice((page - 1) * pageSize, page * pageSize);
    const selectedTradeCount = selectedTrades === "all" ? visibleTrades.length : selectedTrades.size;
    const selectedTradeRows = selectedTrades === "all" ? visibleTrades : trades.filter((trade) => selectedTrades.has(trade.id));

    const handleTradeSelectionChange = (selection: Selection) => {
        setSelectedTrades(selection === "all" ? new Set(visibleTrades.map((trade) => trade.id)) : selection);
    };

    const downloadSelectedTrades = () => {
        const csvRows = [
            ["Ticker", "Company", "Order amount", "Type", "Date", "Status", "Executed by"],
            ...selectedTradeRows.map((trade) => [trade.ticker, trade.company, trade.amount, trade.type, trade.date, trade.status, trade.name]),
        ];
        const csvContent = csvRows.map((row) => row.map((value) => `"${value.replaceAll('"', '""')}"`).join(",")).join("\n");
        const downloadUrl = URL.createObjectURL(new Blob([csvContent], { type: "text/csv" }));
        const downloadLink = document.createElement("a");

        downloadLink.href = downloadUrl;
        downloadLink.download = "selected-trades.csv";
        downloadLink.click();
        URL.revokeObjectURL(downloadUrl);
    };

    return (
        <>
            <HeaderNavigationBase
                activeUrl="/"
                items={[]}
                logo={
                    <div className="flex items-center gap-2 text-md font-semibold text-primary">
                        <ChartBreakoutSquare aria-hidden="true" className="size-6 text-brand-secondary" />
                        <span>Financial Palooza</span>
                    </div>
                }
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
                        title="Trade history"
                        description="View your team's tradees and transactions."
                    />
                </section>
                <section aria-label="Trade performance" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {performanceMetrics.map((metric) => (
                        <div key={metric.id} className="rounded-lg bg-secondary p-5">
                            <div className="flex items-start justify-between gap-4">
                                <h2 className="text-sm font-semibold text-secondary">{metric.title}</h2>
                                <Dropdown.Root>
                                    <Dropdown.DotsButton aria-label={`${metric.title} actions`} />
                                    <Dropdown.Popover className="w-48">
                                        <Dropdown.Menu aria-label={`${metric.title} actions`}>
                                            <Dropdown.Item id={`details-${metric.id}`} icon={Eye} onAction={() => setActiveMetric(metric)}>
                                                View Details
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                id={`copy-${metric.id}`}
                                                icon={Copy01}
                                                onAction={() => copy(metric.parts.map((part) => `${part.label}: ${part.value}`).join("\n"))}
                                            >
                                                Copy summary
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown.Popover>
                                </Dropdown.Root>
                            </div>
                            <dl className="mt-4 flex flex-col gap-3">
                                {metric.parts.map((part) => (
                                    <div key={part.label} className="flex items-center justify-between gap-3">
                                        <dt className="text-sm text-secondary">{part.label}</dt>
                                        <dd className="flex items-center gap-2">
                                            <span className={`text-md font-semibold ${part.valueColor}`}>{part.value}</span>
                                            <Badge color={part.badgeColor} size="sm" type="pill-color">
                                                {part.change}
                                            </Badge>
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    ))}
                </section>
                <TableCard.Root size="sm" className="mt-8">
                    <TableCard.Header
                        title="All trades"
                        badge={
                            <Badge color="gray" size="sm" type="modern">
                                {filteredTrades.length}
                            </Badge>
                        }
                        contentTrailing={
                            <div className="flex items-center gap-2">
                                {selectedTradeCount > 0 && (
                                    <span aria-live="polite" className="text-sm text-secondary">
                                        {selectedTradeCount} selected
                                    </span>
                                )}
                                <Dropdown.Root>
                                    <Dropdown.DotsButton aria-label="Group trade actions" isDisabled={selectedTradeCount === 0} />
                                    <Dropdown.Popover className="w-56">
                                        <Dropdown.Menu>
                                            <Dropdown.Item id="download-selected" icon={Download01} onAction={downloadSelectedTrades}>
                                                Download selected
                                            </Dropdown.Item>
                                            <Dropdown.Item id="clear-selection" onAction={() => setSelectedTrades(new Set())}>
                                                Clear selection
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown.Popover>
                                </Dropdown.Root>
                            </div>
                        }
                    />
                    <div className="flex flex-col gap-3 border-b border-secondary px-4 py-4 md:flex-row md:items-center md:justify-between md:px-5">
                        <Input
                            size="sm"
                            aria-label="Search trades"
                            placeholder="Search"
                            icon={SearchLg}
                            value={searchTerm}
                            onChange={(value) => {
                                setSearchTerm(value);
                                setCurrentPage(1);
                                setSelectedTrades(new Set());
                            }}
                            className="w-full md:max-w-70"
                        />
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <DateRangePicker
                                value={selectedDates}
                                onChange={(value) => {
                                    setSelectedDates(value);
                                    setCurrentPage(1);
                                    setSelectedTrades(new Set());
                                }}
                            />
                            <Dropdown.Root>
                                <Button size="sm" color="secondary" iconLeading={FilterLines}>
                                    Filters
                                    {selectedStatusCount > 0 && (
                                        <Badge color="gray" size="sm" type="modern">
                                            {selectedStatusCount}
                                        </Badge>
                                    )}
                                </Button>
                                <Dropdown.Popover>
                                    <Dropdown.Menu
                                        aria-label="Filter trades by status"
                                        selectionMode="multiple"
                                        selectedKeys={selectedStatuses}
                                        onSelectionChange={(selection) => {
                                            setSelectedStatuses(selection);
                                            setCurrentPage(1);
                                            setSelectedTrades(new Set());
                                        }}
                                    >
                                        {tradeStatuses.map((status) => (
                                            <Dropdown.Item key={status} id={status}>
                                                {status}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown.Popover>
                            </Dropdown.Root>
                        </div>
                    </div>
                    <Table
                        aria-label="All trades"
                        selectionBehavior="toggle"
                        selectionMode="multiple"
                        selectedKeys={selectedTrades}
                        onSelectionChange={handleTradeSelectionChange}
                    >
                        <Table.Header>
                            <Table.Head id="stock" label="Stock" />
                            <Table.Head id="amount" label="Order amount" />
                            <Table.Head id="type" label="Type of trade" />
                            <Table.Head id="date" label="Date" />
                            <Table.Head id="status" label="Status" />
                            <Table.Head id="executed-by" label="Executed by" />
                            <Table.Head id="actions" label="Actions" />
                        </Table.Header>
                        <Table.Body>
                            {visibleTrades.map((trade) => (
                                <Table.Row key={trade.id} id={trade.id}>
                                    <Table.Cell>
                                        <div className="flex min-w-32 flex-col gap-0.5">
                                            <span className="font-semibold text-primary">{trade.ticker}</span>
                                            <span className="text-xs text-tertiary">{trade.company}</span>
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <span className="font-medium text-primary">{trade.amount}</span>
                                    </Table.Cell>
                                    <Table.Cell>{trade.type}</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap">{trade.date}</Table.Cell>
                                    <Table.Cell>
                                        <BadgeWithDot color={trade.statusColor} size="sm" type="pill-color">
                                            {trade.status}
                                        </BadgeWithDot>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <AvatarLabelGroup
                                            size="sm"
                                            src={trade.avatarUrl}
                                            title={trade.name}
                                            subtitle={trade.desk}
                                            alt={trade.name}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className="flex items-center gap-1">
                                            <ButtonUtility
                                                size="xs"
                                                color="tertiary"
                                                tooltip="Download trade details"
                                                icon={Download01}
                                            />
                                            <TableRowActionsDropdown />
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                    {filteredTrades.length === 0 && (
                        <div role="status" className="border-t border-secondary px-5 py-8 text-center text-sm text-tertiary">
                            No trades match your search or filters.
                        </div>
                    )}
                    {filteredTrades.length > 0 && (
                        <PaginationCardMinimal
                            page={page}
                            total={totalPages}
                            pageSize={pageSize}
                            align="right"
                            onPageChange={setCurrentPage}
                            onPageSizeChange={(value) => {
                                setPageSize(value);
                                setCurrentPage(1);
                                setSelectedTrades(new Set());
                            }}
                        />
                    )}
                </TableCard.Root>
            </main>
            <footer className="mt-8 border-t border-secondary bg-primary">
                <div className="mx-auto flex w-full max-w-container flex-col gap-3 px-4 py-5 text-sm text-tertiary md:flex-row md:items-center md:justify-between md:px-8">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <span className="font-semibold text-secondary">Demo account</span>
                        <span>Currency: USD</span>
                        <span>Data as of Oct 7, 2026</span>
                    </div>
                    <p className="text-xs text-tertiary">Market data is simulated. Trading involves risk; figures are for demonstration only.</p>
                </div>
            </footer>
            {activeMetric && (
                <ModalOverlay isOpen onOpenChange={(isOpen) => !isOpen && setActiveMetric(null)} isDismissable>
                    <Modal className="max-w-lg">
                        <Dialog aria-label={`${activeMetric.title} details`}>
                            <div className="flex items-start justify-between border-b border-secondary p-6">
                                <div>
                                    <h2 className="text-lg font-semibold text-primary">{activeMetric.title} details</h2>
                                    <p className="mt-1 text-sm text-tertiary">Performance summary</p>
                                </div>
                                <ButtonUtility
                                    size="sm"
                                    color="tertiary"
                                    tooltip="Close details"
                                    icon={CloseX}
                                    onPress={() => setActiveMetric(null)}
                                />
                            </div>
                            <dl className="divide-y divide-secondary px-6">
                                {activeMetric.parts.map((part) => (
                                    <div key={part.label} className="flex items-center justify-between gap-4 py-4">
                                        <dt className="text-sm font-medium text-secondary">{part.label}</dt>
                                        <dd className="flex items-center gap-2">
                                            <span className={`text-md font-semibold ${part.valueColor}`}>{part.value}</span>
                                            <Badge color={part.badgeColor} size="sm" type="pill-color">
                                                {part.change}
                                            </Badge>
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                            <p className="px-6 pb-6 text-sm text-tertiary">{activeMetric.note}</p>
                        </Dialog>
                    </Modal>
                </ModalOverlay>
            )}
        </>
    );
};
