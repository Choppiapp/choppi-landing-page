import React from 'react';
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link } from '@heroui/react';
import { Icon } from '@iconify/react';

export const Navbar: React.FC = () => {
  return (
    <HeroNavbar maxWidth="xl" className="choppi-navbar">
      <NavbarBrand>
        <div className="flex items-center gap-2">
          <p className="font-bold text-2xl text-white">choppi</p>
        </div>
      </NavbarBrand>
      
      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem>
          <Link href="#what-is-choppi" className="text-white/80 hover:text-white">
            SOLUCIÓN
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#why-now" className="text-white/80 hover:text-white">
            MERCADO
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#how-it-works" className="text-white/80 hover:text-white">
            DIFERENCIADORES
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#team" className="text-white/80 hover:text-white">
            EQUIPO
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button 
            as={Link} 
            href="#investor-cta" 
            variant="flat" 
            className="choppi-button choppi-button-primary"
          >
            CONTACTO
          </Button>
        </NavbarItem>
      </NavbarContent>
    </HeroNavbar>
  );
};