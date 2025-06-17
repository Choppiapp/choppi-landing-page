import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { AboutUs } from "./pages/about-us";
import { Careers } from "./pages/careers";
import { Press } from "./pages/press";
import { Blog } from "./pages/blog";
import { Contact } from "./pages/contact";
import { HelpCenter } from "./pages/help-center";
import { BecomeChopperPage } from "./pages/become-chopper";
import { PartnerWithUs } from "./pages/partner-with-us";
import { PrivacyPolicy } from "./pages/privacy-policy";
import { TermsOfService } from "./pages/terms-of-service";
import { CookiesPolicy } from "./pages/cookies-policy";
import { NotFound } from "./pages/not-found";
import { DeleteAccount } from "./pages/delete-account";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre-nosotros" element={<AboutUs />} />
        <Route path="carreras" element={<Careers />} />
        <Route path="prensa" element={<Press />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="centro-de-ayuda" element={<HelpCenter />} />
        <Route path="conviertete-en-comprador" element={<BecomeChopperPage />} />
        <Route path="asociate-con-nosotros" element={<PartnerWithUs />} />
        <Route path="politica-de-privacidad" element={<PrivacyPolicy />} />
        <Route path="terminos-de-servicio" element={<TermsOfService />} />
        <Route path="cookies" element={<CookiesPolicy />} />
        <Route path="eliminar-cuenta" element={<DeleteAccount />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}