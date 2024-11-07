import { FC } from "react";
import { IconProps } from "./icon.types";

export const Icon: FC<IconProps> = ({
    src
}) => {
    return (
        <img src={src} className="h-5 w-5" />
    )
}