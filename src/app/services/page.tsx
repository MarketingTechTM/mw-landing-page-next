import FooterBanner from "@/components/FooterBanner";
import Hero from "./Hero";
import OurServices from "./OurServices";


export default function Services(){

    return (
        <div className="flex flex-col w-full">
            <Hero/>
            <OurServices/>
            <FooterBanner/>
        </div>
    )
}