import React from 'react';
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const Hero: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = () => {
    if (name && email) {
      localStorage.setItem('investorLead', JSON.stringify({ name, email, date: new Date() }));
      setSubmitted(true);
    }
  };

  return (
    <section className="hero-bg min-h-screen flex items-center pt-24 pb-16">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div 
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/80 uppercase tracking-wider mb-2">CHOPPI DEVELOPMENTS</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              El futuro del mercado, hoy
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Choppi es una startup venezolana a punto de revolucionar el mercado de delivery con una aplicación móvil innovadora que conecta a los consumidores con supermercados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                color="default" 
                size="lg" 
                onPress={onOpen}
                className="choppi-button choppi-button-primary"
              >
                COMIENZA
                <Icon icon="lucide:arrow-down" className="ml-2" />
              </Button>
              <Button 
                as="a" 
                href="#how-it-works" 
                variant="bordered" 
                size="lg"
                className="choppi-button choppi-button-secondary"
              >
                Conoce más
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 hidden md:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Intentionally left empty for the background pattern */}
          </motion.div>
        </div>
      </div>

      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {submitted ? "Thank you for your interest!" : "Get Investor Information"}
              </ModalHeader>
              <ModalBody>
                {submitted ? (
                  <div className="text-center py-4">
                    <div className="mb-4 flex justify-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon icon="lucide:check" className="text-primary text-2xl" />
                      </div>
                    </div>
                    <p className="text-lg font-medium mb-2">We've received your request</p>
                    <p className="text-gray-600">Our team will be in touch with you shortly with more information about Choppi's investment opportunities.</p>
                  </div>
                ) : (
                  <>
                    <p className="text-gray-600 mb-4">
                      Please provide your details to receive our investor deck and additional information about Choppi's growth plans.
                    </p>
                    <div className="flex flex-col gap-4">
                      <Input
                        label="Full Name"
                        placeholder="Enter your name"
                        value={name}
                        onValueChange={setName}
                      />
                      <Input
                        label="Email Address"
                        placeholder="Enter your email"
                        type="email"
                        value={email}
                        onValueChange={setEmail}
                      />
                    </div>
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                {!submitted && (
                  <>
                    <Button color="default" variant="light" onPress={onClose}>
                      Cancel
                    </Button>
                    <Button color="primary" onPress={handleSubmit}>
                      Submit
                    </Button>
                  </>
                )}
                {submitted && (
                  <Button color="primary" onPress={onClose}>
                    Close
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};