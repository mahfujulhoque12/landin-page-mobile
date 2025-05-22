'use client'
import Badge from "@/components/badge/Badge";
import ByeNow from "@/components/bye-now/ByeNow";
import CustomerReview from "@/components/customer-review/CustomerReview";
import CustomerVideo from "@/components/customer-video/CustomerVideo";
import Gallery from "@/components/gallery/Gallery";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import PromoVideo from "@/components/promo-video/PromoVideo";
import Specification from "@/components/specification/Specification";
import WhyUs from "@/components/why-us/WhyUs";


export default function Home() {
  return (
   <div>
    <Header/>
    <Hero/>
    <Badge/>
    <Specification/>
    <PromoVideo/>
    <WhyUs/>
    <CustomerReview/>
    <Gallery/>
    <CustomerVideo/>
    <ByeNow/>
   </div>
  );
}
