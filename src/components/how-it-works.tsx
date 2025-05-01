import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="card-shadow h-full border-none">
        <CardBody className="flex flex-col items-center text-center p-6">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
            <Icon icon={icon} className="text-primary text-2xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export const HowItWorks: React.FC = () => {
  const features = [
    {
      icon: "lucide:search",
      title: "Browse & Add to Cart",
      description: "Shop from multiple stores in one place with real-time inventory and pricing."
    },
    {
      icon: "lucide:credit-card",
      title: "Pay from Anywhere",
      description: "Secure payments with multiple options, including cross-border transactions."
    },
    {
      icon: "lucide:map-pin",
      title: "Real-time Tracking",
      description: "Follow your order with live GPS tracking and direct shopper communication."
    },
    {
      icon: "lucide:package",
      title: "Doorstep Delivery",
      description: "Receive groceries at your door with verification and quality guarantee."
    }
  ];

  return (
    <section id="how-it-works" className="bg-white section-padding">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="choppi-section-header">DIFERENCIADORES</p>
          <h2 className="section-title">Cómo funciona Choppi</h2>
          <div className="section-divider mx-auto"></div>
          <p className="section-subtitle mx-auto">
            Choppi makes grocery shopping simple, efficient, and accessible for everyone, whether you're shopping for yourself or family abroad.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-shadow h-full border-none">
                <CardBody className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <Icon icon={feature.icon} className="text-primary text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};