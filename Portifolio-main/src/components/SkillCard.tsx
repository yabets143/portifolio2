import React from 'react';

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  level?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, level = 0 }) => {
  return (
    <div className="relative group p-5 rounded-2xl bg-tech-darker/60 border border-tech-neon/30 
                    shadow-[0_0_15px_rgba(80,250,123,0.1)] 
                    hover:shadow-[0_0_25px_rgba(80,250,123,0.4)] 
                    transition-all duration-500 backdrop-blur-md 
                    hover:-translate-y-1 cursor-pointer overflow-hidden">
      
      {/* Cyber glowing border effect */}
      <div className="absolute inset-0 rounded-2xl border border-tech-neon/40 opacity-0 group-hover:opacity-100 
                      animate-pulse pointer-events-none"></div>

      {/* Icon */}
      <div className="text-4xl mb-3 text-tech-neon group-hover:text-tech-cyan transition-colors duration-300 drop-shadow-[0_0_6px_rgba(80,250,123,0.7)]">
        {icon}
      </div>

      {/* Name */}
      <h3 className="font-semibold text-tech-light tracking-wide text-lg group-hover:text-tech-cyan transition-colors duration-300">
        {name}
      </h3>

      {/* Skill level bar */}
      {level > 0 && (
        <div className="w-full bg-tech-dark/60 rounded-full h-2 mt-4 overflow-hidden border border-tech-neon/20">
          <div 
            className="bg-gradient-to-r from-tech-cyan to-tech-neon h-2 rounded-full 
                       shadow-[0_0_10px_rgba(80,250,123,0.6)] transition-all duration-500"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default SkillCard;
