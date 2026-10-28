import { useState } from "react";
import { CheckCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Form } from "@/components/base/form/form";
import { HintText } from "@/components/base/input/hint-text";
import { Input, InputBase, TextField } from "@/components/base/input/input";
import { Label } from "@/components/base/input/label";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { RatingStars } from "@/components/foundations/rating-stars";
import { cx } from "@/utils/cx";

export const SignupSplitImageBackground = () => {
    const [password, setPassword] = useState("");

    return (
        <section className="grid min-h-screen grid-cols-1 bg-primary lg:grid-cols-[2fr_1fr] xl:grid-cols-[880px_1fr]">
            <div className="flex w-full justify-center bg-primary px-4 py-12 md:items-center">
                <div className="flex max-w-90 flex-1 flex-col gap-8">
                    <div className="flex flex-col gap-6 md:gap-8">
                        <UntitledLogoMinimal />

                        <div className="flex flex-col gap-2 md:gap-3">
                            <h1 className="text-xl font-semibold text-primary md:text-display-xs">Sign up</h1>
                            <p className="hidden text-md text-tertiary md:block">Start your 30-day free trial.</p>
                            <p className="text-md text-tertiary md:hidden">Start turning your ideas into reality.</p>
                        </div>
                    </div>

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="flex flex-col gap-6"
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

                    <div className="flex justify-center gap-1 text-center">
                        <span className="text-sm text-tertiary">Already have an account?</span>
                        <Button href="#" color="link-color" size="md">
                            Log in
                        </Button>
                    </div>
                </div>
            </div>

            <div className="relative order-first hidden flex-1 justify-center px-8 pt-[170px] lg:flex">
                <img
                    className="absolute inset-0 size-full object-cover saturate-0"
                    src="https://unsplash.com/photos/B2fNlHHI7dI/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzl8fHBvZGNhc3R8ZW58MHx8fHwxNjc4MDYxNjMy&force=true&w=1920"
                    alt="Image by Soundtrap ay Unsplash.com"
                />
                <div className="absolute inset-0 bg-brand-section opacity-80" />

                <div className="z-10 flex h-max max-w-160 flex-col gap-12">
                    {/* Stars illustration */}
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 40C25.4247 40 40 25.4247 40 0C40 25.4247 54.5753 40 80 40C54.5753 40 40 54.5753 40 80C40 54.5753 25.4247 40 0 40Z"
                            className="fill-fg-white"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 12C7.62742 12 12 7.62742 12 0C12 7.62742 16.3726 12 24 12C16.3726 12 12 16.3726 12 24C12 16.3726 7.62742 12 0 12Z"
                            className="fill-yellow-300"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M64 24C69.0849 24 72 21.0849 72 16C72 21.0849 74.9151 24 80 24C74.9151 24 72 26.9151 72 32C72 26.9151 69.0849 24 64 24Z"
                            className="fill-yellow-300"
                        />
                    </svg>

                    <div className="flex flex-col gap-6">
                        <h2 className="text-display-xl font-semibold! -tracking-[1.44px] text-primary_on-brand xl:text-display-2xl">
                            Start turning your ideas into reality.
                        </h2>
                        <p className="text-lg font-medium text-tertiary_on-brand xl:text-xl">
                            Create a free account and get full access to all features for 30-days. No credit card needed. Trusted by over 4,000 professionals.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                            <img
                                className="size-10 rounded-full object-cover ring-1 ring-white/30 ring-inset"
                                src="https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80"
                                alt="Sienna Hewitt"
                            />
                            <img
                                className="size-10 rounded-full object-cover ring-1 ring-white/30 ring-inset"
                                src="https://www.untitledui.com/images/avatars/ammar-foley?fm=webp&q=80"
                                alt="Ammar Foley"
                            />
                            <img
                                className="size-10 rounded-full object-cover ring-1 ring-white/30 ring-inset"
                                src="https://www.untitledui.com/images/avatars/pippa-wilkinson?fm=webp&q=80"
                                alt="Pippa Wilkinson"
                            />
                            <img
                                className="size-10 rounded-full object-cover ring-1 ring-white/30 ring-inset"
                                src="https://www.untitledui.com/images/avatars/olly-schroeder?fm=webp&q=80"
                                alt="Olly Schroeder"
                            />
                            <img
                                className="size-10 rounded-full object-cover ring-1 ring-white/30 ring-inset"
                                src="https://www.untitledui.com/images/avatars/mathilde-lewis?fm=webp&q=80"
                                alt="Mathilde Lewis"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <RatingStars className="gap-1" starClassName="text-yellow-300" />
                                <span className="text-md font-semibold text-primary_on-brand">5.0</span>
                            </div>
                            <span className="text-md font-medium text-tertiary_on-brand">from 200+ reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
