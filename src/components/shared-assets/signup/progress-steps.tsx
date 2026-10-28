import type { FC, RefAttributes, SVGProps } from "react";
import { cx } from "@/utils/cx";

export type StepBaseProps = {
    title: string;
    step: number;
    description: string;
    connector?: boolean;
    status: "incomplete" | "current" | "complete";
    size?: "sm" | "md";
    icon?: FC<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
};

const statuses = {
    incomplete: {
        icon: "ring-[1.5px] text-primary_on-brand ring-inset ring-brand_alt",
        title: "text-primary_on-brand ",
        description: "text-tertiary_on-brand",
    },
    current: {
        icon: "bg-brand-solid  text-fg-white",
        title: "text-primary_on-brand ",
        description: "text-tertiary_on-brand",
    },
    complete: {
        icon: "bg-brand-solid text-fg-white",
        title: "text-primary_on-brand ",
        description: "text-tertiary_on-brand",
    },
};

export const IconLeftNumber = ({ status = "incomplete", connector = true, size = "sm", title, description, step }: StepBaseProps) => {
    return (
        <div className={cx("group flex h-max flex-row items-start justify-start gap-4", status === "incomplete" && "opacity-60", size === "sm" && "gap-3")}>
            <div className="flex flex-col items-center self-stretch">
                <span className={cx("z-10 flex shrink-0 items-center justify-center rounded-full", statuses[status].icon, size === "sm" ? "size-6" : "size-8")}>
                    {status === "complete" ? (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={cx(size === "sm" ? "size-3" : "size-4")}>
                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ) : (
                        <span className={cx("font-semibold", size === "sm" ? "text-xs" : "text-sm")}>{step}</span>
                    )}
                </span>

                {connector && (
                    <div className={cx("relative flex h-full w-full justify-center self-center overflow-hidden", size === "sm" ? "my-1" : "my-1.5")}>
                        <svg className="absolute" width="3">
                            <line
                                x1="1.2"
                                y1="1.2"
                                x2="1.2"
                                y2="100%"
                                className="stroke-border-brand_alt"
                                stroke="black"
                                strokeWidth="2.4"
                                strokeDasharray="0,6"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                )}
            </div>
            <div className={cx("flex flex-col items-start", size === "sm" ? "pt-0.5 not-group-last:pb-6" : "pt-1 not-group-last:pb-8")}>
                <p className={cx(statuses[status].title, size === "sm" ? "text-sm font-semibold" : "text-md font-semibold")}>{title}</p>
                <p className={cx(statuses[status].description, size === "sm" ? "text-sm" : "text-md")}>{description}</p>
            </div>
        </div>
    );
};

export type Item = { title: string; description: string; connector?: boolean; status: "incomplete" | "current" | "complete" };

export interface ProgressIconsCenteredProps {
    size?: "sm" | "md";
    connector?: boolean;
    items: Item[];
}

export const ProgressIconsWithText = ({ size = "sm", connector = true, items }: ProgressIconsCenteredProps) => {
    return (
        <div className="grid w-full grid-cols-1 items-start justify-start">
            {items.map((item, index) => {
                return (
                    <IconLeftNumber
                        key={index}
                        {...item}
                        step={index + 1}
                        size={size}
                        connector={!connector ? false : item.connector || index !== items.length - 1}
                    />
                );
            })}
        </div>
    );
};
