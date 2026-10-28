import type { FC, HTMLAttributes, ReactNode } from "react";
import { useState } from "react";
import { AlertCircle, Check, Copy01, Link03, MessageChatCircle } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import { AvatarAddButton } from "@/components/base/avatar/base-components";
import { Badge, BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { Input } from "@/components/base/input/input";
import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";
import { PlayIcon } from "@/components/base/video-player/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { GradientScan, QRCode } from "@/components/shared-assets/qr-code";
import { useClipboard } from "@/hooks/use-clipboard";
import { cx } from "@/utils/cx";

interface FeaturedCardCommonProps {
    /** Heading shown at the top of the card. */
    title: string;
    /** Supporting content shown below the heading. Usually a short line of body text, but any node is allowed, such as the step list and project list rendered by the onboarding and projects cards. */
    description: ReactNode;
    /** Label for the card's primary action button. */
    confirmLabel: string;
    /** Additional CSS class names to merge into the card's outer container. */
    className?: string;
    /** Handler called when the user dismisses the card, from the close button in the top right corner or from the card's dismiss action. */
    onDismiss: () => void;
    /** Handler called when the user presses the card's primary action button. */
    onConfirm: () => void;
}

export const FeaturedCardImage = ({
    title,
    description,
    confirmLabel,
    imageSrc,
    className,
    onDismiss,
    onConfirm,
}: FeaturedCardCommonProps & {
    /** Source URL for the thumbnail shown between the text and the actions, overlaid with a play icon. */
    imageSrc: string;
}) => {
    return (
        <div className={cx("relative flex flex-col rounded-xl bg-secondary p-4", className)}>
            <p className="text-sm font-semibold text-primary">{title}</p>
            <p className="mt-1 text-sm text-tertiary">{description}</p>

            <div className="absolute top-1 right-1">
                <CloseButton onClick={onDismiss} size="sm" />
            </div>

            <div className="relative mt-4 w-full">
                <img src={imageSrc} className="aspect-video w-full rounded-lg object-cover outline-1 -outline-offset-1 outline-black/10" alt={title} />
                <PlayIcon className="absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2 text-fg-white" />
            </div>

            <div className="mt-4 flex gap-3">
                <Button onClick={onDismiss} color="link-gray" size="sm">
                    Dismiss
                </Button>
                <Button onClick={onConfirm} color="link-color" size="sm">
                    {confirmLabel}
                </Button>
            </div>
        </div>
    );
};

export const FeaturedCardCookiePreferences = ({ title, description, confirmLabel, className, onDismiss, onConfirm }: FeaturedCardCommonProps) => {
    return (
        <div className={cx("relative flex flex-col rounded-xl bg-secondary p-4", className)}>
            <FeaturedIcon color="brand" icon={AlertCircle} theme="outline" size="md" />
            <div className="absolute top-1 right-1">
                <CloseButton onClick={onDismiss} size="sm" />
            </div>

            <div className="mt-3">
                <p className="text-sm font-semibold text-primary">{title}</p>
                <p className="mt-1 text-sm text-tertiary">{description}</p>
            </div>
            <div className="mt-4 flex gap-3">
                <Button onClick={onDismiss} color="link-gray" size="sm">
                    Reject all
                </Button>
                <Button onClick={onConfirm} color="link-color" size="sm">
                    {confirmLabel}
                </Button>
            </div>
        </div>
    );
};

export const FeaturedCardReferralLink = ({
    title,
    description,
    onDismiss,
    className,
}: Pick<FeaturedCardCommonProps, "title" | "description" | "onDismiss" | "className">) => {
    const { copy, copied } = useClipboard();
    const [value, setValue] = useState("uui.com/4060020");

    return (
        <div className={cx("relative flex flex-col rounded-xl bg-primary p-4 ring-1 ring-secondary ring-inset", className)}>
            <FeaturedIcon color="gray" icon={Link03} theme="modern" size="md" />
            <div className="absolute top-1 right-1">
                <CloseButton onClick={onDismiss} size="sm" />
            </div>

            <div className="mt-3">
                <p className="text-sm font-semibold text-primary">{title}</p>
                <p className="mt-1 text-sm text-tertiary">{description}</p>
            </div>
            <div className="mt-4 flex gap-1">
                <Input aria-label="Referral link" value={value} onChange={setValue} isReadOnly size="sm" />
                <Button iconLeading={copied ? Check : Copy01} onClick={() => copy(value)} size="sm" color="tertiary" />
            </div>
        </div>
    );
};

export const FeaturedCardOnboardingSteps = ({
    title,
    supportingText,
    progress,
    description,
    confirmLabel,
    onConfirm,
}: FeaturedCardCommonProps & {
    /** Muted text shown opposite the heading, typically the current step count such as "Step 3 of 4". */
    supportingText: string;
    /** Onboarding completion percentage, from 0 to 100, shown in the progress bar below the heading. */
    progress: number;
}) => {
    return (
        <div className="relative flex flex-col gap-4 rounded-xl bg-primary p-4 ring-1 ring-secondary ring-inset">
            <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                    <span className="text-sm font-semibold text-primary">{title}</span>
                    <span className="text-sm text-quaternary">{supportingText}</span>
                </div>

                <div className="flex">
                    <ProgressBar value={progress} />
                </div>
            </div>
            {description}
            <Button size="sm" color="secondary" onClick={onConfirm}>
                {confirmLabel}
            </Button>
        </div>
    );
};

export const FeaturedCardUpgradeCTA = ({
    icon,
    title,
    badge,
    description,
    confirmLabel,
    onConfirm,
    onDismiss,
}: FeaturedCardCommonProps & {
    /** Icon component rendered inside the featured icon above the heading. */
    icon: FC<HTMLAttributes<HTMLOrSVGElement>>;
    /** Text for the small badge shown beside the heading, such as a discount label. Omit it to hide the badge. */
    badge?: string;
}) => {
    return (
        <div className="relative flex flex-col gap-4 rounded-xl bg-primary p-4 ring-1 ring-secondary ring-inset">
            <div className="absolute top-1 right-1">
                <CloseButton size="sm" onClick={onDismiss} />
            </div>

            <div className="flex flex-col gap-3">
                <FeaturedIcon color="gray" icon={icon} theme="modern" size="md" />
                <div className="flex flex-col gap-1">
                    <p className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                        {title}
                        {badge && (
                            <Badge size="sm" type="modern" color="gray">
                                {badge}
                            </Badge>
                        )}
                    </p>
                    <p className="text-sm text-tertiary">{description}</p>
                </div>
            </div>
            <Button size="sm" color="primary" onClick={onConfirm}>
                {confirmLabel}
            </Button>
        </div>
    );
};

export const FeaturedCardSupportCTA = ({
    badge,
    title,
    description,
    confirmLabel,
    onConfirm,
    onDismiss,
}: FeaturedCardCommonProps & {
    /** Text for the status badge with a dot shown above the heading, such as the support team's availability. Omit it to hide the badge. */
    badge?: string;
}) => {
    return (
        <div className="relative flex flex-col gap-4 rounded-xl bg-primary p-4 ring-1 ring-secondary ring-inset">
            <div className="absolute top-1 right-1">
                <CloseButton size="sm" onClick={onDismiss} />
            </div>

            <div className="flex flex-col gap-3">
                {badge && (
                    <BadgeWithDot color="success" type="modern" size="sm">
                        {badge}
                    </BadgeWithDot>
                )}
                <div className="flex flex-col gap-1">
                    <p className="flex items-center gap-1.5 text-sm font-semibold text-primary">{title}</p>
                    <p className="text-sm text-tertiary">{description}</p>
                </div>
            </div>
            <Button iconLeading={MessageChatCircle} size="sm" color="secondary" onClick={onConfirm}>
                {confirmLabel}
            </Button>
        </div>
    );
};

export const FeaturedCardEventCTA = ({
    title,
    badge,
    description,
    confirmLabel,
    onConfirm,
    onDismiss,
}: FeaturedCardCommonProps & {
    /** Text for the status badge with a dot shown beside the heading, such as a live indicator for the event. Omit it to hide the badge. */
    badge?: string;
}) => {
    return (
        <div className="relative flex flex-col gap-4 rounded-xl bg-primary p-4 ring-1 ring-secondary ring-inset">
            <div className="absolute top-1 right-1">
                <CloseButton size="sm" onClick={onDismiss} />
            </div>

            <div className="flex gap-2">
                <div className="flex -space-x-1">
                    <Avatar
                        className="ring-[1.5px] ring-bg-primary"
                        size="xs"
                        src="https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80"
                        alt="Sienna Hewitt"
                    />
                    <Avatar
                        className="ring-[1.5px] ring-bg-primary"
                        size="xs"
                        src="https://www.untitledui.com/images/avatars/ammar-foley?fm=webp&q=80"
                        alt="Ammar Foley"
                    />
                    <Avatar
                        className="ring-[1.5px] ring-bg-primary"
                        size="xs"
                        src="https://www.untitledui.com/images/avatars/pippa-wilkinson?fm=webp&q=80"
                        alt="Pippa Wilkinson"
                    />
                    <Avatar
                        className="ring-[1.5px] ring-bg-primary"
                        size="xs"
                        src="https://www.untitledui.com/images/avatars/olly-schroeder?fm=webp&q=80"
                        alt="Olly Schroeder"
                    />

                    <Avatar
                        size="xs"
                        className="ring-[1.5px] ring-bg-primary"
                        placeholder={<span className="flex items-center justify-center text-xs font-semibold text-quaternary">+5</span>}
                    />
                </div>
                <AvatarAddButton size="xs" className="pointer-events-none" />
            </div>

            <div className="flex flex-col gap-1">
                <p className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {title}
                    {badge && (
                        <BadgeWithDot color="success" type="modern" size="sm">
                            {badge}
                        </BadgeWithDot>
                    )}
                </p>
                <p className="text-sm text-tertiary">{description}</p>
            </div>

            <div className="flex items-center gap-3">
                <Button color="link-gray" size="sm" onClick={onDismiss}>
                    Dismiss
                </Button>
                <Button color="link-color" size="sm" onClick={onConfirm}>
                    {confirmLabel}
                </Button>
            </div>
        </div>
    );
};

export const FeaturedCardMessage = ({
    title,
    supportingText,
    description,
    confirmLabel,
    onConfirm,
    onDismiss,
}: FeaturedCardCommonProps & {
    /** Muted text shown next to the sender's name, such as how long ago the message arrived. */
    supportingText: string;
}) => {
    return (
        <div className="relative flex flex-col gap-4 rounded-xl bg-primary p-4 ring-1 ring-secondary ring-inset">
            <div className="absolute top-1 right-1">
                <CloseButton size="sm" onClick={onDismiss} />
            </div>

            <div className="flex flex-col gap-3">
                <Avatar size="sm" src="https://www.untitledui.com/images/avatars/mathilde-lewis?fm=webp&q=80" alt="Mathilde Lewis" status="online" />

                <div className="flex flex-col gap-1">
                    <p className="flex items-center gap-2 text-sm font-semibold text-primary">
                        {title}
                        <span className="text-sm font-normal text-quaternary">{supportingText}</span>
                    </p>

                    <p className="text-sm text-tertiary">{description}</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <Button color="link-gray" size="sm" onClick={onDismiss}>
                    Dismiss
                </Button>
                <Button color="link-color" size="sm" onClick={onConfirm}>
                    {confirmLabel}
                </Button>
            </div>
        </div>
    );
};

export const FeaturedCardCurrentProjects = ({ title, description, confirmLabel, onConfirm, onDismiss }: FeaturedCardCommonProps) => {
    return (
        <div className="relative flex flex-col gap-4 rounded-xl bg-primary p-4 ring-1 ring-secondary ring-inset">
            <div className="absolute top-1 right-1">
                <CloseButton size="sm" onClick={onDismiss} />
            </div>

            <div className="flex flex-col gap-3">
                <p className="flex items-center gap-2 text-sm font-semibold text-primary">{title}</p>
                {description}
            </div>

            <div className="flex items-center gap-3">
                <Button color="link-color" size="xs" onClick={onConfirm}>
                    {confirmLabel}
                </Button>
            </div>
        </div>
    );
};

export const FeaturedCardFreeTrialCTA = ({
    title,
    supportingText,
    progress,
    confirmLabel,
    onConfirm,
}: Omit<FeaturedCardCommonProps, "description"> & {
    /** Muted text shown opposite the heading, typically how much of the trial is left. */
    supportingText: string;
    /** Trial progress percentage, from 0 to 100, shown in the progress bar below the heading. */
    progress: number;
}) => {
    return (
        <div className="relative flex flex-col gap-4 rounded-xl bg-primary p-4 ring-1 ring-secondary ring-inset">
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-1">
                    <span className="text-sm font-semibold text-primary">{title}</span>
                    <span className="text-sm text-quaternary">{supportingText}</span>
                </div>
                <div className="flex">
                    <ProgressBar value={progress} />
                </div>
            </div>

            <Button color="secondary" size="sm" onClick={onConfirm}>
                {confirmLabel}
            </Button>
        </div>
    );
};

export const FeaturedCardQRCode = ({ title, description, confirmLabel, onConfirm, onDismiss }: FeaturedCardCommonProps) => {
    return (
        <div className="relative flex flex-col gap-4 rounded-xl bg-primary p-4 ring-1 ring-secondary ring-inset">
            <div className="absolute top-1 right-1">
                <CloseButton size="sm" onClick={onDismiss} />
            </div>

            <div className="flex flex-col gap-1">
                <p className="truncate pr-6 text-sm font-semibold text-primary">{title}</p>
                <p className="text-sm text-tertiary">{description}</p>
            </div>
            <div className="relative flex w-full items-center justify-center">
                <QRCode value="https://www.untitledui.com/" size="md" />
                <GradientScan />
            </div>
            <Button color="secondary" size="sm" onClick={onConfirm}>
                {confirmLabel}
            </Button>
        </div>
    );
};
