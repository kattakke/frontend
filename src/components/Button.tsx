import React, { ComponentPropsWithoutRef, FC, ReactNode } from "react"

type Props = {
    children?: ReactNode,
    className?: string
} & ComponentPropsWithoutRef<"button">

const Button: FC<Props> = ({children, className, ...props}) => {
    return <button className={["bg-main text-white rounded-lg h-[36px] w-[140px]", className].join(" ")}>{children}</button>
}

export default Button