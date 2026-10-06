import { SiLinux, SiPython, SiWireshark, SiGnubash, SiMetasploit } from "react-icons/si";
import { FaServer, FaWindows } from "react-icons/fa";

// استيراد الصور مباشرة لتحديد مساراتها النهائية تلقائياً بواسطة Next.js
import burpSuiteImg from "../public/Burpsuite.png";
import nmapImg from "../public/Nmap.png";
import nessusImg from "../public/Nessus.png";
import nucleiImg from "../public/Nuclie.png";

const tools = [
  { name: "Linux", icon: <SiLinux className="w-14 h-14 text-amber-400" /> },
  { name: "Python", icon: <SiPython className="w-14 h-14 text-blue-400" /> },
  { name: "Wireshark", icon: <SiWireshark className="w-14 h-14 text-sky-400" /> },
  { name: "Bash", icon: <SiGnubash className="w-14 h-14 text-slate-100" /> },
  { name: "Windows Server", icon: <FaWindows className="w-14 h-14 text-blue-500" /> },
  { 
    name: "Burp Suite", 
    icon: (
      <img 
        src={burpSuiteImg.src} 
        alt="Burp Suite" 
        className="w-14 h-14 object-contain"
      />
    ) 
  },
  { 
    name: "Nmap", 
    icon: (
      <img 
        src={nmapImg.src} 
        alt="Nmap" 
        className="w-14 h-14 object-contain"
      />
    ) 
  },
  { name: "Active Directory", icon: <FaServer className="w-14 h-14 text-purple-400" /> },
  { 
    name: "Nessus", 
    icon: (
      <img 
        src={nessusImg.src} 
        alt="Nessus" 
        className="w-14 h-14 object-contain"
      />
    ) 
  },
  { name: "Metasploit", icon: <SiMetasploit className="w-14 h-14 text-blue-600" /> },
  { 
    name: "Nuclei", 
    icon: (
      <img 
        src={nucleiImg.src} 
        alt="Nuclei" 
        className="w-14 h-14 object-contain"
      />
    ) 
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-14">
          <span className="text-[#ef4444] font-mono text-xs tracking-[0.25em] uppercase block mb-3 font-semibold">
            02 / SKILLS & TECHNOLOGIES
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Tools of my <span className="text-[#ef4444]">craft.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div 
              key={tool.name} 
              className="flex flex-col items-center justify-center p-8 bg-[#0a0a0c] border border-[#27272a] rounded-2xl hover:border-[#ef4444] hover:bg-[#140a0c] transition-all duration-300 group min-h-[190px]"
            >
              <div className="mb-5 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <span className="text-base font-semibold text-[#e4e4e7] group-hover:text-white transition-colors text-center">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
