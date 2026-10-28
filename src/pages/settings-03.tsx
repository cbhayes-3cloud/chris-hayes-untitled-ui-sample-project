import { useState } from "react";
import { Bell01, Mail01, SearchLg, Settings01, Zap } from "@untitledui/icons";
import { NavButton } from "@/components/application/app-navigation/base-components/nav-button";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";
import { SectionFooter } from "@/components/application/section-footers/section-footer";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { SectionLabel } from "@/components/application/section-headers/section-label";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import { AvatarProfilePhoto } from "@/components/base/avatar/avatar-profile-photo";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { DropdownAvatar } from "@/components/base/dropdown/dropdown-avatar";
import { FileTrigger } from "@/components/base/file-upload-trigger/file-upload-trigger";
import { Form } from "@/components/base/form/form";
import { Input, InputBase, TextField } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { Label } from "@/components/base/input/label";
import { NativeSelect } from "@/components/base/select/select-native";
import { TextEditor } from "@/components/base/text-editor/text-editor";

const tabs = [
    { id: "details", label: "My details" },
    { id: "profile", label: "Profile" },
    { id: "password", label: "Password" },
    { id: "team", label: "Team" },
    { id: "plan", label: "Plan" },
    { id: "billing", label: "Billing" },
    { id: "email", label: "Email" },
    { id: "notifications", label: "Notifications", badge: 2 },
    { id: "integrations", label: "Integrations" },
    { id: "api", label: "API" },
];

