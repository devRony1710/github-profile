import { FC } from "react";

export const GithubSearchBarHeader: FC = () => {
    return (
        <section className="w-full h-[300px] bg-cover bg-searchBarBackground">
            <input type="text" className="w-[200px]" />
        </section>
    )
}