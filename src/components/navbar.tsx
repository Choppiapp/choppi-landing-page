import React from "react";
import { Button, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import ChoppiLogo from '../assets/logos/choppi-logo.svg';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
            <Image
                alt="Choppi Logo"
                src={ChoppiLogo}
                style={{ cursor: 'pointer' }}
                width={120}
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-choppi-orange font-medium transition-colors">
              Características
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-choppi-orange font-medium transition-colors">
              Cómo Funciona
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Image
              alt="App Store - Choppi"
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              style={{ cursor: 'pointer' }}
              width={120}
              onClick={() => window.open("https://apps.apple.com/us/app/choppi/id6636552581", "_blank")}
            />

            <Image
              alt="Play Store - Choppi"
              src="https://www.jcml-tx.org/ebook/get-it-on-google-play-badge.png/@@images/image.png"
              style={{ cursor: 'pointer' }}
              width={140}
              onClick={() => window.open("https://play.google.com/store/apps/details?id=com.choppi.client&pcampaignid=web_share", "_blank")}
            />
          </div>

          <div className="md:hidden">
            <Button
              isIconOnly
              variant="light"
              onPress={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <Icon icon={isMenuOpen ? "lucide:x" : "lucide:menu"} width={24} />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-gray-100"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#features" className="block py-3 text-gray-700 hover:text-choppi-orange font-medium" onClick={() => setIsMenuOpen(false)}>
              Características
            </a>
            <a href="#how-it-works" className="block py-3 text-gray-700 hover:text-choppi-orange font-medium" onClick={() => setIsMenuOpen(false)}>
              Cómo Funciona
            </a>
            <div className="flex space-x-3 pt-3 justify-center">
              <Image
                alt="App Store - Choppi"
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                style={{ cursor: 'pointer' }}
                width={130}
                onClick={() => window.open("https://apps.apple.com/us/app/choppi/id6636552581", "_blank")}
              />

              <Image
                alt="Play Store - Choppi"
                src="https://www.jcml-tx.org/ebook/get-it-on-google-play-badge.png/@@images/image.png"
                style={{ cursor: 'pointer' }}
                width={145}
                onClick={() => window.open("https://play.google.com/store/apps/details?id=com.choppi.client&pcampaignid=web_share", "_blank")}
              />
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};