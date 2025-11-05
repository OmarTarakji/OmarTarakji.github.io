import { motion } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Mail, Phone, MapPin, Linkedin, Send, ExternalLink, Loader2, CheckCircle, XCircle } from 'lucide-react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const form = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return

    setStatus('sending')

    // IMPORTANT: Replace with your EmailJS credentials
    const serviceID = 'service_shru889';
    const templateID = 'template_6gpek9n';
    const publicKey = 'E-0CNJNPnkU-MRsAk';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      }, (error) => {
        console.log('FAILED...', error.text);
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "o.tarakji2001@gmail.com",
      href: "mailto:o.tarakji2001@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+963 997 518 725",
      href: "tel:+963997518725"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Aleppo, Syria",
      href: null
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "omar-tarakji",
      href: "https://linkedin.com/in/omar-tarakji"
    }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ready to bring your mobile app ideas to life? Let's discuss your next project!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-4">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a mobile app idea, need IoT integration, or just want to chat about technology, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-none shadow-sm bg-background/50 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center space-x-4 hover:text-blue-600 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-600 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-colors">
                            {info.icon}
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{info.label}</p>
                            <p className="flex items-center space-x-2">
                              <span>{info.value}</span>
                              {info.href.startsWith('http') && <ExternalLink className="h-3 w-3" />}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center space-x-4">
                          <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-600">
                            {info.icon}
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{info.label}</p>
                            <p>{info.value}</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-gradient-to-r from-blue-600/5 to-purple-600/5 border border-blue-600/10"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Available for new opportunities</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently open to freelance projects and full-time positions in mobile development and IoT.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      required
                      disabled={status === 'sending'}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity disabled:opacity-50"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' && <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</>}
                    {status === 'success' && <><CheckCircle className="w-4 h-4 mr-2" /> Message Sent!</>}
                    {status === 'error' && <><XCircle className="w-4 h-4 mr-2" /> Try Again</>}
                    {status === 'idle' && <><Send className="w-4 h-4 mr-2" /> Send Message</>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}