"use client"

import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Brain, ChevronDown, Layers, Menu } from 'lucide-react';

export default function AIConsultancyLandingPage() {
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
        <title>Trustpoint Consulting Group LLC - Integrate AI into Your Processes</title>
        <meta name="description" content="Empower your business with cutting-edge AI solutions. Expert consulting in RAG, LLM fine-tuning, and data processing optimization." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav className="bg-navy-blue text-white py-4 relative z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Trustpoint Consulting Group LLC</div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <Menu size={24} />
            </button>
          </div>
          <div className={`md:flex space-x-4 ${isMenuOpen ? 'block absolute top-full left-0 right-0 bg-navy-blue p-4' : 'hidden'}`}>
            <a href="#about" className="block md:inline hover:text-light-blue transition-colors py-2">About</a>
            <a href="#services" className="block md:inline hover:text-light-blue transition-colors py-2">Services</a>
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
          <h1 className="text-4xl md:text-6xl font-bold text-navy-blue mb-4 tracking-tight">Integrate AI into Your Business Processes</h1>
          <p className="text-xl md:text-3xl text-light-blue mb-8">Unlock the power of AI with our expert consulting and implementation services</p>
          <a href="#contact" className="bg-navy-blue text-white py-3 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-light-blue transition-colors inline-flex items-center">
            Transform Your Business with AI
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
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-6">Harness the Power of AI for Your Business</h2>
              <p className="text-lg md:text-xl text-navy-blue mb-6">
                We specialize in integrating cutting-edge AI solutions into your existing processes, helping you stay ahead in today&apos;s competitive landscape.
              </p>
              <a href="#contact" className="inline-flex items-center text-light-blue hover:text-navy-blue transition-colors">
                <span className="text-lg md:text-xl font-semibold">Discover Your AI Potential</span>
                <ArrowRight className="ml-2" />
              </a>
            </div>
            <div className="bg-navy-blue text-white p-6 md:p-8 rounded-lg shadow-xl mt-8 md:mt-0">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">Our AI Expertise</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Database className="text-light-blue mr-4 flex-shrink-0 w-6 h-6 md:w-8 md:h-8" />
                  <span className="text-base md:text-lg">RAG and Vector Database Integration</span>
                </li>
                <li className="flex items-start">
                  <Brain className="text-light-blue mr-4 flex-shrink-0 w-6 h-6 md:w-8 md:h-8" />
                  <span className="text-base md:text-lg">LLM Fine-tuning</span>
                </li>
                <li className="flex items-start">
                  <Layers className="text-light-blue mr-4 flex-shrink-0 w-6 h-6 md:w-8 md:h-8" />
                  <span className="text-base md:text-lg">Data Processing Optimization for LLMs</span>
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
          <h2 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-8 text-center">Our AI Consulting Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
              <h3 className="text-2xl font-semibold text-navy-blue mb-4">RAG + Vector DB Integration</h3>
              <p className="text-navy-blue">Enhance your information retrieval systems with Retrieval-Augmented Generation (RAG) and efficient vector databases.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
              <h3 className="text-2xl font-semibold text-navy-blue mb-4">LLM Fine-tuning</h3>
              <p className="text-navy-blue">Customize large language models to your specific business needs, improving accuracy and relevance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
              <h3 className="text-2xl font-semibold text-navy-blue mb-4">Data Processing Optimization</h3>
              <p className="text-navy-blue">Streamline your data processing pipelines to maximize the performance of your AI and LLM systems.</p>
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
          <h2 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-8 text-center">Ready to Transform Your Business with AI?</h2>
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
              <label htmlFor="message" className="block text-navy-blue font-semibold mb-2">Tell us about your AI integration needs</label>
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