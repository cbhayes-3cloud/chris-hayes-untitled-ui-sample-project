import { useState } from "react";
import { CheckCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Form } from "@/components/base/form/form";
import { HintText } from "@/components/base/input/hint-text";
import { Input, InputBase, TextField } from "@/components/base/input/input";
import { Label } from "@/components/base/input/label";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { cx } from "@/utils/cx";

export const SignupCardSeparated = () => {
    const [password, setPassword] = useState("");

    return (
        <section className="min-h-screen overflow-hidden bg-secondary px-4 py-12 md:px-8 md:pt-24">
            <div className="mx-auto flex w-full flex-col gap-8 sm:max-w-110">
                <div className="flex flex-col items-center gap-6 text-center">
                    <UntitledLogoMinimal className="relative z-10" />
                    <div className="z-10 flex flex-col gap-2 md:gap-3">
                        <h1 className="text-xl font-semibold text-primary md:text-display-xs">Create an account</h1>
                        <p className="text-md text-tertiary">Start your 30-day free trial.</p>
                    </div>
                </div>

                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const data = Object.fromEntries(new FormData(e.currentTarget));
                        console.log("Form data:", data);
                    }}
                    className="relative z-10 -mx-4 flex flex-col gap-6 bg-primary px-4 py-8 sm:mx-0 sm:rounded-2xl sm:px-10 sm:shadow-sm"
                >
                    <div className="flex flex-col gap-5">
                        <Input isRequired hideRequiredIndicator label="Name" name="name" placeholder="Enter your name" size="lg" />
                        <Input isRequired hideRequiredIndicator label="Email" type="email" name="email" placeholder="Enter your email" size="lg" />
                        <TextField isRequired size="lg" name="password" value={password} onChange={setPassword} minLength={8}>
                            <Label isRequired={false}>Password</Label>
                            <InputBase type="password" placeholder="Create a password" />
                            <HintText className="flex items-center gap-1">
                                <CheckCircle
                                    className={cx(
                                        "size-4 stroke-[2.25px] text-fg-quaternary group-invalid:text-fg-error-secondary",
                                        password.length >= 8 && "text-fg-success-primary",
                                    )}
                                />
                                Must be at least 8 characters.
                            </HintText>
                        </TextField>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Button type="submit" size="lg">
                            Get started
                        </Button>
                        <SocialButton social="google" theme="color">
                            Sign up with Google
                        </SocialButton>
                    </div>
                </Form>

                <div className="z-10 flex justify-center gap-1 text-center">
                    <span className="text-sm text-tertiary">Already have an account?</span>
                    <Button href="#" color="link-color" size="md">
                        Log in
                    </Button>
                </div>
            </div>
        </section>
    );
};
