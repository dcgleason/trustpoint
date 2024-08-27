"use client"

import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Brain, ChevronDown, Layers, Menu } from 'lucide-react';

export default function TrustpointConsulting() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white text-navy-blue relative overflow-hidden">
      <Head>
        <title>Trustpoint - AI Automation for Traditional Businesses</title>
        <meta name="description" content="Transform your small business with AI-powered sales and marketing automation. Boost efficiency and growth with our done-for-you solutions." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav className="bg-navy-blue text-white py-4 relative z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Trustpoint</div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <Menu size={24} />
            </button>
          </div>
          <div className={`md:flex space-x-4 ${isMenuOpen ? 'block absolute top-full left-0 right-0 bg-navy-blue p-4' : 'hidden'}`}>
            <a href="#about" className="block md:inline hover:text-light-blue transition-colors py-2">About</a>
            <a href="#services" className="block md:inline hover:text-light-blue transition-colors py-2">Services</a>
            <a href="#pricing" className="block md:inline hover:text-light-blue transition-colors py-2">Pricing</a>
            <a href="#contact" className="block md:inline hover:text-light-blue transition-colors py-2">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 relative z-10">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-20 md:mb-40 min-h-screen flex flex-col justify-center items-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-navy-blue mb-4 tracking-tight">Level-up your sales and marketing with AI-driven automation</h1>
          <p className="text-xl md:text-3xl text-light-blue mb-8">AI solutions that optimise efficiency, reduce costs, and enhance customer engagement. </p>
          <a href="#contact" className="bg-navy-blue text-white py-3 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-light-blue transition-colors inline-flex items-center">
            Transform Your Business Today
            <ArrowRight className="ml-2" />
          </a>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={48} className="text-navy-blue" />
          </div>
        </motion.header>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-20 md:mb-40"
          id="about"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-6">AI Solutions for Traditional Businesses</h2>
              <p className="text-lg md:text-xl text-navy-blue mb-6">
                Unlock the power of AI for your law firm, coaching practice, or small business. Our done-for-you solutions automate tedious tasks, freeing you to focus on growth and client relationships.
              </p>
              <a href="#contact" className="inline-flex items-center text-light-blue hover:text-navy-blue transition-colors">
                <span className="text-lg md:text-xl font-semibold">Discover Your AI Advantage</span>
                <ArrowRight className="ml-2" />
              </a>
            </div>
            <div className="bg-navy-blue text-white p-6 md:p-8 rounded-lg shadow-xl mt-8 md:mt-0">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">Our AI Solutions Deliver</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Brain className="text-light-blue mr-4 flex-shrink-0 w-6 h-6 md:w-8 md:h-8" />
                  <span className="text-base md:text-lg">Intelligent lead capture and nurturing systems</span>
                </li>
                <li className="flex items-start">
                  <Code className="text-light-blue mr-4 flex-shrink-0 w-6 h-6 md:w-8 md:h-8" />
                  <span className="text-base md:text-lg">Automated customer service and support chatbots</span>
                </li>
                <li className="flex items-start">
                  <Layers className="text-light-blue mr-4 flex-shrink-0 w-6 h-6 md:w-8 md:h-8" />
                  <span className="text-base md:text-lg">Seamless integration with your existing tools and processes</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-20 md:mb-40"
          id="services"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-8 text-center">Our AI-Powered Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
              <h3 className="text-2xl font-semibold text-navy-blue mb-4">Lead Capture & Nurturing</h3>
              <p className="text-navy-blue">Automate your lead generation and follow-up processes with AI-driven systems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
              <h3 className="text-2xl font-semibold text-navy-blue mb-4">AI Chatbots</h3>
              <p className="text-navy-blue">Provide 24/7 customer support and qualify leads with intelligent conversational AI.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
              <h3 className="text-2xl font-semibold text-navy-blue mb-4">Workflow Automation</h3>
              <p className="text-navy-blue">Streamline your business processes with custom AI-powered automation solutions.</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-20 md:mb-40"
          id="pricing"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-8 text-center">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
              <h3 className="text-2xl font-semibold text-navy-blue mb-4">Starter</h3>
              <p className="text-3xl font-bold text-navy-blue mb-4">$1,750/mo</p>
              <ul className="text-navy-blue mb-6">
                <li>• 1 AI-powered automation</li>
                <li>• Basic integration support</li>
                <li>• Monthly strategy call</li>
              </ul>
              <a href="#contact" className="block text-center bg-navy-blue text-white py-2 px-4 rounded-md hover:bg-light-blue transition-colors">Get Started</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
              <h3 className="text-2xl font-semibold text-navy-blue mb-4">Pro</h3>
              <p className="text-3xl font-bold text-navy-blue mb-4">$2,750/mo</p>
              <ul className="text-navy-blue mb-6">
                <li>• 3 AI-powered automations</li>
                <li>• Full integration support</li>
                <li>• Bi-weekly strategy calls</li>
                <li>• Custom AI chatbot</li>
              </ul>
              <a href="#contact" className="block text-center bg-navy-blue text-white py-2 px-4 rounded-md hover:bg-light-blue transition-colors">Get Started</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
              <h3 className="text-2xl font-semibold text-navy-blue mb-4">Enterprise</h3>
              <p className="text-3xl font-bold text-navy-blue mb-4">Custom</p>
              <ul className="text-navy-blue mb-6">
                <li>• Unlimited AI automations</li>
                <li>• Priority support</li>
                <li>• Weekly strategy sessions</li>
                <li>• Custom AI development</li>
              </ul>
              <a href="#contact" className="block text-center bg-navy-blue text-white py-2 px-4 rounded-md hover:bg-light-blue transition-colors">Contact Us</a>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-20 md:mb-40"
          id="contact"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-8 text-center">Ready to Automate Your Business?</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-xl border border-navy-blue">
            <div className="mb-4">
              <label htmlFor="name" className="block text-navy-blue font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-light-blue rounded-md focus:outline-none focus:ring-2 focus:ring-navy-blue"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-navy-blue font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-light-blue rounded-md focus:outline-none focus:ring-2 focus:ring-navy-blue"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-navy-blue font-semibold mb-2">Tell us about your business automation needs</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-light-blue rounded-md focus:outline-none focus:ring-2 focus:ring-navy-blue"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-navy-blue text-white font-semibold py-3 px-4 rounded-md hover:bg-light-blue transition-colors text-lg md:text-xl">
              Get Your Custom AI Solution
            </button>
          </form>
        </motion.section>
      </main>

      <footer className="bg-navy-blue text-white py-8 mt-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Trustpoint Consulting Group LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}