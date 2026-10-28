import { useEffect, useState } from "react";
import { Edit04, Stars02 } from "@untitledui/icons";
import { Heading as AriaHeading } from "react-aria-components";
import { Dialog, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { TextEditor } from "@/components/base/text-editor/text-editor";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

/**
 * This is a utility hook that automatically reopens the modal after
 * it's closed. It's used only for demo purposes and can be safely
 * removed and replaced with a regular `useState` hook.
 */
const useModalState = (defaultValue: boolean = true) => {
    const [isOpen, setIsOpen] = useState(defaultValue);

    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setIsOpen(true);
            }, 700);
        }
    }, [isOpen]);

    return [isOpen, setIsOpen] as const;
};

export const TextEditorModal = () => {
    const [isOpen, setIsOpen] = useModalState();
    const [content, setContent] = useState(
        "<p>We need another and a wiser and perhaps a more mystical concept of animals. Remote from universal nature, and living by complicated artifice, man in civilization surveys the creature through the glass of his knowledge and sees thereby a feather magnified and the whole image in distortion.</p><p></p><p>We patronize them for their incompleteness, for their tragic fate of having taken form so far below ourselves. And therein we err, and greatly err. For the animal shall not be measured by man.</p><p></p><p>In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear. They are not brethren, they are not underlings; they are other nations, caught with ourselves in the net of life and time, fellow prisoners of the splendour and travail of the earth.</p>",
    );

    return (
        <ModalOverlay isOpen={isOpen} onOpenChange={setIsOpen} isDismissable>
            <Modal className="sm:max-w-180">
                <Dialog>
                    <CloseButton theme="light" size="sm" className="absolute top-3 right-3 sm:top-4 sm:right-4" />
                    <div className="flex flex-col gap-4 px-4 pt-5 pb-5 sm:px-6 sm:pt-6">
                        <div className="relative w-max max-sm:hidden">
                            <FeaturedIcon color="gray" size="md" theme="modern" icon={Edit04} />
                        </div>
                        <div className="z-10 flex flex-col gap-0.5">
                            <AriaHeading slot="title" className="text-md font-semibold text-primary">
                                Edit featured excerpt
                            </AriaHeading>
                            <p className="text-sm text-tertiary">This will be displayed on your profile.</p>
                        </div>
                    </div>

                    <div className="px-4 sm:px-6">
                        <TextEditor.Root
                            content={content}
                            onUpdate={({ editor }) => setContent(editor.getHTML())}
                            className="w-full max-md:gap-2"
                            inputClassName="h-90 max-md:p-4 md:h-101 w-full resize-y"
                        >
                            <TextEditor.Toolbar type="simple" className="md:hidden" />
                            <TextEditor.Toolbar hideFontSize type="advanced" className="max-md:hidden" />

                            <div className="flex flex-col gap-2">
                                <TextEditor.Content />
                                <TextEditor.HintText />
                            </div>
                        </TextEditor.Root>
                    </div>
                    <div className="z-10 flex flex-1 gap-3 p-4 pt-6 sm:items-center sm:px-6 sm:pt-8 sm:pb-6">
                        <Button color="link-gray" size="md" iconLeading={Stars02} className="mr-auto max-md:hidden">
                            Ask AI
                        </Button>
                        <Button color="secondary" size="md" className="max-md:flex-1" onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                        <Button color="primary" size="md" className="max-md:flex-1" onClick={() => setIsOpen(false)}>
                            Save changes
                        </Button>
                    </div>
                </Dialog>
            </Modal>
        </ModalOverlay>
    );
};
