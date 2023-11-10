import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "../src/assets/images/png-transparent-logo-html-html5.png",
      level: "Advance",
      count: 80,
      type:"HTML/CSS"
    },
    {
      logo: "../src/assets/images/JavaScript-Logo.png",
      level: "Advance",
      count: 75,
      type: "JS"
    },
    {
      logo: "../src/assets/images/919825.png",
      level: "Beginner",
      count: 40,
      type: "Node JS"
    },
    {
      logo: "../src/assets/images/1611079.png",
      level: "Intemediate",
      count: 60,
      type: "React JS"
    },
    {
      logo: "../src/assets/images/67ed2ac947b9dfcf283521309a304050.png",
      level: "intermediate",
      count: 60,
      type: `Java 8`
    },
    {
      logo: "../src/assets/images/png-clipart-database-computer-icons-others-miscellaneous-company-thumbnail.png",
      level: "intermediate",
      count: 70,
      type: "SQL/MONGO"
    },
    {
      logo: "../src/assets/images/c--logo-icon-6.png",
      level: "intermediate",
      count: 40,
      type: "C/C++"
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <img className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600" src={skill.logo}></img>
                </div>
              </div>
              <p className="text-xl mt-3">{skill.type}<br/>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
