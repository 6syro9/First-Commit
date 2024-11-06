
import Image from 'next/image';
const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: '/avatar-1.png',
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: '/avatar-2.png',
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: '/avatar-3.png',
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: '/avatar-4.png',
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: '/avatar-5.png',
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: '/avatar-6.png',
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: '/avatar-7.png',
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: '/avatar-8.png',
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: '/avatar-9.png',
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialColumn = (props: {testimonials:typeof testimonials}) => (
  <div className="flex flex-col justify-center items-center gap-4 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
        {props.testimonials.map( ({text, imageSrc, name, username}) => (
          <div className="card">
            <div>{text}</div>
            <div className='flex items-center gap-2 mt-5'>
              <Image src ={imageSrc} alt='name' width={40} height={40} className='h-10 w-10 rounded-full'></Image>
            </div>
            <div className='flex flex-col relative -top-10 left-14'>
              <h3 className='font-medium tracking-tight leading-6'>{name}</h3>
              <span className='tracking-tight leading-6'>{username}</span>
            </div>
          </div>
        ))}
      </div>
)

export const Testimonials = () => {
  return(
  <section className="mt-10">
    <div className="flex flex-col justify-center items-center gap-10">
      <h2 className='text-sm inline-flex border border-[#222]/10 px-3 py-1.5 rounded-lg bg-white/50 backdrop-blur-sm'> testimonials</h2>
      <h1 className=' md:text-[54px] md:leading-[60px] text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#0877d8] bg-clip-text text-transparent mt-3'> What our users say </h1>
      <p className='  text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-3'> From intuitive design to powerful features, our app has become an essential tool for users around the world. </p>
    </div>
    <div className=' lg : flex flex-row gap-6 justify-center items-center'>
     <TestimonialColumn testimonials={firstColumn}></TestimonialColumn>
     <TestimonialColumn testimonials={secondColumn}></TestimonialColumn>
     <TestimonialColumn testimonials={thirdColumn}></TestimonialColumn>
    </div>
  </section>
)};
