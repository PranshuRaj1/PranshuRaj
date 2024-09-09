import SkillSection from "@/app/about/SkillSection";
import AboutAvatarSVG from "@/app/about/AboutAvatarSVG";
import { IoIosStar } from "react-icons/io";

const About = () => {
  const ACHIEVEMENTS = [
    "Achieved Highest Rating of 1022  on Codeforces",
    "Achieved Highest Rating of 1702  on Leetcode",
    "Global Rank 3066 in Leetcode Weekly Contest 401",
    "Global Rank 3592 in Leetcode Weekly Contest 402",
    "Solved 500+ problems on Leetcode",
    "Solved 200+ problems on Codeforces",
  ];

  return (
    <div className="w-[1200px] max-w-[90%] mx-auto md:mt-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-[60%] flex flex-col justify-center px-8">
          <h1 className="text-2xl md:text-4xl font-bold">About Me</h1>
          <p className="mt-6 text-sm md:text-base">
            Hi Everyone, I am Pranshu Raj from New Delhi, India. I am persuing
            my graduation from VIT Bhopal.
          </p>
          <div className="mt-8 text-sm md:text-base">
            <p>Some of my competitive programming achievements are:</p>
          </div>
          <ul>
            {ACHIEVEMENTS.map((achievement, key) => (
              <li key={key} className="flex gap-3 md:item-center mt-4">
                <div>
                  <IoIosStar size="1.3rem" />
                </div>
                <p className="text-sm md:text-base">{achievement}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-[40%]">
          <AboutAvatarSVG className="w-[100%]" />
        </div>
      </div>
      <div className="my-10">
        <SkillSection />
      </div>
    </div>
  );
};

export default About;
