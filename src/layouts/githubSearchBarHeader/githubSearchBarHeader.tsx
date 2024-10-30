import { FC, useState } from "react";
import clsx from 'clsx'
import { Icons } from "../../assets/media";

export const GithubSearchBarHeader: FC = () => {
    const [isInputFocus, setIsInputFocus] = useState(false)
    console.log("🚀 ~ isInputFocus:", isInputFocus)

    const handleFocusInput = (): void => {
        setIsInputFocus(true)
    }

    const handleBlurInput = (): void => {
        setIsInputFocus(false)
    }
    

    return (
        <section className="w-full h-[300px] bg-cover bg-searchBarBackground flex items-center justify-center">
            <div className={clsx("flex items-center gap-4 w-[400px] h-[56px] rounded-lg bg-medium-grey px-4 py-2", 
                isInputFocus ? "border-2 border-custom-blue" : ""
            )}>
                <img src={Icons.searchIcon} className="h-5 w-5" />
                <input onFocus={handleFocusInput} onBlur={handleBlurInput}  placeholder="Github user" type="text" className="bg-transparent w-full h-full rounded-lg outline-none text-light-grey" />
            </div>
        </section>
    )
}