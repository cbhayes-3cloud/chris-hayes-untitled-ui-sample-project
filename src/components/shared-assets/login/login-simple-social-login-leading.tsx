import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";

export const LoginSimpleSocialLoginLeading = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-primary px-4 py-12 md:px-8 md:pt-24">
            <div className="mx-auto flex w-full flex-col gap-8 sm:max-w-90">
                <div className="flex flex-col items-center gap-6 text-center md:gap-3">
                    <UntitledLogoMinimal className="size-8" />

                    <h1 className="text-xl font-semibold text-primary md:text-display-xs">Log in to your account</h1>
                </div>

                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const data = Object.fromEntries(new FormData(e.currentTarget));
                        console.log("Form data:", data);
                    }}
                    className="flex flex-col gap-6"
                >
                    <SocialButton social="google" theme="color">
                        Continue with Google
                    </SocialButton>

                    <div className="h-px w-full border-t border-secondary"></div>

                    <div className="flex flex-col gap-4">
                        <Input isRequired type="email" name="email" placeholder="Enter your email" size="lg" />

                        <Button type="submit" size="lg">
                            Continue with email
                        </Button>
                    </div>
                </Form>

                <div className="flex justify-center text-center">
                    <Button color="link-color" size="md" href="#">
                        Continue with SAML SSO
                    </Button>
                </div>
            </div>
        </section>
    );
};
