import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";

export const SignupSimpleSocialLogins = () => {
    return (
        <section className="min-h-screen overflow-hidden bg-primary px-4 py-12 md:px-8 md:pt-24">
            <div className="mx-auto flex w-full flex-col gap-8 sm:max-w-90">
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
                    className="flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-4">
                        <Input isRequired type="email" name="email" placeholder="Enter your email" size="lg" />

                        <Button type="submit" size="lg">
                            Get started
                        </Button>
                    </div>

                    <div className="flex items-center gap-x-2">
                        <div className="flex-1 border-t border-secondary"></div>
                        <span className="text-sm font-medium text-tertiary">OR</span>
                        <div className="flex-1 border-t border-secondary"></div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <SocialButton social="google" theme="color">
                            Sign up with Google
                        </SocialButton>
                        <SocialButton social="facebook" theme="color">
                            Sign up with Facebook
                        </SocialButton>
                        <SocialButton social="apple" theme="color">
                            Sign up with Apple
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
        </section>
    );
};
