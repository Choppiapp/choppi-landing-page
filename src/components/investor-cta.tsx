import React from 'react';
import { Button, Input } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const InvestorCTA: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {
    setError('');
    
    if (!name) {
      setError('Please enter your name');
      return;
    }
    
    if (!email) {
      setError('Please enter your email');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Store in localStorage
    localStorage.setItem('investorLead', JSON.stringify({ name, email, date: new Date() }));
    
    // Reset form and show success
    setSubmitted(true);
    
    // In a real app, you would send this to an API
    // Example:
    // fetch('https://api.choppi.app/investor-leads', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email })
    // });
  };

  return (
    <section id="investor-cta" className="hero-bg section-padding">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/80 uppercase tracking-wider mb-2">CONTACTO</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Interested in Investing in Choppi?</h2>
            <p className="text-lg text-white/90">
              Join us in revolutionizing grocery delivery across Latin America. We're raising $500,000 in our pre-seed round to accelerate growth.
            </p>
          </motion.div>
          
          {submitted ? (
            <motion.div 
              className="bg-white p-8 rounded-xl text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon="lucide:check" className="text-primary text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-4">
                We've received your information and will be in touch shortly with our investor deck and additional details about Choppi's growth plans.
              </p>
            </motion.div>
          ) : (
            <motion.div 
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-4">
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
                
                {error && (
                  <p className="text-danger text-sm">{error}</p>
                )}
                
                <Button 
                  color="primary" 
                  size="lg" 
                  onPress={handleSubmit}
                  className="w-full font-medium"
                >
                  Get in Touch
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to receive communications from Choppi. We respect your privacy and will never share your information.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};