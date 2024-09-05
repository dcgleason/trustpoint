"use client"

import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Brain, ChevronDown, Layers, Menu } from 'lucide-react';
import Modal from '../app/components/Modal'; 
import Image from 'next/image';

export default function AIConsultancyLandingPage() {
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
        setModalMessage('We will be in touch');
        setIsSuccess(true);
      } else {
        console.error('Form submission failed');
        setModalMessage('Something went wrong, bear with us');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setModalMessage('Something went wrong, bear with us');
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
        <title>Trustpoint Consulting Group - Your ServiceNow AI Advantage Starts Here</title>
        <meta name="description" content="Empower your ServiceNow instance with cutting-edge AI solutions. Expert consulting in Now Intelligence, Predictive Intelligence, and AI-powered workflows." />
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
          <h1 className="text-4xl md:text-6xl font-bold text-navy-blue mb-4 tracking-tight">Supercharge your ServiceNow solutions with AI</h1>
          <p className="text-xl md:text-3xl text-light-blue mb-8">Future-proof your workflows & transform your business with our seasoned industry experts.</p>
          <a href="#contact" className="bg-navy-blue text-white py-3 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-light-blue transition-colors inline-flex items-center">
            Take the first step
            <ArrowRight className="ml-2" />
          </a>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={48} className="text-navy-blue" />
          </div>
        </motion.header>

                {/* New Past Clients Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12 md:mb-20 w-full flex flex-col items-center"
        >
            <h3 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-8 w-full text-center">Trusted by</h3>
            <div className="flex justify-center items-center">
            <a href="https://dayos-24.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image
                src="/dayos-transparent.png"
                alt="Dayos"
                width={300}
                height={100}
                className="object-contain"
              />
            </a>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-20 md:mb-40"
          id="about"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-6">Our zone of genius:</h2>
              <p className="text-lg md:text-xl text-navy-blue mb-6">
              We specialize in elevating your ServiceNow platform with cutting-edge AI capabilities, optimizing for increased efficiency and ROI. Our AI experts can help you with:
              </p>
              <a href="#contact" className="inline-flex items-center text-light-blue hover:text-navy-blue transition-colors">
                <span className="text-lg md:text-xl font-semibold">Learn more</span>
                <ArrowRight className="ml-2" />
              </a>
            </div>
            <div className="bg-navy-blue text-white p-6 md:p-8 rounded-lg shadow-xl mt-8 md:mt-0">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">Our ServiceNow AI Solutions</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Database className="text-light-blue mr-4 flex-shrink-0 w-6 h-6 md:w-8 md:h-8" />
                  <span className="text-base md:text-lg">Now Intelligence implementation and optimization</span>
                </li>
                <li className="flex items-start">
                  <Brain className="text-light-blue mr-4 flex-shrink-0 w-6 h-6 md:w-8 md:h-8" />
                  <span className="text-base md:text-lg">Predictive Intelligence and Machine Learning models</span>
                </li>
                <li className="flex items-start">
                  <Layers className="text-light-blue mr-4 flex-shrink-0 w-6 h-6 md:-8 md:h-8" />
                  <span className="text-base md:text-lg">AI-powered workflow automation and optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* New "Our talent comes from" Section */}
              <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="mb-20 md:mb-40 w-full"
              >
                <h3 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-8 w-full text-center">Our professional roots include</h3>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                  <div className="w-48 h-48 flex items-center justify-center">
                    <Image
                      src="/koniag.png"
                      alt="Koniag"
                      width={192}
                      height={192}
                      className="object-contain"
                    />
                  </div>
                  <div className="w-48 h-48 flex items-center justify-center">
                    <Image
                      src="/ibm.png"
                      alt="IBM"
                      width={192}
                      height={192}
                      className="object-contain"
                    />
                  </div>
                </div>
              </motion.section>

        {/* <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-20 md:mb-40"
          id="services"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-8 text-center"></h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
              <h3 className="text-2xl font-semibold text-navy-blue mb-4">RAG + Vctor DB tntegration</h3>
              <p className="text-navy-blue">Enhance your information retrieval systems with Retrieval-Augmented Generation (RAG) and efficiently run vector databases.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
              <h3 className="text-2xl font-semibold text-navy-blue mb-4">LLM fine-tuning & hosting</h3>
              <p className="text-navy-blue">Customize large language models to your specific business needs, improving model accuracyr, relevance, and data security.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-light-blue">
              <h3 className="text-2xl font-semibold text-navy-blue mb-4">Data processing optimization</h3>
              <p className="text-navy-blue">Streamline your data processing pipelines to maximize the performance of your AI and LLM systems.</p>
            </div>
          </div>
        </motion.section> */}

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-20 md:mb-40"
          id="contact"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-8 text-center">Take the first step & get in touch</h2>
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
              <label htmlFor="message" className="block text-navy-blue font-semibold mb-2">What would you like to achieve? </label>
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
              Submit to Connect
            </button>
          </form>
        </motion.section>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        message={modalMessage}
        isSuccess={isSuccess}
      />
      <footer className="bg-navy-blue text-white py-8 mt-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Trustpoint Consulting Group LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}