export const Settings03 = () => {
    const [selectedTab, setSelectedTab] = useState<string>("profile");
    const [uploadedAvatar, setUploadedAvatar] = useState<string | null>("https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80");

    const handleAvatarUpload = (files: FileList | null) => {
        const file = files?.[0];

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

            <main className="bg-primary pt-8 pb-16 lg:pt-12 lg:pb-24">
                <div className="flex flex-col gap-8">
                    <div className="mx-auto flex w-full max-w-container flex-col gap-5 px-4 lg:px-8">
                        {/* Page header simple with search */}
                        <div className="relative flex flex-col gap-4">
                            <div className="flex flex-col gap-4 lg:flex-row">
                                <div className="flex flex-1 flex-col gap-0.5">
                                    <h1 className="text-xl font-semibold text-primary">Settings</h1>
                                </div>
                                <Input shortcut className="w-full max-w-70 max-md:hidden" size="sm" aria-label="Search" placeholder="Search" icon={SearchLg} />
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

                        <Form
                            className="flex min-w-0 flex-1 flex-col gap-6 lg:gap-12"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                        >
                            {/* Page header banner avatar */}
                            <div className="relative hidden flex-col bg-primary lg:flex">
                                <div className="h-40 w-full rounded-xl bg-linear-to-tr from-[#A6C0FE] to-[#FFEAF6] lg:h-60" />

                                <div className="mx-auto -mt-12 flex w-full max-w-container flex-col gap-6 px-4 lg:-mt-10 lg:px-0">
                                    <div className="flex flex-col gap-4 lg:flex-row lg:gap-5">
                                        <div className="flex justify-between">
                                            <AvatarProfilePhoto
                                                verified
                                                className="lg:hidden"
                                                size="md"
                                                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                                                alt="Olivia Rhye"
                                            />
                                            <AvatarProfilePhoto
                                                verified
                                                className="max-lg:hidden"
                                                size="lg"
                                                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                                                alt="Olivia Rhye"
                                            />
                                        </div>

                                        <div className="flex w-full flex-col gap-5 lg:pt-16">
                                            <div className="flex flex-1 flex-col flex-wrap gap-4 lg:flex-row">
                                                <div className="flex min-w-60 flex-1 flex-col gap-0.5">
                                                    <h1 className="text-xl font-semibold text-primary">Profile</h1>
                                                    <p className="text-md text-tertiary">Update your photo and personal details.</p>
                                                </div>
                                                <div className="flex flex-col gap-4 group-aria-pressed/field:inset-2 lg:flex-row">
                                                    <div className="flex items-start gap-3">
                                                        <Button color="secondary" size="sm">
                                                            Cancel
                                                        </Button>
                                                        <Button size="sm">Save</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="h-px w-full border-none bg-border-secondary" />
                                </div>
                            </div>

                            <NativeSelect
                                size="sm"
                                aria-label="Page tabs"
                                className="lg:hidden"
                                value={selectedTab}
                                onChange={(event) => setSelectedTab(event.target.value)}
                                options={tabs.map((tab) => ({ label: tab.label, value: tab.id }))}
                            />

                            <SectionHeader.Root className="lg:hidden">
                                <SectionHeader.Group>
                                    <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                                        <SectionHeader.Heading>Profile</SectionHeader.Heading>
                                        <SectionHeader.Subheading>Update your photo and personal details here.</SectionHeader.Subheading>
                                    </div>
                                </SectionHeader.Group>
                            </SectionHeader.Root>

                            {/* Form content */}
                            <div className="flex flex-col gap-5">
                                <div className="grid grid-cols-1 lg:grid-cols-[minmax(200px,280px)_minmax(400px,512px)] lg:gap-8">
                                    <SectionLabel.Root isRequired size="sm" title="Username" className="max-lg:hidden" />

                                    <InputGroup
                                        isRequired
                                        size="md"
                                        label="Username"
                                        name="username"
                                        defaultValue="olivia"
                                        className="lg:[&_[data-label]]:hidden"
                                        leadingAddon={<InputGroup.Prefix>untitledui.com/</InputGroup.Prefix>}
                                    >
                                        <InputBase />
                                    </InputGroup>
                                </div>

                                <hr className="h-px w-full border-none bg-border-secondary" />

                                <div className="grid grid-cols-1 lg:grid-cols-[minmax(200px,280px)_minmax(400px,512px)] lg:gap-8">
                                    <SectionLabel.Root isRequired size="sm" title="Website" className="max-lg:hidden" />

                                    <InputGroup
                                        isRequired
                                        size="md"
                                        label="Website"
                                        name="website"
                                        defaultValue="www.untitledui.com"
                                        className="lg:[&_[data-label]]:hidden"
                                        leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                                    >
                                        <InputBase />
                                    </InputGroup>
                                </div>

                                <hr className="h-px w-full border-none bg-border-secondary" />

                                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_minmax(400px,512px)] lg:gap-8">
                                    <SectionLabel.Root isRequired size="sm" title="Your photo" description="This will be displayed on your profile." />
                                    <div className="flex justify-between">
                                        <Avatar size="2xl" src={uploadedAvatar} />

                                        <div className="flex gap-4">
                                            <Button color="link-gray" size="sm" onClick={() => setUploadedAvatar(null)}>
                                                Delete
                                            </Button>

                                            <FileTrigger acceptedFileTypes={["image/*"]} onSelect={handleAvatarUpload}>
                                                <Button color="link-color" size="sm">
                                                    Update
                                                </Button>
                                            </FileTrigger>
                                        </div>
                                    </div>
                                </div>

                                <hr className="h-px w-full border-none bg-border-secondary" />

                                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_minmax(400px,512px)] lg:gap-8">
                                    <SectionLabel.Root
                                        isRequired
                                        size="sm"
                                        title="Your bio"
                                        description="Write a short introduction."
                                        tooltip="This will be public"
                                    />

                                    <TextEditor.Root
                                        limit={400}
                                        className="gap-2"
                                        inputClassName="min-h-41 p-4 resize-y"
                                        content="I'm a Product Designer based in Melbourne, Australia. I specialize in UX/UI design, brand strategy, and Webflow development."
                                    >
                                        <TextEditor.Toolbar floating type="simple" />

                                        <div className="flex flex-col gap-1.5">
                                            <TextEditor.Content />
                                            <TextEditor.HintText />
                                        </div>
                                    </TextEditor.Root>
                                </div>

                                <hr className="h-px w-full border-none bg-border-secondary" />

                                <div className="grid grid-cols-1 lg:grid-cols-[minmax(200px,280px)_minmax(400px,512px)] lg:gap-8">
                                    <SectionLabel.Root size="sm" title="Job title" className="max-lg:hidden" />

                                    <div className="flex flex-col gap-4" defaultValue="Product Designer">
                                        <TextField name="role">
                                            <Label className="lg:hidden">Job title</Label>
                                            <InputBase size="md" />
                                        </TextField>

                                        <Checkbox defaultSelected label="Show my job title in my profile" />
                                    </div>
                                </div>

                                <hr className="h-px w-full border-none bg-border-secondary" />

                                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_minmax(400px,512px)] lg:gap-8">
                                    <SectionLabel.Root
                                        size="sm"
                                        title="Alternative contact email"
                                        description="Enter an alternative email if you'd like to be contacted via a different email."
                                    />

                                    <TextField aria-label="Alternative contact email" name="email" type="email">
                                        <InputBase size="md" placeholder="you@example.com" icon={Mail01} />
                                    </TextField>
                                </div>

                                <SectionFooter.Root className="lg:hidden">
                                    <SectionFooter.Actions>
                                        <Button color="secondary" size="sm">
                                            Cancel
                                        </Button>
                                        <Button type="submit" color="primary" size="sm">
                                            Save
                                        </Button>
                                    </SectionFooter.Actions>
                                </SectionFooter.Root>
                            </div>
                        </Form>
                    </div>
                </div>
            </main>
        </div>
    );
};
