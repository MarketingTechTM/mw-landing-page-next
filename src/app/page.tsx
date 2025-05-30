import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";

import SuccessStories from "@/components/SuccessStories";

import TrustedBrands from "@/components/TrustedBrands";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
  <Suspense fallback= {<Loading/>}>
       <div className="text-4xl text-center">
      <Hero/>
      <TrustedBrands/>
      <ServicesSection/>
      <SuccessStories/>
   </div>
  </Suspense>
  );
}


/*
  Components here left:- 
  1. hero - done
  2. TrustedBrands - done
  3. Success Stories
  4. Marketing Wisdom
  5. podcast and video section
  // then the general footer to be included in the layout.tsx


  Total Routes need to be declared:-
  1. / - Home
  2. /services - Services
  3. /customer-stories - Success Stories
  4. resources all dropdowns:- 

      /resources - Resources
      /resources/books - Books
      /resources/podcasts - Podcasts
      /resources/courses - Courses

  5. /book-a-call - Book A Call
  6. /book-a-call-thank-you - Book A Call Thank You
  7. /contact-us - Contact Us
  8. /about-us - About Us
  9. /privacy-policy - Privacy Policy
  10. /terms-and-conditions - Terms and Conditions
  11. /404 - 404 Page

  * Complete admin panel required for the services page and the success stories page
  * Complete admin panel required for the resources page and the resources subpages
  
  
*/