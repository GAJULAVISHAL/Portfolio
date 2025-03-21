
import { useState } from "react";

const SkillCard = ({ skill, percentage }: {
  skill: string;
  percentage: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block px-4 py-2 text-white border hover:bg-gradient-to-r from-blue-500 to-pink-500 rounded-full cursor-pointer shadow-lg transition-transform transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {skill}
      {isHovered && (
        <div className="absolute left-1/2 bottom-[-60px] transform -translate-x-1/2 bg-black text-white text-sm p-2 rounded-lg shadow-lg z-50">
          {percentage}%
          <div className="w-20 h-2 bg-gray-700 rounded mt-1">
            <div
              className="h-2 bg-pink-500 rounded"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function SkillsSection() {
  return (
    <div className=" mx-auto p-8 border rounded-xl backdrop-blur-lg">
      <div className="relative mb-12 text-center">
        <h2 className="text-3xl font-bold inline-block text-gray-100">
          My Skills
        </h2>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary"></div>
      </div>
      <div className="mb-10 bg-background/80 hover:backdrop-blur-xl p-6 rounded-xl shadow-lg border border-primary/10 transition-all duration-300 hover:shadow-xl hover:border-white/30">
        <h3 className="text-xl font-semibold mb-4 text-white">Frontend Development</h3>
        <div className=" flex flex-wrap gap-4">
          <SkillCard skill="HTML5" percentage={90} />
          <SkillCard skill="CSS3" percentage={85} />
          <SkillCard skill="JavaScript" percentage={90} />
          <SkillCard skill="TypeScript" percentage={85} />
          <SkillCard skill="React" percentage={90} />
          <SkillCard skill="Next.js" percentage={85} />
          <SkillCard skill="Tailwind CSS" percentage={90} />
        </div>
      </div>
      <div className="mb-10 bg-background/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-secondary/10 transition-all duration-300 hover:shadow-xl hover:border-white/30">
        <h3 className="text-xl font-semibold mb-4 text-white">Backend Development</h3>
        <div className="flex flex-wrap gap-4">
          <SkillCard skill="Node.js" percentage={85} />
          <SkillCard skill="Express" percentage={85} />
          <SkillCard skill="MongoDB" percentage={80} />
          <SkillCard skill="PostgreSQL" percentage={75} />
          <SkillCard skill="REST API" percentage={90} />
        </div>
      </div>

      <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-accent/10 transition-all duration-300 hover:shadow-xl hover:border-white/30">
        <h3 className="text-xl font-semibold mb-4 text-white">Tools & Others</h3>
        <div className="flex flex-wrap gap-4">
          <SkillCard skill="Git" percentage={90} />
          <SkillCard skill="GitHub" percentage={90} />
          <SkillCard skill="Jest" percentage={80} />
          <SkillCard skill="Responsive Design" percentage={90} />\
        </div>
      </div>
    </div>
  );
}