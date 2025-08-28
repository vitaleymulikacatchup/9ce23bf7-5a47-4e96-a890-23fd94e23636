use client

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import ButtonIconArrow from '@/components/buttons/ButtonIconArrow';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import { TextFillGradient } from '@/components/text/TextFillGradient';
import BentoMediaGallery from '@/components/bento/BentoMediaGallery/BentoMediaGallery';
import TextboxStandard from '@/components/textbox/TextboxStandard';
import ButtonTextStagger from '@/components/buttons/ButtonTextStagger';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import TimelineBase from '@/components/timeline/TimelineBase';
import BentoHoverBorderGlow from '@/components/bento/BentoHoverBorderGlow/BentoHoverBorderGlow';

const cars = [
  { title: 'Car Model A', description: 'Fast and spacious', image: '/images/placeholder1.avif' },
  { title: 'Car Model B', description: 'Sleek and efficient', image: '/images/placeholder2.avif' },
  { title: 'Car Model C', description: 'A perfect family car', image: '/images/placeholder3.avif' },
  { title: 'Car Model D', description: 'Stylish and fast', image: '/images/placeholder4.avif' }
];

const Home = () => {
  return (
    <SiteThemeProvider theme={{
      styleVariant: 'funAndTrendy',
      colorTemplate: 1,
      textAnimation: 'slide'
    }}>
      <section id="hero" className="bg-hero md:py-28 py-16 flex flex-col items-center">
        <BillboardHero title="Welcome to CarJoy!" subtitle="Find your dream car today!" />
      </section>
      <section id="showroom" className="bg-white p-12">
        <TextboxStandard title={<h2>Our Showcase</h2>} description={<p>Explore our top models below:</p>} />
        <BentoMediaGallery items={cars.map(car => ({ title: car.title, image: car.image }))} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" />
        <ButtonTextStagger text="View More Details" />
      </section>
      <section id="features" className="bg-light-gray p-12">
        <TextboxStandard title={<h2>Why Choose Us?</h2>} description={<p>Discover the benefits of buying with us:</p>} />
        <BentoHoverBorderGlow items={[{ title: 'Fast Financing', description: 'Get approved in minutes!' }, { title: 'Warranty', description: 'We offer a full warranty on every purchase.' }, { title: 'Trade-In', description: 'Trade-in your old car for a new one.' }]} />
      </section>
      <section id="how-it-works" className="bg-white p-12">
        <TimelineBase items={[{ title: 'Step 1', description: 'Select your car', image: '/images/logo.svg' }, { title: 'Step 2', description: 'Get financed', image: '/images/logo-dot.svg' }, { title: 'Step 3', description: 'Drive away!', image: '/images/logo.svg' }]} className="border p-8" />
      </section>
      <section id="testimonials" className="bg-light-gray p-12">
        <CentralFAQ items={[{ title: 'Best Car Buying Experience!', content: 'John D.' }, { title: 'The team is amazing!', content: 'Sara L.' }]} />
      </section>
      <section id="contact" className="bg-light-gray p-12">
        <TextboxStandard title={<h2>Contact Us</h2>} description={<p>Have questions? Reach out!</p>} />
        <form className="flex flex-col gap-4">  
          <input type="text" placeholder="Name" className="border rounded p-3" />
          <input type="email" placeholder="Email" className="border rounded p-3" />
          <input type="text" placeholder="Phone" className="border rounded p-3" />
          <textarea placeholder="Message" className="border rounded p-3" rows={4} />
          <ButtonIconArrow text="Submit Inquiry" onClick={() => {}} />
        </form>
      </section>
    </SiteThemeProvider>
  );
};

export default Home;
