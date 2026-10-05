import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface SectionHeaderProps {
    title: ReactNode;
    description?: ReactNode;
    contentTrailing?: ReactNode;
    className?: string;
}

export const SectionHeader = ({ title, description, contentTrailing, className }: SectionHeaderProps) => {
    return (
        <header className={cx("flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between", className)}>
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <h2 className="text-md font-semibold text-primary">{title}</h2>
                {description && <p className="text-sm text-tertiary">{description}</p>}
            </div>
            {contentTrailing && <div className="w-full shrink-0 sm:w-auto">{contentTrailing}</div>}
        </header>
    );
};