"use client"

import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Code, Smartphone, ChevronDown, Menu, CheckCircle, DollarSign, Clock, Zap } from 'lucide-react';
import Modal from '../app/components/Modal';
import Image from 'next/image';
export default function TrustpointConsultingLandingPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setName('');
        setEmail('');
        setMessage('');
        setModalMessage("Thank you for reaching out. We'll be in touch soon to schedule your free consultation!");
        setIsSuccess(true);
      } else {
        console.error('Form submission failed');
        setModalMessage('Oops! Something went wrong. Please try again later.');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setModalMessage('Oops! Something went wrong. Please try again later.');
      setIsSuccess(false);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white text-navy-blue relative overflow-hidden">
      <Head>
        <title>Trustpoint Consulting | AI to market your business</title>
        <meta name="description" content="Cut through the noise and unlock unrealized ROI with Trustpoint Consulting and AI. We deliver AI-powered solutions for start-ups and SMB's...kinda like your own personal 'AI sherpas' for your AI journey." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav className="bg-navy-blue text-white py-4 relative z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Trustpoint Consulting</div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <Menu size={24} />
            </button>
          </div>
          <div className={`md:flex space-x-4 ${isMenuOpen ? 'block absolute top-full left-0 right-0 bg-navy-blue p-4' : 'hidden'}`}>
            <a href="#offer" className="block md:inline hover:text-light-blue transition-colors py-2">Offer</a>
            <a href="#benefits" className="block md:inline hover:text-light-blue transition-colors py-2">Benefits</a>
            {/* <a href="#contact" className="block md:inline hover:text-light-blue transition-colors py-2">Contact</a> */}
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
          <h1 className="text-4xl md:text-6xl font-bold text-navy-blue mb-4 tracking-tight">Large Language Models &lt; Large Profit Models </h1>
          <div className="mb-8"></div>
          <p className="text-xl md:text-3xl text-light-blue mb-8 italic">AI sales & customer service chatbots built on models trained on <span className="underline">your</span> data. Unconditional guarantee.</p>
          <a href="https://calendly.com/danny-c-gleason/30min" className="bg-navy-blue text-white py-3 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-light-blue transition-colors inline-flex items-center">
            Let&apos;s chat
            <ArrowRight className="ml-2" />
          </a>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={48} className="text-navy-blue" />
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-16 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-12 text-center">
              Trusted by
            </h2>
            <div className="flex justify-center">
              <div className="w-48 h-48 relative">
                <a href="https://www.dayos.ai" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/dayos-transparent.png"
                    alt="Dayos Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </a>
                
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-20 md:mb-40 py-20 bg-gradient-to-b from-white to-gray-100"
          id="offer"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-12 text-center">AI built for <span className="underline">ROI</span></h2>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h3 className="text-3xl font-bold text-navy-blue mb-8">We Promise Results:</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-4 flex-shrink-0 w-8 h-8" />
                    <div>
                      <span className="text-xl font-semibold block mb-2">Increase lead quality</span>
                      <p className="text-gray-700">AI chatbots (and AI agents) we implement for you are trained on your data, so they can answer questions specific to your business and products, and even book appointments with the right people for you.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-4 flex-shrink-0 w-8 h-8" />
                    <div>
                      <span className="text-xl font-semibold block mb-2">Risk-Free Guarantee</span>
                      <p className="text-gray-700">Get our monthly implementation and support fee refuned at any time if you aren't at any time satisfied. We&apos;re that confident in our ability to deliver measurable results quickly.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-navy-blue mb-8">Our Solution:</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <Smartphone className="text-light-blue mr-4 flex-shrink-0 w-8 h-8" />
                    <div>
                      <span className="text-xl font-semibold block mb-2">Custom-build AI Chatbot & AI Agents that you own & control</span>
                      <p className="text-gray-700">We quickly integrate a custom-built AI chatbot (with AI agents) trained on your data, with your existing tech stack on your landing page or online storefront and have it automate routine tasks such as booking appointments, processing orders, and handling FAQs for you.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-light-blue mr-4 flex-shrink-0 w-8 h-8" />
                    <div>
                      <span className="text-xl font-semibold block mb-2">Your Data, More Impactful Conversations</span>
                      <p className="text-gray-700">Your AI chatbot & AI agents that we build for you are trained on your company&apos;s unique knowledge and product offerings, so the AI is completely personlized to your business...creating relevant and impactful chat experiences for your prospects and customers.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-16 text-center">
              <a href="https://calendly.com/danny-c-gleason/30min" className="inline-block bg-navy-blue text-white text-xl font-bold py-4 px-8 rounded-full hover:bg-light-blue transition-colors duration-300 transform hover:scale-105">
                Let&apos;s chat
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-20 md:mb-40"
          id="benefits"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-8 text-center">What you get</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
              <DollarSign className="text-light-blue mb-4 w-12 h-12" />
              <h3 className="text-2xl font-semibold text-navy-blue mb-4">Risk-Free Guarantee</h3>
              <p className="text-navy-blue">Get our monthly implementation and support fee refuned at any time if you aren't at any time satisfied. </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
              <Clock className="text-light-blue mb-4 w-12 h-12" />
              <h3 className="text-2xl font-semibold text-navy-blue mb-4">Custom-built AI Chatbot</h3>
              <p className="text-navy-blue">Get a custom-built AI Chatbot, integrated with your existing CRM, trained it on your company and product knowledge, meant to drive increased bookings of qualified leads.</p> 
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
              <Code className="text-light-blue mb-4 w-12 h-12" />
              <h3 className="text-2xl font-semibold text-navy-blue mb-4">Dedicated Technical Training</h3>
              <p className="text-navy-blue">If you have a team, we&apos;ll train them on how to use your AI chatbot and AI agents.</p>
            </div>
          </div>
        </motion.section>

        {/* <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-20 md:mb-40"
          id="contact"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-8 text-center">Ready to get started?</h2>
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
              <label htmlFor="message" className="block text-navy-blue font-semibold mb-2">I want to...</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-light-blue rounded-md focus:outline-none focus:ring-2 focus:ring-navy-blue"
                rows="4"
                required
              ></textarea>
            </div>
            <a href="https://calendly.com/danny-c-gleason/30min" className="block w-full bg-navy-blue text-white font-semibold py-3 px-4 rounded-md hover:bg-light-blue transition-colors text-lg md:text-xl text-center">
              Talk to an expert
            </a>
          </form>
        </motion.section> */}
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        message={modalMessage}
        isSuccess={isSuccess}
      />
      
      <footer className="bg-navy-blue text-white py-8 mt-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Trustpoint Consulting. All rights reserved.</p>
          <p className="mt-2"></p>
        </div>
      </footer>
    </div>
  );
}