import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import {
  BookOpenText,
  Box,
  BoxesIcon,
  ChevronUp,
  Contact,
  LayoutDashboard,
  LogOut,
  MessageCircle,
  Settings,
  ShieldCheck,
  User2,
  Wrench,
} from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../ui/sidebar';

const AppSidebar = () => {
  const items = [
    {
      title: 'Dashboard',
      url: `${import.meta.env.VITE_DASHBOARD_ROUTE}`,
      icon: LayoutDashboard,
      image: '/images/dashboard.gif',
    },
    {
      title: 'Projects',
      url: `${import.meta.env.VITE_PROJECCTS_ROUTE}`,
      icon: BoxesIcon,
    },
    {
      title: 'Skills',
      url: `${import.meta.env.VITE_SKILLS_ROUTE}`,
      icon: Wrench,
    },
    {
      title: 'Packages',
      url: `${import.meta.env.VITE_PACKAGES_ROUTE}`,
      icon: Box,
    },
    {
      title: 'Certificates',
      url: `${import.meta.env.VITE_CERTIFICATES_ROUTE}`,
      icon: ShieldCheck,
    },
    {
      title: 'Testimonials',
      url: `${import.meta.env.VITE_TESTIMONIALS_ROUTE}`,
      icon: BookOpenText,
    },
    {
      title: 'Chats',
      url: `${import.meta.env.VITE_CHATS_ROUTE}`,
      icon: MessageCircle,
    },
    {
      title: 'Contacts',
      url: `${import.meta.env.VITE_CONTACTS_ROUTE}`,
      icon: Contact,
    },
    {
      title: 'Settings',
      url: `${import.meta.env.VITE_SETTINGS_ROUTE}`,
      icon: Settings,
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader>
        <Link
          to={`${import.meta.env.VITE_DASHBOARD_ROUTE}`}
          className="flex justify-start items-center gap-1"
        >
          <Logo size={'60'} />
          <SidebarGroupLabel>Dashbaord</SidebarGroupLabel>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      {item.image ? (
                        <LazyLoadImage src={item.image} className="w-[20px]" />
                      ) : (
                        <item.icon />
                      )}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> webGhoul
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <LogOut />
                  <span className="!text-red-600">Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
