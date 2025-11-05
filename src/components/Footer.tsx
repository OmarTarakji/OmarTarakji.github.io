import { motion } from 'motion/react'
import { Heart, Code, Coffee } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Main content */}
          <div className="space-y-4">
            <h3 className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Omar Tarakji
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Flutter Developer & Software Engineer passionate about creating innovative mobile solutions and IoT integrations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>using</span>
              <Code className="h-4 w-4 text-blue-500" />
              <span>and</span>
              <Coffee className="h-4 w-4 text-amber-600" />
            </div>
            
            <div className="flex items-center space-x-4">
              <span>© 2025 Omar Tarakji. All rights reserved.</span>
            </div>
          </div>

          {/* Back to top button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-600 hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="text-sm">Back to top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}