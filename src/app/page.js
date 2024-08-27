"use client"

import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Brain, ChevronDown, Layers } from 'lucide-react';

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
    <div className="min-h-screen bg-white text-navy-blue relative overflow-hidden">
      <Head>
        <title>Trustpoint - Elite AI Developers to Supercharge Your Team</title>
        <meta name="description" content="Infuse cutting-edge AI talent into your dev team. Our experts bring bleeding-edge skills to accelerate your AI initiatives. 100% satisfaction guarantee." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-navy-blue text-white py-4 relative z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Trustpoint</div>
          <div className="space-x-4">
            <a href="#about" className="hover:text-light-blue transition-colors">About</a>
            <a href="#services" className="hover:text-light-blue transition-colors">Services</a>
            <a href="#contact" className="hover:text-light-blue transition-colors">Contact</a>
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
          <h1 className="text-6xl font-bold text-navy-blue mb-4 tracking-tight">Level Up Your Dev Team with Elite AI Talent</h1>
          <p className="text-3xl text-light-blue mb-8">Bleeding-Edge Expertise. Immediate Impact. 100% Satisfaction Guaranteed.</p>
          <a href="#contact" className="bg-navy-blue text-white py-3 px-6 rounded-full text-xl font-semibold hover:bg-light-blue transition-colors inline-flex items-center">
            Supercharge Your AI Development
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
          className="mb-40"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-navy-blue mb-6">Infuse Top AI Talent into Your Development Team</h2>
              <p className="text-xl text-navy-blue mb-6">
                Provide your team with AI experts who are fluent in the latest frameworks and methodologies. Our seasoned professionals seamlessly integrate with your team, bringing cutting-edge skills to accelerate your AI initiatives.
              </p>
              <a href="#contact" className="inline-flex items-center text-light-blue hover:text-navy-blue transition-colors">
                <span className="text-xl font-semibold">Get Your AI Talent Boost</span>
                <ArrowRight className="ml-2" />
              </a>
            </div>
            <div className="bg-navy-blue text-white p-8 rounded-lg shadow-xl">
              <h3 className="text-3xl font-semibold mb-6">Our AI Developers Deliver</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Brain className="text-light-blue mr-4 flex-shrink-0 w-8 h-8" />
                  <span className="text-lg">Deep expertise in neural networks, machine learning, and natural language processing</span>
                </li>
                <li className="flex items-start">
                  <Code className="text-light-blue mr-4 flex-shrink-0 w-8 h-8" />
                  <span className="text-lg">Fluency in Python, TensorFlow, PyTorch, and other top AI frameworks</span>
                </li>
                <li className="flex items-start">
                  <Layers className="text-light-blue mr-4 flex-shrink-0 w-8 h-8" />
                  <span className="text-lg">Seamless integration with your existing tech stack and development processes</span>
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
          <h2 className="text-4xl font-semibold text-navy-blue mb-8 text-center">Ready to Accelerate Your AI Development?</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-navy-blue">
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
              <label htmlFor="message" className="block text-navy-blue font-semibold mb-2">Tell us about your AI development needs</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-light-blue rounded-md focus:outline-none focus:ring-2 focus:ring-navy-blue"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-navy-blue text-white font-semibold py-3 px-4 rounded-md hover:bg-light-blue transition-colors text-xl">
              Get Your Elite AI Developers
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