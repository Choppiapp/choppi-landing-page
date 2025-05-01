import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface MilestoneProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const Milestone: React.FC<MilestoneProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className="flex items-start gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
        <Icon icon={icon} className="text-primary text-xl" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export const Traction: React.FC = () => {
  const milestones = [
    {
      icon: "lucide:smartphone",
      title: "Apps Complete",
      description: "iOS and Android apps fully developed and ready for launch."
    },
    {
      icon: "lucide:credit-card",
      title: "Payment Integration",
      description: "Stripe and PayPal integrated for seamless global transactions."
    },
    {
      icon: "lucide:users",
      title: "Beta Testing",
      description: "Successfully tested with 100+ users across different locations."
    },
    {
      icon: "lucide:calendar",
      title: "Launch: July 15, 2025",
      description: "Official market launch with retail partners secured."
    }
  ];

  return (
    <section id="traction" className="bg-white section-padding">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Traction & Milestones</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              Choppi has made significant progress in development and market preparation, with all technical systems ready for launch.
            </p>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <Milestone 
                  key={index}
                  icon={milestone.icon}
                  title={milestone.title}
                  description={milestone.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-200 rounded-full -z-10"></div>
              <img 
                src="https://img.heroui.chat/image/dashboard?w=600&h=500&u=choppi3" 
                alt="Choppi Dashboard" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};