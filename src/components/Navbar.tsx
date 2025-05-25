'use client'
import React, {useEffect} from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

type NavItemProps = {
    activeItem: string;
    setActiveItem: (activeItem: string) => void;
    name: string;
    route: string;
}

const NavItem: React.FC<NavItemProps> = ({ activeItem, setActiveItem, name, route }) => {
    return (
        <Link href={route}>
          <span
              className={`mx-2 cursor-pointer hover:border-b-4 
                ${activeItem === name ? "font-bold" : ""}`}
              onClick={() => setActiveItem(name)}
          >
            {name}
          </span>
        </Link>
    );
};


const Navbar = () => {

    const [activeItem, setActiveItem] = React.useState<string>('');

    const pathname = usePathname();

    useEffect(() => {
        if (pathname === '/' || pathname === '/about') setActiveItem('About');
        if (pathname === '/projects') setActiveItem('Projects');
        if(pathname === '/resume') setActiveItem('Resume');
    }, [pathname])

    return (
        <div className="flex justify-center lg:justify-end px-5 py-3 my-3">
            <div className="flex space-x-5 text-lg lg:text-xl">
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route='/about'></NavItem>
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route='/projects'></NavItem>
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route='/resume'></NavItem>
            </div>
        </div>
    )
}

export default Navbar;