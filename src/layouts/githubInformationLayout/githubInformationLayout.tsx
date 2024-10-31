import { FC } from "react"
import { InformationLabel } from "../../components"
import { Images } from "../../assets/media"

export const GithubInformationLayout: FC = () => {
    return (
        <section className="mt-4 w-full flex items-center justify-center gap-2 relative">
            <div className="w-[150px] h-[150px] rounded-2xl bg-main absolute left-[15%] -top-16 flex items-center justify-center">
                <img src={Images.githubLogo} className="w-[90%] h-[90%] object-contain bg-black rounded-xl" />
            </div>
            
            <InformationLabel title="Followers" value={23432} />
            <InformationLabel title="Following" value={20} />
            <InformationLabel title="Location" value="San Francisco, CA" />
        </section>
    )
}