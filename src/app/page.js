'use client'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion, useAnimation } from 'framer-motion'
import { ArrowRight, Code, Database, Brain, ChevronDown, Layers, Menu, Star } from 'lucide-react'
import Modal from '../app/components/Modal'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

export default function AIConsultancyLandingPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        console.log('Form submitted successfully')
        setName('')
        setEmail('')
        setMessage('')
        setModalMessage('We will be in touch')
        setIsSuccess(true)
      } else {
        console.error('Form submission failed')
        setModalMessage('Something went wrong, bear with us')
        setIsSuccess(false)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setModalMessage('Something went wrong, bear with us')
      setIsSuccess(false)
    }
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div className="min-h-screen bg-white text-navy-blue relative overflow-hidden">
      <Head>
        <title>Trustpoint Consulting Group - Your AI Advantage Starts Here</title>
        <meta name="description" content="Empower your business with cutting-edge AI solutions. Expert consulting in RAG, LLM fine-tuning, and data processing optimization." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav className="bg-navy-blue text-white py-4 relative z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Trustpoint Consulting Group</div>
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
          <h1 className="text-4xl md:text-6xl font-bold text-navy-blue mb-4 tracking-tight">
            Build cost-effective, high ROI AI systems. Without the learning curve.
          </h1>
          <p className="text-xl md:text-3xl text-light-blue mb-8">
            Flat, hourly rates. Seasoned technical talent. Specialized in start-ups and SMBs.
          </p>
          <motion.a
            href="#contact"
            className="bg-navy-blue text-white py-3 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-light-blue transition-colors inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Take the first step
            <ArrowRight className="ml-2" />
          </motion.a>
          <motion.div
            className="mt-16"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={48} className="text-navy-blue" />
          </motion.div>
        </motion.header>

        <motion.section
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="mb-12 md:mb-20 w-full flex flex-col items-center"
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-8 w-full text-center">Trusted by</h3>
          <div className="flex justify-center items-center">
            <motion.a
              href="https://dayos-24.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/dayos-transparent.png"
                alt="Dayos"
                width={300}
                height={100}
                className="object-contain"
              />
            </motion.a>
          </div>
        </motion.section>

        <motion.section
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="mb-20 md:mb-40"
          id="about"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-6">Our zone of genius:</h2>
              <p className="text-lg md:text-xl text-navy-blue mb-6">
                We are great at helping companies get clarity on the AI tech stack that fits their needs, optimizing for increased return on investment. Our AI experts can help you with:
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center text-light-blue hover:text-navy-blue transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg md:text-xl font-semibold">Learn more</span>
                <ArrowRight className="ml-2" />
              </motion.a>
            </div>
            <motion.div
              className="bg-navy-blue text-white p-6 md:p-8 rounded-lg shadow-xl mt-8 md:mt-0"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">Our AI expertise</h3>
              <ul className="space-y-6">
                <motion.li
                  className="flex items-start"
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Database className="text-light-blue mr-4 flex-shrink-0 w-6 h-6 md:w-8 md:h-8" />
                  <span className="text-base md:text-lg">RAG and vector database integrations</span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Brain className="text-light-blue mr-4 flex-shrink-0 w-6 h-6 md:w-8 md:h-8" />
                  <span className="text-base md:text-lg">LLM fine-tuning and custom SLM generation</span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Layers className="text-light-blue mr-4 flex-shrink-0 w-6 h-6 md:w-8 md:h-8" />
                  <span className="text-base md:text-lg">Data processing & optimization for LLMs </span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="mb-20 md:mb-40 w-full"
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-navy-blue mb-8 w-full text-center">Our professional roots include</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <motion.div
              className="w-48 h-48 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 0 }}
              whileTap={{ scale: 0.3 }}
            >
              <Image
                src="/koniag.png"
                alt="Koniag"
                width={192}
                height={192}
                className="object-contain"
              />
            </motion.div>
            <motion.div
              className="w-48 h-48 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 0 }}
              whileTap={{ scale: 0.3 }}
            >
              <Image
                src="/ibm.png"
                alt="IBM"
                width={192}
                height={192}
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          ref={ref}
          initial="hidden"
          animate={controls}
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
            <motion.button
              type="submit"
              className="w-full bg-navy-blue text-white font-semibold py-3 px-4 rounded-md hover:bg-light-blue transition-colors text-lg md:text-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit to Connect
            </motion.button>
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

      {/* Fun floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 text-light-blue opacity-20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Code size={48} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-10 text-light-blue opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Brain size={48} />
      </motion.div>
      <motion.div
        className="absolute top-3/4 left-1/4 text-light-blue opacity-20"
        animate={{
          x: [0, 20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Database size={48} />
      </motion.div>
    </div>
  )
}