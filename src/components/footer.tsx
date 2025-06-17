import React from "react";
import { Image } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <span className="text-choppi-orange text-3xl font-bold">choppi</span>
            </div>
            <p className="text-gray-400 mb-6">
              Tu solución integral para compras de supermercado y entregas. Fresco, rápido y conveniente.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/choppiapp/?hl=en" className="text-gray-400 hover:text-white transition-colors">
                <Icon icon="lucide:instagram" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/choppiapp/" className="text-gray-400 hover:text-white transition-colors">
                <Icon icon="lucide:linkedin" className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><Link to="/sobre-nosotros" className="text-gray-400 hover:text-white transition-colors" onClick={() => { scrollToTop() }}>Sobre Nosotros</Link></li>
              <li><Link to="/carreras" className="text-gray-400 hover:text-white transition-colors" onClick={() => { scrollToTop() }}>Carreras</Link></li>
              {/* <li><Link to="/prensa" className="text-gray-400 hover:text-white transition-colors" onClick={() => { scrollToTop() }}>Prensa</Link></li> */}
              {/* <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors" onClick={() => { scrollToTop() }}>Blog</Link></li> */}
              <li><Link to="/contacto" className="text-gray-400 hover:text-white transition-colors" onClick={() => { scrollToTop() }}>Contacto</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li><Link to="/centro-de-ayuda" className="text-gray-400 hover:text-white transition-colors" onClick={() => { scrollToTop() }}>Centro de Ayuda</Link></li>
              <li><Link to="/conviertete-en-comprador" className="text-gray-400 hover:text-white transition-colors" onClick={() => { scrollToTop() }}>Conviértete en Chopper</Link></li>
              <li><Link to="/asociate-con-nosotros" className="text-gray-400 hover:text-white transition-colors" onClick={() => { scrollToTop() }}>Conviértete en Aliado</Link></li>
              <li><Link to="/politica-de-privacidad" className="text-gray-400 hover:text-white transition-colors" onClick={() => { scrollToTop() }}>Política de Privacidad</Link></li>
              <li><Link to="/terminos-de-servicio" className="text-gray-400 hover:text-white transition-colors" onClick={() => { scrollToTop() }}>Términos de Servicio</Link></li>
              <li><Link to="/eliminar-cuenta" className="text-gray-400 hover:text-white transition-colors" onClick={() => { scrollToTop() }}>Eliminar Cuenta</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Descarga la App</h3>
            <p className="text-gray-400 mb-4">
              Obtén la app de Choppi para iOS y Android para comenzar a comprar hoy.
            </p>
            <div className="flex flex-row  align-center gap-5">
              <Image
                alt="HeroUI hero Image"
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                style={{ cursor: 'pointer', border: '1px solid #fff', borderRadius: '8px' }}
                width={120}
                onClick={() => window.open("https://apps.apple.com/us/app/choppi/id6636552581", "_blank")}
              />

              <Image
                alt="HeroUI hero Image"
                src="https://www.jcml-tx.org/ebook/get-it-on-google-play-badge.png/@@images/image.png"
                style={{ cursor: 'pointer', border: '1px solid #fff', borderRadius: '8px' }}
                width={135}
                onClick={() => window.open("https://play.google.com/store/apps/details?id=com.choppi.client&pcampaignid=web_share", "_blank")}
              />
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Choppi Inc. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link to="/politica-de-privacidad" className="text-gray-400 hover:text-white text-sm transition-colors" onClick={() => { scrollToTop() }}>Política de Privacidad</Link>
              <Link to="/terminos-de-servicio" className="text-gray-400 hover:text-white text-sm transition-colors" onClick={() => { scrollToTop() }}>Términos de Servicio</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors" onClick={() => { scrollToTop() }}>Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};