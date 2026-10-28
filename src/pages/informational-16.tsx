import { parseDate } from "@internationalized/date";
import { Award02, CurrencyDollar, FilterLines, Heart, Home02, List, MarkerPin02, SearchLg, Star01, Wifi } from "@untitledui/icons";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";
import { DateRangePicker } from "@/components/application/date-picker/date-range-picker";
import { renderFilterRow, useFilterState } from "@/components/application/filter-bar/filter-bar.demo";
import { CountBadge, FilterDropdown } from "@/components/application/filter-bar/filter-dropdown-menu";
import { PaginationPageDefault } from "@/components/application/pagination/pagination";
import { BadgeWithIcon } from "@/components/base/badges/badges";
import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { Select } from "@/components/base/select/select";
import { RatingStars } from "@/components/foundations/rating-stars";
import { cx } from "@/utils/cx";

interface Listing {
    id: string;
    title: string;
    imageSrc: string;
    description: string;
    rating: number;
    reviewsCount: number;
    location: string;
    price: string;
    rare?: boolean;
}

const ListingListItem = (props: Listing) => {
    return (
        <div className="flex flex-col overflow-hidden rounded-2xl bg-primary shadow-xs ring-1 ring-secondary ring-inset xl:flex-row xl:gap-5 xl:p-4">
            <div className="relative h-44 w-full overflow-hidden xl:h-36 xl:w-50 xl:rounded-lg">
                <img
                    src={props.imageSrc}
                    alt={props.title}
                    className="h-full w-full object-cover outline-1 -outline-offset-1 outline-secondary_alt max-xl:rounded-t-2xl"
                />
                {props.rare && (
                    <BadgeWithIcon iconLeading={Award02} size="sm" color="brand" type="pill-color" className="absolute bottom-2 left-2">
                        Rare find
                    </BadgeWithIcon>
                )}
                <Button iconLeading={Heart} size="xs" color="secondary" className="absolute right-2 bottom-2 block lg:hidden" />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-5 xl:p-0 xl:pt-0">
                <div className="flex items-end gap-2 xl:hidden">
                    <span className="text-xl font-semibold text-primary">{props.price}</span>
                    <span className="pb-0.5 text-md text-tertiary">AUD total</span>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <a href="#" className="text-sm font-semibold text-brand-secondary">
                            {props.title}
                        </a>
                        <p className="text-lg font-semibold text-primary">{props.description}</p>
                    </div>
                    <Button size="xs" color="secondary" iconLeading={Heart} className="hidden xl:inline-flex" />
                </div>
                <div className="flex items-center gap-2">
                    <RatingStars rating={props.rating} className="gap-1" />
                    <div className="flex items-center gap-2">
                        <span className="text-md font-medium text-primary">{props.rating}</span>
                        <span className="text-md text-tertiary">{props.reviewsCount} reviews</span>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <MarkerPin02 size={20} className="text-fg-quaternary" />
                            <span className="text-md font-medium text-tertiary">{props.location}</span>
                        </div>
                        <div className="hidden items-center gap-2 xl:flex">
                            <Home02 size={20} className="text-fg-quaternary" />
                            <span className="text-md font-medium text-tertiary">1 bed</span>
                        </div>
                        <div className="hidden items-center gap-2 xl:flex">
                            <Wifi size={20} className="text-fg-quaternary" />
                            <span className="text-md font-medium text-tertiary">Wi-Fi</span>
                        </div>
                    </div>
                    <div className="hidden items-end gap-2 xl:flex">
                        <span className="text-xl font-semibold text-primary">{props.price}</span>
                        <span className="text-md text-tertiary">AUD total</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const listings: Listing[] = [
    {
        id: "listing-001",
        title: "Entire apartment rental in Collingwood",
        description: "A Stylish Apt, 5 min walk to Queen Victoria Market",
        imageSrc: "https://www.untitledui.com/application/listing-01.webp",
        rating: 4.9,
        reviewsCount: 202,
        location: "Collingwood VIC",
        price: "$540",
        rare: true,
    },
    {
        id: "listing-002",
        title: "Entire loft in central business district",
        description: "Designer NY style loft",
        imageSrc: "https://www.untitledui.com/application/listing-02.webp",
        rating: 4.8,
        reviewsCount: 44,
        location: "Melbourne VIC",
        price: "$620",
    },
    {
        id: "listing-003",
        title: "Entire rental unit in Carlton",
        description: "5 minute walk from University of Melbourne",
        imageSrc: "https://www.untitledui.com/application/listing-03.webp",
        rating: 4.7,
        reviewsCount: 82,
        location: "Carlton VIC",
        price: "$490",
    },
    {
        id: "listing-004",
        title: "Entire apartment rental in Collingwood",
        description: "Magnificent apartment next to public transport",
        imageSrc: "https://www.untitledui.com/application/listing-04.webp",
        rating: 4.8,
        reviewsCount: 12,
        location: "Collingwood VIC",
        price: "$600",
    },
];

const cities = [
    {
        id: "melbourne",
        label: "Melbourne, AU",
        icon: () => <img src="https://www.untitledui.com/images/flags/AU.svg" alt="Australian flag" className="size-5" />,
    },
    {
        id: "canberra",
        label: "Canberra, AU",
        icon: () => <img src="https://www.untitledui.com/images/flags/AU.svg" alt="Australian flag" className="size-5" />,
    },
    {
        id: "brisbane",
        label: "Brisbane, AU",
        icon: () => <img src="https://www.untitledui.com/images/flags/AU.svg" alt="Australian flag" className="size-5" />,
    },
    {
        id: "sydney",
        label: "Sydney, AU",
        icon: () => <img src="https://www.untitledui.com/images/flags/AU.svg" alt="Australian flag" className="size-5" />,
    },
];

const prices = [
    {
        id: "100",
        label: "< $100",
        icon: CurrencyDollar,
    },
    {
        id: "200",
        label: "< $250",
        icon: CurrencyDollar,
    },
    {
        id: "300",
        label: "< $500",
        icon: CurrencyDollar,
    },
    {
        id: "400",
        label: "< $1000",
        icon: CurrencyDollar,
    },
];

export const Informational16 = () => {
    const filterState = useFilterState();

    return (
        <div className="flex flex-col bg-primary">
            <HeaderNavigationBase
                activeUrl="/bookings"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Projects", href: "/projects" },
                    { label: "Tasks", href: "/tasks" },
                    { label: "Reporting", href: "/reporting" },
                    { label: "Bookings", href: "/bookings" },
                ]}
            />
            <main className="mx-auto flex w-full max-w-container flex-1 flex-col gap-y-8">
                <div className="relative flex flex-1 flex-col gap-y-8 pt-8 pb-12 lg:pt-12 lg:pb-24">
                    {/* Page header simple */}
                    <div className="px-4 lg:px-8">
                        <div className="flex flex-col gap-4 border-b border-secondary pb-4 lg:flex-row">
                            <div className="flex flex-1 flex-col gap-0.5">
                                <p className="text-xl font-semibold text-primary">232 stays in Melbourne</p>
                                <p className="text-md text-tertiary">Book your next stay at one of our properties.</p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <Button color="secondary" size="sm">
                                    Share
                                </Button>
                                <Button iconLeading={Star01} size="sm">
                                    Save search
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 px-4 lg:gap-6 lg:px-8">
                        <div className="flex flex-col gap-y-3 lg:gap-y-4">
                            <div className="flex flex-wrap justify-between gap-3">
                                <div className="hidden gap-3 lg:flex">
                                    <Select aria-label="Cities" size="sm" items={cities} defaultValue={cities[0]?.id} className="w-50">
                                        {(item) => (
                                            <Select.Item id={item.id} icon={item.icon}>
                                                {item.label}
                                            </Select.Item>
                                        )}
                                    </Select>
                                    <DateRangePicker
                                        aria-label="Dates"
                                        size="sm"
                                        defaultValue={{
                                            start: parseDate("2027-01-10"),
                                            end: parseDate("2027-01-16"),
                                        }}
                                    />
                                    <Select
                                        aria-label="Prices"
                                        size="sm"
                                        items={prices}
                                        defaultValue={prices[0]?.id}
                                        icon={CurrencyDollar}
                                        placeholder="Any price"
                                        className="w-42.5"
                                    >
                                        {(item) => (
                                            <Select.Item id={item.id} icon={item.icon}>
                                                {item.label}
                                            </Select.Item>
                                        )}
                                    </Select>
                                </div>
                                <FilterDropdown {...filterState} renderFilterRow={renderFilterRow}>
                                    <Button
                                        aria-label="Filters"
                                        color="secondary"
                                        size="sm"
                                        iconLeading={FilterLines}
                                        className={cx("max-h-9 w-full lg:w-auto", filterState.appliedCount > 0 && "bg-primary_hover")}
                                    >
                                        <span className="flex items-center gap-1.5">
                                            <span className="hidden lg:inline">More filters</span>
                                            <span className="inline lg:hidden">2 filters applied</span>
                                            {filterState.appliedCount > 0 && <CountBadge count={filterState.appliedCount} className="max-md:hidden" />}
                                        </span>
                                    </Button>
                                </FilterDropdown>
                            </div>
                            <div className="order-first flex gap-3 lg:order-0">
                                <Input icon={SearchLg} shortcut aria-label="Search" placeholder="Search" size="sm" />
                                <Button size="sm" color="secondary" className="hidden lg:inline-flex">
                                    Clear
                                </Button>
                                <Button size="sm" className="hidden lg:inline-flex">
                                    Search
                                </Button>
                            </div>
                        </div>

                        <div className="order-first h-90 w-full lg:order-0">
                            <iframe
                                title="Our address"
                                src="https://snazzymaps.com/embed/451871"
                                className="h-full w-full rounded-lg border-none ring-1 ring-secondary"
                                data-chromatic="ignore"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 px-4 lg:px-8">
                        <div className="flex justify-between">
                            <ButtonGroup defaultSelectedKeys={["date"]} selectionMode="single" size="sm">
                                <ButtonGroupItem id="date">Sort by date</ButtonGroupItem>
                                <ButtonGroupItem id="price">Sort by price</ButtonGroupItem>
                            </ButtonGroup>
                            <ButtonGroup defaultSelectedKeys={["list"]} selectionMode="single" size="sm">
                                <ButtonGroupItem id="list" aria-label="List view" iconLeading={List} />
                                <ButtonGroupItem id="map" aria-label="Map view" iconLeading={MarkerPin02} />
                            </ButtonGroup>
                        </div>
                        <div className="flex flex-col gap-4">
                            {listings.map((listing) => (
                                <ListingListItem key={listing.id} {...listing} />
                            ))}
                        </div>
                        <PaginationPageDefault rounded page={1} total={10} />
                    </div>
                </div>
            </main>
        </div>
    );
};
