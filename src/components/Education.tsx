
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      school: "SRM Institute of Science and Technology",
      degree: "B.Tech in Computer Science and Engineering",
      grade: "CGPA: 9.71",
      period: "2023 - Present",
      location: "Chennai, India"
    },
    {
      school: "SP Higher Secondary School",
      degree: "Higher Secondary Education",
      grade: "Grade: O",
      period: "2021 - 2023",
      location: "Srinagar, India"
    },
    {
      school: "Burn Hall School",
      degree: "Secondary Education",
      grade: "Grade: A+",
      period: "2011 - 2021",
      location: "Srinagar, India"
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-slate-800"
        >
          Education
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-indigo-600" />
                    {edu.school}
                  </h3>
                  <p className="text-indigo-600 font-medium mt-1">{edu.degree}</p>
                  <p className="text-slate-600 mt-1 font-semibold">{edu.grade}</p>
                </div>
                <div className="text-sm text-slate-500 space-y-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
