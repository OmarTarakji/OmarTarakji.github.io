import { motion } from 'motion/react'
import { Button } from './ui/button'
import { ArrowDown, Mail, ExternalLink } from 'lucide-react'
import { AnimatedBackground } from './AnimatedBackground'
import { ImageWithFallback } from './figma/ImageWithFallback'
import codingImage from '../assets/coding.jpg'

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-muted-foreground"
              >
                👋🏻 Hello, I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
              >
                Omar Tarakji
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="space-y-2"
              >
                <h2 className="text-xl md:text-2xl text-muted-foreground">
                  Software Engineer | Flutter Developer
                </h2>
                <p className="text-lg text-muted-foreground max-w-lg">
                  I build intuitive cross-platform mobile apps and IoT-integrated systems.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                View Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex items-center space-x-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for work</span>
              </div>
              <div>📍 Aleppo, Syria</div>
            </motion.div>
          </motion.div>

          {/* Right content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
              <ImageWithFallback
                src={codingImage}
                alt="Mobile app development"
                className="relative z-10 w-full max-w-lg rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}