import { useState } from "react";
import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import { AnimatePresence, type Transition, motion } from "motion/react";
import { Avatar } from "@/components/base/avatar/avatar";
import { StarIcon } from "@/components/foundations/rating-stars";
import { RoundButton } from "@/components/marketing/testimonials/round-button";

const reviews = [
    {
        quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        company: "Sisyphus",
        category: "Web Design Agency",
        author: {
            name: "Caitlyn King",
            title: "Data Engineer, Sisyphus",
            avatarUrl: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80",
        },
    },
    {
        quote: "Untitled has saved us thousands of hours of work. We're able to spin up projects and features faster.",
        company: "Hourglass",
        category: "Web Design Agency",
        author: {
            name: "Lulu Meyers",
            title: "PM, Hourglass",
            avatarUrl: "https://www.untitledui.com/images/avatars/lulu-meyers?fm=webp&q=80",
        },
    },
    {
        quote: "We have been using Untitled to kick start every new project and cannot imagine working without it.",
        company: "Layers",
        category: "Web Design Agency",
        author: {
            name: "Lana Steiner",
            title: "Designer, Layers",
            avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80",
        },
    },
];

const transition: Transition = {
    type: "spring",
    duration: 0.8,
};

export const TestimonialSplitImage03 = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    return (
        <section className="bg-primary py-16 lg:py-24">
            <div className="mx-auto flex max-w-container flex-col gap-12 px-4 md:gap-16 md:px-8 lg:flex-row lg:items-center">
                <figure className="flex flex-col gap-8 md:gap-12 lg:flex-1">
                    <div className="flex flex-1 flex-col gap-6 md:gap-12">
                        <AnimatePresence initial={false} mode="popLayout">
                            <motion.div key={currentReviewIndex + "-rating"} aria-hidden="true" className="flex gap-1">
                                {Array.from({
                                    length: 5,
                                }).map((_, index) => (
                                    <motion.div
                                        key={`${currentReviewIndex}-${index}`}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.9,
                                            y: 6,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            y: 0,
                                            transition: {
                                                ...transition,
                                                delay: 0.5 + index * 0.1,
                                            },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.9,
                                            y: 6,
                                            transition: {
                                                ...transition,
                                                delay: 0.12,
                                            },
                                        }}
                                        className="will-change-transform"
                                    >
                                        <StarIcon />
                                    </motion.div>
                                ))}
                            </motion.div>
                            <motion.blockquote
                                key={currentReviewIndex + "-quote"}
                                initial={{
                                    opacity: 0,
                                    scale: 0.99,
                                    y: 12,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        ...transition,
                                        delay: 0.4,
                                    },
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.99,
                                    y: 12,
                                    transition: {
                                        ...transition,
                                        delay: 0.06,
                                    },
                                }}
                                className="origin-bottom-left text-display-sm font-medium text-balance text-primary will-change-transform sm:text-display-md md:text-display-lg"
                            >
                                {reviews[currentReviewIndex]?.quote}
                            </motion.blockquote>
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col justify-between gap-6 md:flex-row">
                        <AnimatePresence initial={false} mode="popLayout">
                            <motion.div
                                key={currentReviewIndex}
                                initial={{
                                    opacity: 0,
                                    scale: 0.99,
                                    y: 12,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        ...transition,
                                        delay: 0.3,
                                    },
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.99,
                                    y: 12,
                                    transition,
                                }}
                                className="flex origin-bottom-left gap-4 will-change-transform"
                            >
                                <Avatar border src={reviews[currentReviewIndex]?.author.avatarUrl} alt={reviews[currentReviewIndex]?.author.name} size="xl" />
                                <figcaption className="flex flex-col gap-0.5">
                                    <p className="text-lg font-semibold whitespace-nowrap text-primary">{reviews[currentReviewIndex]?.author.name}</p>
                                    <cite className="text-md whitespace-nowrap text-tertiary not-italic">{reviews[currentReviewIndex]?.author.title}</cite>
                                </figcaption>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex gap-4 md:gap-8">
                            <RoundButton
                                icon={ArrowLeft}
                                onClick={() => setCurrentReviewIndex(currentReviewIndex === 0 ? reviews.length - 1 : currentReviewIndex - 1)}
                            />
                            <RoundButton
                                icon={ArrowRight}
                                onClick={() => setCurrentReviewIndex(currentReviewIndex === reviews.length - 1 ? 0 : currentReviewIndex + 1)}
                            />
                        </div>
                    </div>
                </figure>

                <div className="h-100 sm:h-95 lg:h-180 lg:flex-1">
                    <img src="https://www.untitledui.com/images/portraits/caitlyn-king" className="size-full object-cover" alt="Caitlyn King" />
                </div>
            </div>
        </section>
    );
};
