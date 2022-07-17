import { MobileFooter, MobileHomeSlider, NavBar, Section1, Section2, Section3, Section4, Section5, HowItWorks, Section6,Section7} from "../../components/layout"

export default function Landing() {
    return (
        <>
            <div>
                <NavBar/>
            </div>
            <div>
                <Section1/>
            </div>
            <div>
                <Section4/>
            </div>
            <div>
                <MobileHomeSlider/>
            </div>
            <div>
                <Section5 />
            </div>
            <div>
                <HowItWorks />
            </div>
            <div>
                <Section6 />
            </div>
            <div>
                <Section2/>
            </div>
            <div>
                <Section3/>
            </div>
            <div>
                <Section7/>
            </div>
            <div>
                <MobileFooter/>
            </div>
        </>
    )
}