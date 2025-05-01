import React from 'react';
import { Link } from '@heroui/react';
import { Icon } from '@iconify/react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-choppi-black text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="mb-2">
              <p className="font-bold text-2xl">choppi</p>
            </div>
            <p className="text-gray-400 text-sm">
              Reinventing grocery delivery in Latin America
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Icon icon="lucide:instagram" className="text-xl" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Icon icon="lucide:linkedin" className="text-xl" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Icon icon="lucide:twitter" className="text-xl" />
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-1">
                <Icon icon="lucide:mail" className="inline mr-2" />
                info@choppi.app
              </p>
              <p className="text-gray-500 text-xs">
                &copy; {new Date().getFullYear()} Choppi. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};