import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, Smartphone, Home, Gamepad2 } from "lucide-react";
import donutsImage from "../assets/donuts.png";
import smartHomeImage from "../assets/smart-home.jpg";

export function Projects() {
  const projects = [
    {
      title: "Smart Home System",
      subtitle: "Graduation Project (2024-2025)",
      description:
        "Full-stack system integrating Flutter, Supabase, and ESP32 with real-time sensor monitoring, device control, and push notifications. Features multilingual UI (English/Arabic) and scalable architecture using Riverpod + Repository Pattern.",
      image: smartHomeImage,
      tags: ["Flutter", "Dart", "Supabase", "ESP32", "IoT", "Riverpod", "FCM"],
      icon: <Home className="h-6 w-6" />,
      features: [
        "Real-time sensor monitoring",
        "Device control interface",
        "Push notifications (FCM)",
        "Multilingual support",
        "ESP32 integration",
      ],
      apkUrl: "https://github.com/OmarTarakji/smart_home_app/releases/download/v1.2.2/smart-home-v1.2.2.apk",
      codeUrl: "https://github.com/OmarTarakji/smart_home_app",
    },
    {
      title: "Match the Donuts!",
      subtitle: "Personal Project",
      description:
        "Flutter-based puzzle game featuring randomized rounds, health system, and background music. Demonstrates advanced game logic, state management, and engaging UI design with smooth animations.",
      image: donutsImage,
      tags: ["Flutter", "Dart", "Game Development", "State Management"],
      icon: <Gamepad2 className="h-6 w-6" />,
      features: [
        "Randomized game rounds",
        "Health system mechanics",
        "Background music & SFX",
        "Score tracking",
      ],
      apkUrl: "https://github.com/OmarTarakji/match_the_donuts/releases/download/1.0.0/match-the-donuts-v1.0.0.apk",
      codeUrl: "https://github.com/OmarTarakji/match_the_donuts",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my latest work in mobile development and IoT
            integration
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 p-2 rounded-lg bg-background/90 backdrop-blur-sm">
                    <div className="text-blue-600">{project.icon}</div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <p className="text-sm text-blue-600 mt-1">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm mb-2 text-muted-foreground">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <a href={project.apkUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" variant="gradient" className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Download APK
                      </Button>
                    </a>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" variant="outline" className="w-full">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            More projects coming soon! Currently working on exciting new mobile
            apps and IoT integrations.
          </p>
          <a href="https://github.com/OmarTarakji" target="_blank" rel="noopener noreferrer">
            <Button variant="gradient" size="lg">
              <Smartphone className="w-4 h-4 mr-2" />
              View All Projects
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
