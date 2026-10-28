import { ArrowLeft, CheckCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export const Step4Success = () => {
    return (
        <section className="min-h-screen overflow-hidden bg-primary px-4 py-12 md:px-8 md:pt-24">
            <div className="mx-auto flex w-full max-w-90 flex-col gap-8">
                <div className="flex flex-col items-center gap-6 text-center">
                    <FeaturedIcon icon={CheckCircle} color="gray" theme="modern" size="lg" />

                    <div className="flex flex-col gap-2 md:gap-3">
                        <h1 className="text-xl font-semibold text-primary md:text-display-xs">Password reset</h1>
                        <p className="text-md text-tertiary">Your password has been successfully reset. Click below to log in magically.</p>
                    </div>
                </div>

                <Button href="#" size="lg" className="w-full">
                    Continue
                </Button>

                <div className="flex flex-col items-center gap-8 text-center">
                    <Button color="link-gray" size="md" href="#" className="mx-auto" iconLeading={ArrowLeft}>
                        Back to log in
                    </Button>
                </div>
            </div>
        </section>
    );
};
