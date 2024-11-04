import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from '@tabler/icons-react';
import Image from 'next/image';
import { IoIosLink } from 'react-icons/io';
import { FloatingDock } from '../ui/floating-dock';
import Modal from './Modal';

const SocialMediaModal = () => {
  const links = [
    {
      title: 'Home',
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },

    {
      title: 'Products',
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'Components',
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'Aceternity UI',
      icon: (
        <Image
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: '#',
    },
    {
      title: 'Changelog',
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },

    {
      title: 'Twitter',
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'GitHub',
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
  ];
  return (
    <Modal>
      <IoIosLink className="text-[rgba(255,255,255,0.25)] rotate-12 text-[100px] absolute z-0 -top-[20px] -left-[20px]" />
      <div className="flex flex-col items-center justify-center gap-8 h-full w-full py-6 px-4">
        <h3 className="text-white text-3xl">Social Media Links</h3>
        <FloatingDock mobileClassName="translate-y-20" items={links} />
      </div>
    </Modal>
  );
};

export default SocialMediaModal;
