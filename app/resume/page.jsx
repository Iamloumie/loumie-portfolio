"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiPython, SiC, SiNextdotjs, SiShell } from 'react-icons/si';


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";


import { motion } from 'framer-motion';
import Image from 'next/image';

//about data
const about ={
  title: "About Me",
  description: "I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. My expertise lies in front-end technologies, but I also have experience in back-end development.",
  info: [
    {
      fieldName: "Name 👨", 
      fieldValue: "Adedamola Lawal",
    },
    {
      fieldName: "Phone 📞",
      fieldValue: "(+234) 904 820 7534",
    },
    {
      fieldName: "Experience ⏲",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nationality 🏳",  
      fieldValue: "Nigerian 🇳🇬",
    },
    {
      fieldName: "Whatsapp 💬",
      fieldValue: "(+234) 703 941 7051",
    },
    {
      fieldName: "Email 📧",
      fieldValue: "adedamola001@gmail.com",
    },
    {
      fieldName: "Freelance 🖊", 
      fieldValue: "Available",
    },
    {
      fieldName: "Language 🌍",
      fieldValue: "English",
    },
  ]
};

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My Experience",
  description: "I specialize in frontend development, crafting responsive and user-centered interfaces. While I have some exposure to backend technologies, my core strength lies in building seamless, interactive, and scalable web experiences.",
  items: [
    {
      company: "ALX Africa",
      position: "Web Developer - Track Project",
      duration: "Jan 2025 - May 2025",
    },
    {
      company: "Self-Initiated Projects",
      position: "Web Developer",
      duration: "2024 - Present",
    },
    {
      company: "ALX Africa",
      position: "UI/UX Designer - Foundation Project",
      duration: "Winter 2024",
    },
    {
      company: "Construction startup",
      position: "Freelance Web Developer",
      duration: "2023 - 2024",
    },
    
  ]
};

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: "My Education",
  description: "Blending a background in Software Engineering training with Physics Electronics, I’ve developed a solid grasp of web technologies. My education emphasizes practical skills in building performant, scalable, and user-centric web applications.",
  items: [
    {
      institution: "ALX Africa",
      degree: "Software Engineering - FrontEnd Track",
      duration: "Oct 2023 - July 2025",
    },
    {
      institution: "W3Schools",
      degree: "Front-end Track",
      duration: "2024",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2023 - 2024",
    },
    {
      institution: "Codecademy",
      degree: "UI/UX Design",
      duration: "2023",
    },
    {
      institution: "Federal Polytechnic, Ilaro",
      degree: "HND (Physics Electronics)",
      duration: "2019 - 2021",
    },
    {
      institution: "Federal Polytechnic, Ede",
      degree: "ND (Science Lab Tech)",
      duration: "2014 - 2016",
    },
    
  ]
};

// skills data
const skills = {
  title: "My Skills",
  description: "From clean UI to smart logic, I blend design sense with technical skill to build fast, functional web experiences.",
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiC />,
      name: "C",
    },
    {
      icon: <SiPython />,
      name: "Python",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiShell />,
      name: "Shell Scripting",
    }
  ]
};


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}

      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-row items-center gap-6 justify-center xl:justify-start xl:mx-0">
                  <Image src={experience.icon} width={27} height={27} alt="badge" /> 
                  <h3 className="text-4xl font-bold">
                    {experience.title}
                  </h3>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="scrollbar-custom max-h-[400px] overflow-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-row items-center gap-6 justify-center xl:justify-start xl:mx-0">
                  <Image src={education.icon} width={27} height={27} alt="badge" /> 
                  <h3 className="text-4xl font-bold">
                    {education.title}
                  </h3>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="scrollbar-custom max-h-[400px] overflow-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skilllist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>

                            <TooltipContent className="capitalize">
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume