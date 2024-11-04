import { FC } from "react";

export const GithubRepositories: FC = () => {
    return (
        <section className="mt-10 w-[70%] flex flex-col mx-auto py-5 gap-4">
            <span className="text-light-grey text-[32px] font-semibold leading-[36px]">GitHub User</span>
            <p className="text-light-grey opacity-70 text-[18px] leading-[24px]">How people build software</p>
        </section>
    )
}