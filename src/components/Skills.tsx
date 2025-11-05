import { motion } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Progress } from './ui/progress'
import { Smartphone, Database, Cpu, Palette } from 'lucide-react'
import graduationImage from '../assets/graduation.jpg'
import flutterCourseImage from '../assets/flutter-course.webp'

export function Skills() {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      skills: [
        { name: "Flutter", level: 80, color: "from-blue-500 to-cyan-500" },
        { name: "Dart", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "Riverpod", level: 85, color: "from-blue-500 to-indigo-500" },
        { name: "Git", level: 35, color: "from-orange-500 to-yellow-500" },
      ]
    },
    {
      title: "Backend & Tools",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Supabase", level: 70, color: "from-green-500 to-emerald-500" },
        { name: "Firebase", level: 50, color: "from-yellow-500 to-orange-500" },
        { name: "REST APIs", level: 80, color: "from-purple-500 to-violet-500" },
      ]
    },
    {
      title: "IoT & Hardware",
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        { name: "ESP32", level: 70, color: "from-red-500 to-pink-500" },
        { name: "C/C++", level: 70, color: "from-gray-500 to-slate-500" },
        { name: "IoT Integration", level: 85, color: "from-cyan-500 to-blue-500" },
        { name: "Embedded Systems", level: 65, color: "from-green-500 to-teal-500" },
      ]
    },
    {
      title: "Design & Other",
      icon: <Palette className="h-6 w-6" />,
      skills: [
        { name: "Java", level: 80, color: "from-orange-500 to-red-500" },
        { name: "JavaScript", level: 75, color: "from-purple-500 to-pink-500" },
        { name: "Problem Solving", level: 90, color: "from-emerald-500 to-green-500" },
        { name: "Web Development", level: 50, color: "from-pink-500 to-rose-500" },
        // { name: "CorelDRAW", level: 95, color: "from-indigo-500 to-purple-500" },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto p-3 rounded-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-600 w-fit">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="border-none shadow-lg bg-gradient-to-r from-blue-600/5 to-purple-600/5">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Education & Certifications</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-2 flex flex-col items-center">
                  <img src={graduationImage} alt="Graduation Cap" className="object-cover mb-4 rounded-xl mx-auto" style={{ height: '12rem', width: '20rem' }} />
                  <h4 className="font-semibold">Bachelor in Informatics Engineering</h4>
                  <p className="text-muted-foreground text-sm">University of Aleppo, Syria (2019-2025)</p>
                </div>
                <div className="space-y-2 flex flex-col items-center">
                  <img src={flutterCourseImage} alt="Flutter Course Certificate" className="object-cover mb-4 rounded-xl mx-auto" style={{ height: '12rem', width: '20rem' }} />
                  <h4 className="font-semibold">Flutter & Dart – The Complete Guide</h4>
                  <p className="text-muted-foreground text-sm">Udemy Certification</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}