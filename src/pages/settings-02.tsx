import { useState } from "react";
import { Bell01, Mail01, Settings01 } from "@untitledui/icons";
import { NavButton } from "@/components/application/app-navigation/base-components/nav-button";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";
import { FileUpload } from "@/components/application/file-upload/file-upload-base";
import { SectionFooter } from "@/components/application/section-footers/section-footer";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { Avatar } from "@/components/base/avatar/avatar";
import { Button } from "@/components/base/buttons/button";
import { DropdownAccountCardSM } from "@/components/base/dropdown/dropdown-account-card-sm";
import { DropdownIconSimple } from "@/components/base/dropdown/dropdown-icon-simple";
import { Form } from "@/components/base/form/form";
import { Input, InputBase } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { Select } from "@/components/base/select/select";
import { TextArea } from "@/components/base/textarea/textarea";
import { Toggle } from "@/components/base/toggle/toggle";
import { countriesOptions } from "@/utils/countries";
import { timezonesOptions } from "@/utils/timezones";

export const Settings02 = () => {
    const [uploadedAvatar, setUploadedAvatar] = useState<string | undefined>("https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80");

    const handleAvatarUpload = (file: File | undefined) => {
        if (!file) return;

        console.log("File uploaded:", file);
        setUploadedAvatar(URL.createObjectURL(file));
    };

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

            <main className="bg-secondary pt-8 pb-16 lg:pt-12 lg:pb-24">
                <div className="flex flex-col gap-8">
                    <div className="mx-auto w-full max-w-container px-4 lg:px-8">
                        <div className="mx-auto flex w-full max-w-160 flex-col gap-6">
                            <SectionHeader.Root className="border-none pb-0">
                                <SectionHeader.Group>
                                    <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5 self-stretch">
                                        <SectionHeader.Heading>Personal info</SectionHeader.Heading>
                                        <SectionHeader.Subheading>Update your photo and personal details here.</SectionHeader.Subheading>
                                    </div>
                                    <div className="absolute top-0 right-0 md:static">
                                        <DropdownIconSimple />
                                    </div>
                                </SectionHeader.Group>
                            </SectionHeader.Root>

                            <Form
                                className="rounded-xl bg-primary shadow-xs ring-1 ring-secondary ring-inset"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const data = Object.fromEntries(new FormData(e.currentTarget));
                                    console.log("Form data:", data);
                                }}
                            >
                                <div className="flex flex-col gap-6 px-4 py-5 lg:px-6 lg:py-6">
                                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                        <Input isRequired label="First name" name="firstName" defaultValue="Olivia" size="md" />
                                        <Input isRequired label="Last name" name="lastName" defaultValue="Rhye" size="md" />
                                    </div>

                                    <Input
                                        isRequired
                                        label="Email address"
                                        name="email"
                                        type="email"
                                        defaultValue="olivia@untitledui.com"
                                        size="md"
                                        icon={Mail01}
                                    />

                                    <div className="flex flex-col gap-5 lg:flex-row">
                                        <Avatar size="2xl" src={uploadedAvatar} />

                                        <FileUpload.DropZone className="w-full" onDropFiles={(files) => handleAvatarUpload(files[0])} />
                                    </div>
                                </div>
                                <SectionFooter.Root isCard>
                                    <SectionFooter.Actions>
                                        <Button color="secondary" size="sm">
                                            Cancel
                                        </Button>
                                        <Button type="submit" color="primary" size="sm">
                                            Save changes
                                        </Button>
                                    </SectionFooter.Actions>
                                </SectionFooter.Root>
                            </Form>
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-container px-4 lg:px-8">
                        <div className="mx-auto flex w-full max-w-160 flex-col gap-6">
                            <SectionHeader.Root className="border-none pb-0">
                                <SectionHeader.Group>
                                    <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5 self-stretch">
                                        <SectionHeader.Heading>Personal info</SectionHeader.Heading>
                                        <SectionHeader.Subheading>Update your photo and personal details here.</SectionHeader.Subheading>
                                    </div>
                                    <div className="absolute top-0 right-0 md:static">
                                        <DropdownIconSimple />
                                    </div>
                                </SectionHeader.Group>
                            </SectionHeader.Root>

                            <Form
                                className="rounded-xl bg-primary shadow-xs ring-1 ring-secondary ring-inset"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const data = Object.fromEntries(new FormData(e.currentTarget));
                                    console.log("Form data:", data);
                                }}
                            >
                                <div className="flex flex-col gap-6 px-4 py-5 lg:p-6">
                                    <Toggle defaultSelected label="Available for projects" hint="I'm open and available for work." size="sm" />

                                    <InputGroup
                                        isRequired
                                        label="Username"
                                        name="username"
                                        size="md"
                                        defaultValue="olivia"
                                        leadingAddon={<InputGroup.Prefix>untitledui.com/</InputGroup.Prefix>}
                                    >
                                        <InputBase />
                                    </InputGroup>

                                    <InputGroup
                                        isRequired
                                        label="Website"
                                        name="website"
                                        size="md"
                                        defaultValue="www.untitledui.com"
                                        leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                                    >
                                        <InputBase />
                                    </InputGroup>

                                    <TextArea
                                        isRequired
                                        textAreaClassName="min-h-47 resize-y lg:min-h-37"
                                        label="Description"
                                        tooltip="This will be public"
                                        defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialize in UX/UI design, brand strategy, and Webflow development."
                                        hint="275 characters left"
                                    />

                                    <Select name="country" label="Country" size="md" defaultValue="AU" items={countriesOptions}>
                                        {(item) => (
                                            <Select.Item id={item.id} icon={item.icon}>
                                                {item.label}
                                            </Select.Item>
                                        )}
                                    </Select>

                                    <Select
                                        name="timezone"
                                        label="Timezone"
                                        size="md"
                                        defaultValue={timezonesOptions.find((item) => item.label === "PST")?.id}
                                        items={timezonesOptions}
                                    >
                                        {(item) => (
                                            <Select.Item id={item.id} avatarUrl={item.avatarUrl} supportingText={item.supportingText} icon={item.icon}>
                                                {item.label}
                                            </Select.Item>
                                        )}
                                    </Select>
                                </div>
                                <SectionFooter.Root isCard>
                                    <SectionFooter.Actions>
                                        <Button color="secondary" size="sm">
                                            Cancel
                                        </Button>
                                        <Button type="submit" color="primary" size="sm">
                                            Save changes
                                        </Button>
                                    </SectionFooter.Actions>
                                </SectionFooter.Root>
                            </Form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
