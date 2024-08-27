"use client"

import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Shield, Zap, ChevronDown } from 'lucide-react';

export default function TrustpointConsulting() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
    <div className="min-h-screen bg-white text-navy relative overflow-hidden">
      <Head>
        <title>Trustpoint Consulting Group LLC - AI Integration Experts</title>
        <meta name="description" content="Harness the power of your organizational data with Trustpoint Consulting Group LLC. We integrate AI systems to transform your business securely." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-navy text-white py-4 relative z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Trustpoint</div>
          <div className="space-x-4">
            <a href="#about" className="hover:text-cobalt transition-colors">About</a>
            <a href="#services" className="hover:text-cobalt transition-colors">Services</a>
            <a href="#contact" className="hover:text-cobalt transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 relative z-10">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-40 h-screen flex flex-col justify-center items-center"
        >
          <h1 className="text-6xl font-bold text-navy mb-4 tracking-tight">Unlock Your Data&apos;s Full Potential in 30 Days</h1>
          <p className="text-3xl text-cobalt mb-8">AI-Powered Solutions for Enterprise SaaS Platforms</p>
          <a href="#contact" className="bg-cobalt text-white py-3 px-6 rounded-full text-xl font-semibold hover:bg-navy transition-colors inline-flex items-center">
            Start Your AI Journey
            <ArrowRight className="ml-2" />
          </a>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={48} className="text-navy" />
          </div>
        </motion.header>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-40"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-navy mb-6">Harness the power of your organizational data</h2>
              <p className="text-xl text-gray-700 mb-6">
              Our AI experts seamlessly integrate your existing systems with cutting-edge AI. We handle the technical complexity, so you can focus on strategic decisions. And with bank-grade security, your data stays as safe as it is valuable.  </p>
              <a href="#contact" className="inline-flex items-center text-cobalt hover:text-navy transition-colors">
                <span className="text-xl font-semibold">Speak to an expert today</span>
                <ArrowRight className="ml-2" />
              </a>
            </div>
            <div className="bg-navy text-white p-8 rounded-lg shadow-xl">
              <h3 className="text-3xl font-semibold mb-6">Our Expertise</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Database className="text-cobalt mr-4 flex-shrink-0 w-8 h-8" />
                  <span className="text-lg">Advanced data integration and systems optimization</span>
                </li>
                <li className="flex items-start">
                  <Zap className="text-cobalt mr-4 flex-shrink-0 w-8 h-8" />
                  <span className="text-lg">Cutting-edge AI implementation for business transformation</span>
                </li>
                <li className="flex items-start">
                  <Shield className="text-cobalt mr-4 flex-shrink-0 w-8 h-8" />
                  <span className="text-lg">Robust security measures to protect your valuable data</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-40"
          id="contact"
        >
          <h2 className="text-4xl font-semibold text-navy mb-8 text-center">Ready to Transform Your Business?</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-navy">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cobalt"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cobalt"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cobalt"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-cobalt text-white font-semibold py-3 px-4 rounded-md hover:bg-navy transition-colors text-xl">
              Request a Consultation
            </button>
          </form>
        </motion.section>
      </main>

      <footer className="bg-navy text-white py-8 mt-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Trustpoint Consulting Group LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}