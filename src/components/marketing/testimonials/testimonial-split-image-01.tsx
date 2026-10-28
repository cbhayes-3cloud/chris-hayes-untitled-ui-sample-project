import { useState } from "react";
import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import { AnimatePresence, type Transition, motion } from "motion/react";
import { StarIcon } from "@/components/foundations/rating-stars";
import { RoundButton } from "@/components/marketing/testimonials/round-button";

const reviews = [
    {
        quote: "We've been using Untitled to kick start every new project and can't imagine working without it.",
        company: "Layers",
        category: "Web Design Agency",
        author: {
            name: "Lana Steiner",
            title: "Designer, Layers",
            avatarUrl: "https://www.untitledui.com/images/portraits/lana-steiner",
        },
    },
    {
        quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        company: "Hourglass",
        category: "Web Design Agency",
        author: {
            name: "Lulu Meyers",
            title: "PM, Hourglass",
            avatarUrl: "https://www.untitledui.com/images/avatars/lulu-meyers?fm=webp&q=80",
        },
    },
    {
        quote: "Untitled has saved us thousands of hours of work. We're able to spin up projects and features faster.",
        company: "Sisyphus",
        category: "Web Design Agency",
        author: {
            name: "Caitlyn King",
            title: "Data Engineer, Sisyphus",
            avatarUrl: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80",
        },
    },
];

const transition: Transition = {
    type: "spring",
    duration: 0.8,
};

export const TestimonialSplitImage01 = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    return (
        <section className="flex flex-col justify-center gap-12 bg-primary py-16 lg:flex-row lg:items-center lg:gap-0 lg:py-0">
            <div className="max-w-container px-4 md:px-8 lg:absolute lg:py-24">
                <figure className="flex flex-col gap-8 lg:w-1/2 lg:gap-10 lg:pr-16">
                    <AnimatePresence initial={false} mode="popLayout">
                        <motion.blockquote
                            key={currentReviewIndex}
                            initial={{
                                opacity: 0,
                                scale: 0.98,
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
                                scale: 0.98,
                                y: 12,
                                transition: {
                                    ...transition,
                                    delay: 0.06,
                                },
                            }}
                            className="line-clamp-5 origin-left text-display-sm font-medium text-balance text-primary will-change-transform sm:text-display-md md:text-display-lg"
                        >
                            {reviews[currentReviewIndex]?.quote}
                        </motion.blockquote>
                    </AnimatePresence>
                    <div className="flex justify-between">
                        <AnimatePresence initial={false} mode="popLayout">
                            <motion.figcaption
                                key={currentReviewIndex}
                                initial={{
                                    opacity: 0,
                                    scale: 0.98,
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
                                    scale: 0.98,
                                    y: 12,
                                    transition,
                                }}
                                className="flex origin-left flex-col gap-1 will-change-transform"
                            >
                                <p className="text-lg font-semibold whitespace-nowrap text-primary">{reviews[currentReviewIndex]?.author.name}</p>
                                <cite className="text-md text-tertiary not-italic">{reviews[currentReviewIndex]?.company}</cite>
                            </motion.figcaption>
                        </AnimatePresence>
                        <div className="flex gap-4 md:gap-8">
                            <RoundButton
                                onClick={() => setCurrentReviewIndex(currentReviewIndex === 0 ? reviews.length - 1 : currentReviewIndex - 1)}
                                icon={ArrowLeft}
                            />
                            <RoundButton
                                onClick={() => setCurrentReviewIndex(currentReviewIndex === reviews.length - 1 ? 0 : currentReviewIndex + 1)}
                                icon={ArrowRight}
                            />
                        </div>
                    </div>
                </figure>
            </div>

            <div className="h-140 px-4 md:px-8 lg:ml-auto lg:h-180 lg:w-1/2 lg:px-0">
                <AnimatePresence initial={false} mode="popLayout">
                    <motion.img
                        key={currentReviewIndex}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: {
                                type: "tween",
                                duration: 0.6,
                                ease: "linear",
                                // delay: 0.2,
                            },
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                type: "tween",
                                duration: 0.4,
                                ease: "linear",
                            },
                        }}
                        src={reviews[currentReviewIndex]?.author.avatarUrl}
                        className="size-full object-cover"
                        alt={reviews[currentReviewIndex]?.author.name}
                    />
                </AnimatePresence>
                <div className="relative">
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/40 to-black/0 p-3 pt-16 md:p-8 md:pt-20 lg:p-5 lg:pt-24">
                        <AnimatePresence initial={false} mode="popLayout">
                            <motion.div
                                key={currentReviewIndex}
                                initial={{
                                    opacity: 0,
                                    scale: 0.98,
                                    y: 18,
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
                                    scale: 0.98,
                                    y: 18,
                                    transition,
                                }}
                                className="flex origin-bottom flex-col gap-1.5 rounded-xl bg-alpha-white/30 px-4 py-6 ring-1 ring-alpha-white/30 backdrop-blur-md will-change-transform ring-inset md:gap-2 md:rounded-2xl md:p-5"
                            >
                                <div className="flex flex-col-reverse justify-between gap-4 md:flex-row">
                                    <p className="text-xl font-semibold whitespace-nowrap text-white md:text-display-xs">
                                        {reviews[currentReviewIndex]?.author.name}
                                    </p>

                                    <div aria-hidden="true" className="flex gap-1">
                                        <StarIcon className="text-fg-white" />
                                        <StarIcon className="text-fg-white" />
                                        <StarIcon className="text-fg-white" />
                                        <StarIcon className="text-fg-white" />
                                        <StarIcon className="text-fg-white" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <p className="text-md font-semibold text-white">{reviews[currentReviewIndex]?.author.title}</p>
                                    <p className="text-sm font-medium text-white">{reviews[currentReviewIndex]?.category}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
