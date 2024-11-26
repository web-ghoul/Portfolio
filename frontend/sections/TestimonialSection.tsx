'use client';
import Title from '@/components/Title/Title';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const TestimonialSection = () => {
  return (
    <section className="grid items-center justify-center w-full gap-12 contain_x contain_y">
      <Title text={"What My Clients Said"} />
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
};

// export const Highlight = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <span
//       className={cn(
//         'font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5',
//         className,
//       )}
//     >
//       {children}
//     </span>
//   );
// };

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// const CARDS = [
//   {
//     id: 0,
//     name: 'Manu Arora',
//     designation: 'Senior Software Engineer',
//     content: (
//       <p>
//         These cards are amazing, <Highlight>I want to use them</Highlight> in my
//         project. Framer motion is a godsend ngl tbh fam 🙏
//       </p>
//     ),
//   },
//   {
//     id: 1,
//     name: 'Elon Musk',
//     designation: 'Senior Shitposter',
//     content: (
//       <p>
//         I dont like this Twitter thing,{' '}
//         <Highlight>deleting it right away</Highlight> because yolo. Instead, I
//         would like to call it <Highlight>X.com</Highlight> so that it can easily
//         be confused with adult sites.
//       </p>
//     ),
//   },
//   {
//     id: 2,
//     name: 'Tyler Durden',
//     designation: 'Manager Project Mayhem',
//     content: (
//       <p>
//         The first rule of
//         <Highlight>Fight Club</Highlight> is that you do not talk about fight
//         club. The second rule of
//         <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
//         club.
//       </p>
//     ),
//   },
// ];

export default TestimonialSection;
