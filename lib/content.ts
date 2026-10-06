// lib/content.ts

export const site = {
  name: "AHMED MAgdy",
  shortName: "AM",
  title: "Cybersecurity Student | Junior Penetration Tester",
  secondary: "Web Application • Network • Security Testing",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  status: { available: true, text: "Open to Security Opportunities" },
  email: "ahmed.magdy.security@gmail.com",
  phone: "+20 121 171 3432",
  linkedin: "https://linkedin.com/in/ahmedmagdy-sec",
  github: "",
  hackerone: "",
  location: "Alexandria, Egypt",
  stack: ["Burp Suite", "Nmap", "ffuf", "Nuclei", "Metasploit", "Nessus", "Linux", "Active Directory"],
};

export const nav = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Certifications", "#certifications"],
].map(([label, href]) => ({ label, href }));

export const tools = [
  { 
    name: "Burp Suite", 
    icon: "" 
  },
  { 
    name: "Nmap", 
    icon: "https://cdn.simpleicons.org/wireshark" 
  },
  { 
    name: "Linux", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" 
  },
  { 
    name: "Python", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
  },
  { 
    name: "Bash", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" 
  },
  // باقي الأدوات...
];

export const projects = [
  {
    id: "webapp",
    name: "Web Application Security Assessment & Hardening",
    category: "Penetration Testing · Web Security",
    date: "04/2026",
    objective: "Security assessment of a vulnerable web application, followed by remediation and validation.",
    approach: "Performed penetration testing and deployed a Web Application Firewall (WAF) with targeted mitigation techniques.",
    findings: "Identified five vulnerabilities: SQL Injection, XSS, IDOR, CORS misconfiguration, and Path Traversal.",
    tech: ["Burp Suite", "Nuclei", "WAF"],
    outcome: "Remediated all five findings and validated the applied mitigations.",
  },
  {
    id: "authlab",
    name: "Advanced Cybersecurity Exploitation Lab",
    category: "Offensive Security · Authentication",
    date: "05/2026",
    objective: "Hands-on security testing in a controlled Linux-based lab environment.",
    approach: "Practiced username generation, Active Directory enumeration, password cracking, and session analysis.",
    findings: "Conducted authentication testing including TOTP analysis and hash-based attacks.",
    tech: ["Linux", "Active Directory", "Authentication Testing"],
    outcome: "Built practical experience across authentication, identity, and session security.",
  },
  {
    id: "network",
    name: "Multi-Site Company Network Design",
    category: "Cisco Packet Tracer · Enterprise Network",
    date: "11/2025",
    objective: "Designed a two-site corporate network with strong segmentation and security enforcement.",
    approach: "Configured 9 VLANs, 4 routers, DHCP, DNS, STP, NAT, and ACLs in Cisco Packet Tracer.",
    findings: "Applied network segmentation and access-control rules across the simulated environment.",
    tech: ["Cisco Packet Tracer", "VLANs", "ACLs", "NAT"],
    outcome: "Delivered a segmented multi-site enterprise network simulation.",
  },
  {
    id: "database",
    name: "University Management System Database",
    category: "MS SQL Server · Database Design",
    date: "12/2024",
    objective: "Designed a relational database for university management workflows.",
    approach: "Architected a six-table relational schema and wrote 20+ SQL queries for management, retrieval, and reporting.",
    findings: "Structured related university records around practical query and reporting requirements.",
    tech: ["MS SQL Server", "SQL", "Relational Database"],
    outcome: "Created a structured database schema and query set for data management.",
  },
  {
    id: "nti",
    name: "Windows Server & Active Directory Infrastructure Lab",
    category: "NTI · Windows Server & Active Directory",
    date: "09/2026",
    objective: "Built and managed a Windows Server domain environment as part of the NTI summer training.",
    approach: "Configured Active Directory Domain Services, DNS, DHCP, users, groups, Organizational Units, Group Policy, permissions, and domain-joined clients in a virtualized lab.",
    findings: "Implemented segmented access for HR and Marketing users and organized DATA and BACKUP storage for the lab environment.",
    tech: ["Windows Server", "Active Directory", "DNS", "DHCP", "Group Policy"],
    outcome: "Delivered a functional domain-based infrastructure with centralized identity, access control, and system management.",
  },
];

export const experience = [
  {
    date: "07/2026 — PRESENT",
    label: "6-MONTH TRAINING PROGRAM",
    title: "Vulnerability Analyst & Penetration Tester",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    description: "Performed hands-on penetration testing across Web Application, Network, and Mobile environments. Applied OWASP methodologies and documented findings with technical evidence, risk assessments, and remediation recommendations.",
  },
  {
    date: "08/2026 — 09/2026",
    label: "SUMMER TRAINING",
    title: "Windows Server Administrator",
    org: "National Telecommunication Institute (NTI)",
    description: "Configured and managed Active Directory Domain Services, DNS, DHCP, Group Policy, users, groups, permissions, and Organizational Units in virtualized lab environments.",
  },
  {
    date: "07/2026 — 08/2026",
    label: "SUMMER TRAINING",
    title: "Cyber Security Training",
    org: "Information Technology Institute (ITI)",
    description: "Completed intensive training covering CCNA Networking and Ethical Hacking, with practical work in routing, switching, VLANs, subnetting, and network security.",
  },
  {
    date: "10/2023 — PRESENT",
    label: "EDUCATION",
    title: "Bachelor’s Degree in Computer Science",
    org: "Alexandria University",
    description: "Computer Science student with a cumulative GPA of 3.5, building practical skills across cybersecurity, networking, systems, databases, and programming.",
  },
];

export const certifications = [
  {
    id: "cert-cisco",
    name: "Introduction to Cybersecurity",
    org: "Cisco Networking Academy",
    type: "Professional Certificate",
    year: "2026",
    description: "Foundational cybersecurity training covering common threats, attack surfaces, security principles, and practical ways to identify and reduce cyber risk.",
  },
  {
    id: "cert-ibm",
    name: "Introduction to Cybersecurity",
    org: "IBM SkillsBuild",
    type: "Professional Certificate",
    year: "2026",
    description: "Introduces core cybersecurity concepts, threat awareness, security practices, and the role of cybersecurity in protecting systems, users, and data.",
  },
  {
    id: "cert-iti",
    name: "ITI Summer Training",
    org: "Information Technology Institute (ITI)",
    type: "Summer Training",
    year: "2026",
    description: "Intensive training in CCNA networking and ethical hacking, with hands-on practice in routing, switching, VLANs, subnetting, and network security.",
  },
  {
    id: "cert-nti",
    name: "NTI Summer Training",
    org: "National Telecommunication Institute (NTI)",
    type: "Summer Training",
    year: "2026",
    description: "Practical Windows Server and Active Directory training covering domains, DNS, DHCP, users, groups, permissions, Organizational Units, and Group Policy.",
  },
];

export const services = [
  { t: "Web Application Penetration Testing", d: "Manual security assessment of web applications with a focus on authentication, authorization, access control, business logic, and common web vulnerabilities." },
  { t: "Network Security Assessment", d: "Enumeration and security assessment of exposed network services, infrastructure, segmentation, and access-control configurations." },
  { t: "Vulnerability Assessment", d: "Identification, validation, and documentation of security weaknesses with technical evidence and remediation recommendations." },
  { t: "Security Testing & Reporting", d: "Clear findings that connect technical evidence to risk, impact, and practical remediation steps." },
];