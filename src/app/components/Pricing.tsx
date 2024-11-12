import Image from "next/image";
import {twMerge} from "tailwind-merge";


const pricingTiers = [
  {
    id:0,
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    id:1,
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    id:2,
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section>
      <div className="container">
        <h2 className=' md:text-[54px] md:leading-[60px] text-center text-3xl font-bold tracking-tighter bg-gradient-to-r from-black to-[#0877d8] bg-clip-text text-transparent mt-6'> Pricing</h2>
        <p className='  text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5'> Free forever. Upgrade for unlimited tasks, better security, and exclusive features.</p>

        <div>
  <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center lg:gap-10">
    {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }) => (
      <div key={title + monthlyPrice} className={twMerge("card", inverse ? 'border-black bg-black text-white' : '')}>
        <div className="flex justify-between">
          <h3 className={twMerge("text-lg font-bold text-black/50", inverse ? 'text-white/60' : '')}>
            {title}
          </h3>
          {popular === true && (
            <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
              <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">popular</span>
            </div>
          )}
        </div>

        <div className="flex items-baseline gap-1 mt-[30px]">
          <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
          <span className="tracking-tight font-bold text-black/50">/month</span>
        </div>
        <button className={twMerge("bg-black px-6 py-3 rounded-lg font-semibold text-white hover:bg-black/90 transition-colors mt-[30px]", inverse ? 'bg-white text-black' : '')}>
          {buttonText}
        </button>
        <ul className="flex flex-col gap-5 mt-8">
          {features.map((feature, featureIndex) => (
            <li key={feature + featureIndex} className="text-sm flex items-center gap-4">
              <Image className="w-6 h-6" src={inverse ? '/check.svg' : '/check.svg'} width={110} height={110} alt="check icon" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

      
      </div>
    </section>
  );
}
