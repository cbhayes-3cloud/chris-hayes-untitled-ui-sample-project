import { useState } from "react";
import { Passcode, Stars02, User01, UsersPlus } from "@untitledui/icons";
import { Progress } from "@/components/application/progress-steps/progress-steps";
import type { ProgressFeaturedIconType } from "@/components/application/progress-steps/progress-types";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";

const steps = [
    {
        title: "Your details",
        description: "Name and email",
        status: "complete",
        icon: User01,
    },
    {
        title: "Choose a password",
        description: "Choose a secure password",
        status: "current",
        icon: Passcode,
    },
    {
        title: "Invite your team",
        description: "Start collaborating",
        status: "incomplete",
        icon: UsersPlus,
    },
    {
        title: "Add your socials",
        description: "Automatic sharing",
        status: "incomplete",
        icon: Stars02,
    },
] as ProgressFeaturedIconType[];

export const SignupProgress02 = () => {
    const [password, setPassword] = useState("");

    return (
        <section className="flex min-h-screen flex-col items-center justify-between gap-12 overflow-hidden bg-primary px-4 py-12 md:px-8 md:pt-24 md:pb-16">
            <div className="mx-auto flex w-full flex-col gap-8 sm:max-w-90">
                <div className="flex flex-col items-center gap-6 text-center md:gap-8">
                    <UntitledLogoMinimal className="relative z-10" />
                    <div className="z-10 flex flex-col gap-2 md:gap-3">
                        <h1 className="text-xl font-semibold text-primary md:text-display-xs">Choose a password</h1>
                        <p className="text-md text-tertiary">Must be at least 8 characters.</p>
                    </div>
                </div>

                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const data = Object.fromEntries(new FormData(e.currentTarget));
                        console.log("Form data:", data);
                    }}
                    className="z-10 flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-5">
                        <Input isRequired type="password" name="password" size="lg" placeholder="Create a password" onChange={setPassword} />
                        <Input
                            isRequired
                            type="password"
                            name="password_confirm"
                            size="lg"
                            placeholder="Confirm password"
                            validate={(value) => value === password || "Passwords do not match"}
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <Button type="submit" size="lg">
                            Continue
                        </Button>
                    </div>
                </Form>
            </div>

            <div className="mx-auto hidden w-full max-w-5xl px-8 md:block">
                <Progress.IconsWithText type="featured-icon" orientation="horizontal" size="sm" items={steps} />
            </div>
            <div className="mx-auto w-full md:hidden">
                <Progress.IconsWithText type="featured-icon" orientation="vertical" size="sm" items={steps} />
            </div>
        </section>
    );
};
