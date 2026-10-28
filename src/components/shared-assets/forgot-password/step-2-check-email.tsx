import { ArrowLeft, Mail01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export const Step2CheckEmail = () => {
    return (
        <section className="min-h-screen overflow-hidden bg-primary px-4 py-12 md:gap-24 md:px-8 md:pt-24">
            <div className="mx-auto flex w-full max-w-90 flex-col gap-8">
                <div className="flex flex-col items-center gap-6 text-center">
                    <FeaturedIcon icon={Mail01} color="gray" theme="modern" size="lg" />

                    <div className="flex flex-col gap-2 md:gap-3">
                        <h1 className="text-xl font-semibold text-primary md:text-display-xs">Check your email</h1>
                        <p className="text-md text-tertiary">
                            We sent a password reset link to
                            <span className="text-md font-medium"> olivia@untitledui.com</span>
                        </p>
                    </div>
                </div>

                <Button href="#" size="lg" className="w-full">
                    Open email app
                </Button>

                <div className="flex flex-col items-center gap-8 text-center">
                    <p className="flex gap-1">
                        <span className="text-sm text-tertiary">Didn't receive the email?</span>
                        <Button color="link-color" size="md" href="#">
                            Click to resend
                        </Button>
                    </p>
                    <Button size="md" color="link-gray" href="#" className="mx-auto" iconLeading={ArrowLeft}>
                        Back to log in
                    </Button>
                </div>
            </div>
        </section>
    );
};
