"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Book,
  Users,
  Award,
  FileText,
  Download,
  CheckCircle,
  Code,
  FileDown,
  Globe,
} from "lucide-react";

export default function Regulations() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const highlightedTextStyle = "font-semibold text-blue-600";

  return (
    <div className="overflow-hidden">
      {/* Page Header with Gradient */}
      <section className="relative py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

          <svg
            className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ height: "60px" }}
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-primary mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Book className="h-4 w-4 mr-2" />
              <span className="font-medium text-sm">Official Rules</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-600 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              PAIO 2025 Regulations
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Official competition rules and guidelines for the Pan African
              Informatics Olympiad
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex flex-col space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Documents in Multiple Languages */}
            <motion.section
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-green-50 p-8 rounded-xl shadow-sm border border-green-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg text-white mr-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-teal-600 text-transparent bg-clip-text">
                  Official Documents
                </h2>
              </div>

              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Official competition regulations are available in multiple
                  languages:
                </p>

                {/* English Documents */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-700">
                    English
                  </h3>
                  <div className="flex items-center justify-between bg-white/80 p-4 rounded-lg border border-green-100 hover:shadow-md transition-shadow">
                    <span className="text-lg flex items-center">
                      <FileDown className="h-5 w-5 mr-2 text-green-600" />
                      PAMO-2025-Regulations
                    </span>
                    <motion.a
                      href="http://pamo24.ms.wits.ac.za/wp-content/uploads/PAMO-2024-Regulations.docx"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-medium rounded-lg transition-all shadow-sm"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </motion.a>
                  </div>
                </div>

                {/* Arabic Documents */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-700">
                    Arabic / العربية
                  </h3>
                  <div className="flex items-center justify-between bg-white/80 p-4 rounded-lg border border-green-100 hover:shadow-md transition-shadow">
                    <span className="text-lg flex items-center">
                      <FileDown className="h-5 w-5 mr-2 text-green-600" />
                      لوائح-المشاركة-PAMO2024
                    </span>
                    <motion.a
                      href="http://pamo24.ms.wits.ac.za/wp-content/uploads/لوائح-المشاركة-PAMO2024.docx"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-medium rounded-lg transition-all shadow-sm"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </motion.a>
                  </div>

                  <div className="flex items-center justify-between bg-white/80 p-4 rounded-lg border border-green-100 hover:shadow-md transition-shadow">
                    <span className="text-lg flex items-center">
                      <FileDown className="h-5 w-5 mr-2 text-green-600" />
                      PAMO-2024-لوائح-المشاركة-عن-بعد
                    </span>
                    <motion.a
                      href="http://pamo24.ms.wits.ac.za/wp-content/uploads/PAMO-2024-لوائح-المشاركة-عن-بعد.docx"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-medium rounded-lg transition-all shadow-sm"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Eligibility */}
            <motion.section
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-sm border border-blue-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg text-white mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 text-transparent bg-clip-text">
                  Eligibility
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Participation in the Pan African Informatics Olympiad (PAIO)
                  is open to:
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Students enrolled in secondary education or below in an
                      African country during the competition period.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Students must{" "}
                      <span className={highlightedTextStyle}>
                        not have begun their university studies
                      </span>{" "}
                      at the time of the competition.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Students must{" "}
                      <span className={highlightedTextStyle}>
                        be under 20 years of age
                      </span>{" "}
                      on July 1st of the competition year.
                    </p>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Team Composition */}
            <motion.section
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-xl shadow-sm border border-indigo-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-3 rounded-lg text-white mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-700 to-purple-600 text-transparent bg-clip-text">
                  Team Composition
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Each participating country must adhere to the following team
                  structure:
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      <span className={highlightedTextStyle}>
                        Six contestants
                      </span>
                      : Three girls and three boys.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      One team leader responsible for the preparation of the
                      team.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      One deputy team leader to assist the team leader.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Optional observers (as permitted by the host country).
                    </p>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Competition Structure */}
            <motion.section
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-xl shadow-sm border border-purple-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-lg text-white mr-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-purple-600 text-transparent bg-clip-text">
                  Competition Structure
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg">The competition consists of:</p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      <span className={highlightedTextStyle}>
                        One online competition day
                      </span>{" "}
                      with 4 algorithmic problems to be solved in 5 hours.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Contestants will work individually on problems using their
                      own computers.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Solutions will be submitted through an online judging
                      system that provides immediate feedback.
                    </p>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Languages and Tools */}
            <motion.section
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-sm border border-blue-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg text-white mr-4">
                  <Code className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 text-transparent bg-clip-text">
                  Programming Languages
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  The following programming languages are allowed in the
                  competition:
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">C++ (g++ compiler)</p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">Java (OpenJDK)</p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">Python (Python 3)</p>
                  </li>
                </ul>
                <p className="text-lg mt-4">
                  Contestants may use standard libraries provided with these
                  languages, but external libraries are prohibited.
                </p>
              </div>
            </motion.section>

            {/* Scoring and Awards */}
            <motion.section
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-xl shadow-sm border border-indigo-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-3 rounded-lg text-white mr-4">
                  <Award className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-700 to-purple-600 text-transparent bg-clip-text">
                  Scoring and Awards
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Individual and team achievements will be recognized as
                  follows:
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Individual medals are awarded to approximately{" "}
                      <span className={highlightedTextStyle}>50%</span> of
                      contestants:
                    </p>
                    <ul className="list-disc ml-12 mt-2 space-y-2">
                      <li className="text-lg">Gold: top 1/12 of contestants</li>
                      <li className="text-lg">
                        Silver: next 1/6 of contestants
                      </li>
                      <li className="text-lg">
                        Bronze: next 1/4 of contestants
                      </li>
                    </ul>
                  </li>
                  <li className="flex items-start mt-4">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Country rankings are determined by the sum of the scores
                      of all team members.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Special awards may be given for outstanding solutions to
                      specific problems.
                    </p>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Code of Conduct */}
            <motion.section
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-xl shadow-sm border border-purple-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-lg text-white mr-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-purple-600 text-transparent bg-clip-text">
                  Code of Conduct
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  All participants are expected to adhere to the following code
                  of conduct:
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Participants must act with integrity and honesty at all
                      times.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Any form of cheating or plagiarism will result in
                      immediate disqualification.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Participants must treat others with respect and courtesy.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Any form of harassment or discrimination will not be
                      tolerated.
                    </p>
                  </li>
                </ul>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
