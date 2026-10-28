import { Tailwind as EmailTailwind, type TailwindConfig, type TailwindProps } from "@react-email/tailwind";
import { getThemeObject } from "../_theme/theme";

export const Tailwind = (props: TailwindProps & { theme?: "light" | "dark" }) => {
    return (
        <EmailTailwind
            {...props}
            config={
                {
                    theme: {
                        extend: {
                            ...getThemeObject(props.theme),
                        },
                    },
                } as TailwindConfig
            }
        />
    );
};
