import { motion } from 'motion/react'
import { Card, CardContent } from './ui/card'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Code, Smartphone, Cpu } from 'lucide-react'
import myImage from '../assets/me.jpg'

export function About() {
  const highlights = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Development",
      description: "Cross-platform apps with Flutter & Dart"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "IoT Integration",
      description: "ESP32 and smart home systems"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Architecture",
      description: "Scalable code with best practices"
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
              <ImageWithFallback
                src={myImage}
                alt="Omar Tarakji - Developer"
                className="relative z-10 rounded-2xl shadow-2xl max-w-md w-full"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl">Flutter Developer & Software Engineer</h3>
              <p className="text-muted-foreground leading-relaxed">
                Flutter Developer and Software Engineer with a passion for building intuitive mobile experiences.
                Skilled in Dart, Java, and Kotlin, with hands-on experience developing cross-platform apps and
                integrating IoT systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Creator of a smart home prototype with real-time sensor feedback and push notifications.
                I focus on clean architecture and scalable solutions that deliver exceptional user experiences.
              </p>
            </div>

            <div className="grid gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-none shadow-sm bg-background/50">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-600">
                          {highlight.icon}
                        </div>
                        <div>
                          <h4 className="mb-1">{highlight.title}</h4>
                          <p className="text-sm text-muted-foreground">{highlight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}