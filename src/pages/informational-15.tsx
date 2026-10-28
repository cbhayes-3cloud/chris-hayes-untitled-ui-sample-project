import { ArrowLeft, Check, Copy01, HomeLine, SearchLg } from "@untitledui/icons";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";
import { Breadcrumbs } from "@/components/application/breadcrumbs/breadcrumbs";
import { CodeSnippet } from "@/components/application/code-snippet/code-snippet";
import { PaginationCardMinimal } from "@/components/application/pagination/pagination";
import { Table, TableCard } from "@/components/application/table/table";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { useClipboard } from "@/hooks/use-clipboard";

// Helper functions for formatting
const formatDate = (timestamp: number): string =>
    new Date(timestamp).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

const codeDefault = `// Imports
import mongoose, { Schema } from 'untitled'

// Collection name
export const collection = 'Design'

// Schema
const schema = new Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String
  }
}, {timestamps: true})

// Model
export default untitled.model(collection,
schema, collection)`;

const tabs = [
    { id: "overview", label: "Overview" },
    { id: "visual_tagger", label: "Visual tagger" },
    { id: "debugger", label: "Debugger" },
    { id: "settings", label: "Settings" },
];

const tabs2 = [
    { id: "live", label: "Live" },
    { id: "pause", label: "Pause" },
];

const tabs3 = [
    { id: "pretty", label: "Pretty" },
    { id: "raw", label: "Raw" },
    { id: "violations", label: "Violations" },
];

const actions = [
    {
        id: "action-01",
        action: "Signup complete",
        status: "Track",
        date: new Date(2026, 0, 6).getTime(),
    },
    {
        id: "action-02",
        action: "Signup complete",
        status: "Track",
        date: new Date(2026, 0, 6).getTime(),
    },
    {
        id: "action-03",
        action: "Source deleted",
        status: "Track",
        date: new Date(2026, 0, 6).getTime(),
    },
    {
        id: "action-04",
        action: "Signup complete",
        status: "Track",
        date: new Date(2026, 0, 5).getTime(),
    },
    {
        id: "action-05",
        action: "Signup complete",
        status: "Track",
        date: new Date(2026, 0, 5).getTime(),
    },
    {
        id: "action-06",
        action: "Source deleted",
        status: "Track",
        date: new Date(2026, 0, 5).getTime(),
    },
    {
        id: "action-07",
        action: "Source deleted",
        status: "Track",
        date: new Date(2026, 0, 4).getTime(),
    },
];

export const Informational15 = () => {
    const { copy, copied } = useClipboard();

    return (
        <div className="flex flex-col bg-primary">
            <HeaderNavigationBase
                activeUrl="/messages"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Projects", href: "/projects" },
                    { label: "Tasks", href: "/tasks" },
                    { label: "Reporting", href: "/reporting" },
                    { label: "Messages", href: "/messages" },
                ]}
            />
            <main className="mx-auto flex w-full max-w-container flex-1 flex-col pt-8 pb-12 lg:pt-12 lg:pb-24">
                {/* Header section */}
                <div className="flex flex-col gap-5">
                    <div className="relative flex flex-col gap-4 px-4 lg:px-8">
                        <div className="max-lg:hidden">
                            <Breadcrumbs type="button">
                                <Breadcrumbs.Item href="#" icon={HomeLine} />
                                <Breadcrumbs.Item href="#">Dashboard</Breadcrumbs.Item>
                                <Breadcrumbs.Item href="#">Sources</Breadcrumbs.Item>
                            </Breadcrumbs>
                        </div>
                        <div className="flex lg:hidden">
                            <Button href="#" color="link-gray" size="md" iconLeading={ArrowLeft}>
                                Back
                            </Button>
                        </div>
                        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                            <p className="text-xl font-semibold text-primary">Sources</p>
                            <div className="flex flex-col gap-4 lg:flex-row">
                                <div className="flex items-start gap-3">
                                    <Button color="secondary" size="sm">
                                        Import
                                    </Button>
                                    <Button size="sm">Share</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-0 lg:px-8">
                        <Tabs orientation="horizontal" selectedKey="overview" className="w-max overflow-x-auto px-4 lg:px-0">
                            <TabList size="sm" type="button-minimal" items={tabs} className="inline-flex" />
                        </Tabs>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative flex flex-col gap-6 py-8 after:pointer-events-none after:absolute after:inset-0 after:border-r after:border-secondary lg:px-8">
                        <div className="flex flex-wrap items-center justify-between gap-4 px-4 lg:px-0">
                            <p className="text-md font-semibold text-primary">Sources</p>

                            {/* Desktop search input */}
                            <Input icon={SearchLg} shortcut aria-label="Search" placeholder="Search" size="sm" className="max-md:hidden lg:max-w-70" />

                            {/* Mobile search input */}
                            <Input icon={SearchLg} aria-label="Search" placeholder="Search" size="md" className="md:hidden" />
                        </div>
                        <Tabs orientation="horizontal" selectedKey="live" className="w-max px-4 lg:px-0">
                            <TabList size="sm" type="button-minimal" items={tabs2} className="inline-flex" />
                        </Tabs>
                        <TableCard.Root className="rounded-none shadow-none lg:rounded-xl lg:shadow-xs">
                            <Table selectionMode="single" selectedKeys={actions[1] ? [actions[1].id] : []} selectionBehavior="replace" aria-label="Actions">
                                <Table.Header>
                                    <Table.Head id="action" isRowHeader label="Action" className="w-full pl-4 md:px-5" />
                                    <Table.Head id="status" label="Status" className="md:px-5" />
                                    <Table.Head id="date" label="Date" className="pr-4 md:px-5" />
                                </Table.Header>
                                <Table.Body items={actions}>
                                    {(action) => (
                                        <Table.Row id={action.id}>
                                            <Table.Cell className="w-full pl-4 font-medium! whitespace-nowrap text-primary md:px-5">{action.action}</Table.Cell>
                                            <Table.Cell className="md:px-5">
                                                <BadgeWithDot size="sm" type="modern" color="success">
                                                    {action.status}
                                                </BadgeWithDot>
                                            </Table.Cell>
                                            <Table.Cell className="pr-4 whitespace-nowrap md:px-5">{formatDate(action.date)}</Table.Cell>
                                        </Table.Row>
                                    )}
                                </Table.Body>
                            </Table>
                            <PaginationCardMinimal page={1} total={10} align="right" />
                        </TableCard.Root>
                    </div>
                    <div className="flex flex-col gap-6 p-4 lg:p-8">
                        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
                            <p className="text-md font-semibold text-primary">Source deleted</p>
                            <Button size="sm" color="secondary">
                                View in Schema
                            </Button>
                        </div>
                        <Tabs orientation="horizontal" selectedKey="pretty" className="w-max">
                            <TabList size="sm" type="button-minimal" items={tabs3} className="inline-flex" />
                        </Tabs>
                        <CodeSnippet modern={false} code={codeDefault} language="ts" />
                        <div className="flex justify-end">
                            <Button size="sm" iconLeading={copied ? Check : Copy01} onClick={() => copy(codeDefault)} color="secondary">
                                Copy
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
