import PropTypes from "prop-types";
import styles from "./ProblemStatement.module.css";
import { useState } from "react";
import Logo from "../../components/Logo/Logo";
import PopupHackathon from "../../components/PopupHackathon/PopupHackathon";
import Loading from "../../components/Loading/Loading";

import useFetch from "../../hooks/useFetch";

const {
  mainDiv,
  problemStatementDiv,
  problemStatementInfo,
  problemStatementTitles,
  problemStatementMetaData,
  problemStatementHeading,
} = styles;

const ProblemStatementBody = ({ statement, openPopup }) => {
  return (
    <div className={problemStatementInfo} onClick={() => openPopup(statement)}>
      <p className={problemStatementMetaData}>
        <span>Problem Statement ID:</span> {statement.PSId}
      </p>
      <h3
        className={problemStatementTitles}
        style={{
          color: statement.PSActive ? "inherit" : "red",
        }}
      >
        {statement.PSTitle}
      </h3>
      {statement.PSOrganization && (
        <p className={problemStatementMetaData}>
          <span>Organization:</span> {statement.PSOrganization}
        </p>
      )}
      <p className={problemStatementMetaData}>
        <span>Sector/Domain:</span> {statement.PSSectorDomain}
      </p>
    </div>
  );
};

ProblemStatementBody.propTypes = {
  statement: PropTypes.shape({
    PSId: PropTypes.string,
    PSActive: true,
    PSTitle: PropTypes.string,
    PSOrganization: PropTypes.string,
    PSSectorDomain: PropTypes.string,
    PSDescription: PropTypes.string,
    PSFunctionalRequirement: PropTypes.array,
    PSNonFunctionalRequirement: PropTypes.array,
  }),
  openPopup: PropTypes.func,
};

const ProblemStatement = () => {
  const [selectedStatement, setSelectedStatement] = useState({
    PSId: "PS01",
    PSActive: true,
    PSSectorDomain: "CyberSecurity - AI",
    PSOrganization: "DRDO",
    PSTitle: "Synergizing Human-AI Collaboration for Enhanced Cybersecurity",
    PSDescription:
      "Cybersecurity requires the development of seamless human-AI collaboration frameworks that synergize human domain expertise with artificial intelligence's computational capabilities. By fostering trust and transparency, organizations can confidently leverage AI-powered decision-making while ensuring prudent human oversight and adherence to established protocols. Develop seamless human-AI collaboration frameworks that leverage the strengths of both parties and build trust in AI-powered decision-making.",
    PSFunctionalRequirement: [
      "AI Model Integration: The framework should allow for the integration of various AI models specializing in cybersecurity tasks, such as threat detection, vulnerability assessment, and incident response.",
      "Human Oversight and Validation: The framework should provide mechanisms for human experts to review and validate the decisions and recommendations made by the AI models, ensuring transparency and accountability.",
      "Collaborative Decision-Making: The framework should facilitate a collaborative decision-making process, where AI models and human experts can exchange insights, discuss potential risks and mitigation strategies, and reach consensus on the most appropriate course of action.",
      "Continuous Learning and Adaptation: The framework should incorporate mechanisms for continuous learning and adaptation, allowing AI models to improve their performance based on feedback and new data provided by human experts.",
    ],
    PSNonFunctionalRequirement: [
      "Trust and Transparency: The framework should foster trust in AI-powered decision-making by ensuring transparency in the AI models' reasoning processes and providing clear explanations for their recommendations.",
      "Scalability and Performance: The framework should be scalable and able to handle large volumes of data and cybersecurity events, while maintaining high performance and responsiveness to ensure timely decision-making.",
    ],
  });

  const [showPopup, setShowPopup] = useState(false);

  const { data, loading } = useFetch({
    url: `${import.meta.env.VITE_SERVER_URL}/api/hackathon/ps`,
  });

  // const panel = [
  //   {
  //     PSId: "PS01",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity - AI",
  //     PSOrganization: "DRDO",
  //     PSTitle: "Synergizing Human-AI Collaboration for Enhanced Cybersecurity",
  //     PSDescription:
  //       "Cybersecurity requires the development of seamless human-AI collaboration frameworks that synergize human domain expertise with artificial intelligence's computational capabilities. By fostering trust and transparency, organizations can confidently leverage AI-powered decision-making while ensuring prudent human oversight and adherence to established protocols. Develop seamless human-AI collaboration frameworks that leverage the strengths of both parties and build trust in AI-powered decision-making.",
  //     PSFunctionalRequirement: [
  //       "AI Model Integration: The framework should allow for the integration of various AI models specializing in cybersecurity tasks, such as threat detection, vulnerability assessment, and incident response.",
  //       "Human Oversight and Validation: The framework should provide mechanisms for human experts to review and validate the decisions and recommendations made by the AI models, ensuring transparency and accountability.",
  //       "Collaborative Decision-Making: The framework should facilitate a collaborative decision-making process, where AI models and human experts can exchange insights, discuss potential risks and mitigation strategies, and reach consensus on the most appropriate course of action.",
  //       "Continuous Learning and Adaptation: The framework should incorporate mechanisms for continuous learning and adaptation, allowing AI models to improve their performance based on feedback and new data provided by human experts.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Trust and Transparency: The framework should foster trust in AI-powered decision-making by ensuring transparency in the AI models' reasoning processes and providing clear explanations for their recommendations.",
  //       "Scalability and Performance: The framework should be scalable and able to handle large volumes of data and cybersecurity events, while maintaining high performance and responsiveness to ensure timely decision-making.",
  //     ],
  //   },
  //   {
  //     PSId: "PS02",
  //     PSActive: false,
  //     PSSectorDomain: "CyberSecurity - Privacy Protection",
  //     PSOrganization: "Quick Heal",
  //     PSTitle: " Browser Extension:Web Tracker Blocker",
  //     PSDescription:
  //       "Develop a browser extension that enhances user privacy by blocking web trackers across all websites. The extension should seamlessly integrate with the browser, intercepting and preventing requests to known tracker domains and analytics services. Leverage existing tracker blocklists and provide an intuitive user interface for managing settings and whitelist exceptions. Ensure efficient performance without compromising the browsing experience.",
  //     PSFunctionalRequirement: [
  //       "Tracker Detection: The extension should be capable of identifying and detecting various web trackers, such as cookies, web beacons, and fingerprinting scripts, used by websites and third-party services.",
  //       "Blocking Mechanism: The extension should provide a mechanism to block the identified web trackers, preventing them from collecting user data or tracking user behavior.",
  //       "Customization Options: Users should be able to customize the extension's behavior, such as whitelisting specific websites or selectively blocking certain types of trackers.",
  //       "Privacy Report: The extension should provide a privacy report or dashboard, displaying information about the trackers encountered, blocked, and the potential privacy risks mitigated.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Cross-browser Compatibility: The extension should be compatible with different web browsers, such as Chrome, Firefox, Safari, and Edge, to ensure wide user adoption and consistent functionality across platforms.",
  //       "User-friendly Interface: The extension should have an intuitive and user-friendly interface, making it easy for users to understand and manage the tracker blocking functionality",
  //     ],
  //   },
  //   {
  //     PSId: "PS03",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity ",
  //     PSOrganization: "Kroll",
  //     PSTitle: "Phishing Email Defense Strategy for Financial Organizations",
  //     PSDescription:
  //       "As a security engineer at XYZ, a financial organization facing an alarming rise in phishing emails used for malware distribution and redirecting to malicious sites, devise a comprehensive plan to mitigate this threat. The organization currently lacks security measures to combat phishing attacks. The plan should encompass email filtering, user awareness training, incident response procedures, and continuous monitoring to effectively protect against phishing and its consequences.",
  //     PSFunctionalRequirement: [
  //       "Email Filtering and Phishing Detection",
  //       "User Awareness and Training Program",
  //       "Incident Response and Reporting Procedures",
  //       "Continuous Monitoring and Threat Intelligence Updates",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Integration with Existing Systems and Compliance",
  //       "Adherence to Regulatory and Organizational Policies",
  //     ],
  //   },
  //   {
  //     PSId: "PS04",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity- Network Optimisation",
  //     PSOrganization: "Coro",
  //     PSTitle:
  //       "Network Scalability and Security Enhancement in Enterprise Environments",
  //     PSDescription:
  //       "Develop a robust network infrastructure strategy to support the rapid expansion of an enterprise, ensuring seamless scalability and optimal performance. Integrate advanced security measures to safeguard data integrity, adhering to stringent regulatory compliance standards. The solution should strike a balance between facilitating business growth, maintaining network resilience, and implementing robust cybersecurity protocols to mitigate risks proactively.",
  //     PSFunctionalRequirement: [
  //       "Network Segmentation and Isolation: Implement network segmentation strategies to isolate critical systems and data, minimizing the attack surface and mitigating the spread of potential threats.",
  //       "Traffic Monitoring and Analysis: Deploy network monitoring tools to analyze traffic patterns, detect anomalies, and identify potential security threats or performance bottlenecks.",
  //       "Load Balancing and Redundancy: Implement load balancing mechanisms and redundant network components to distribute traffic efficiently and ensure high availability and failover capabilities.",
  //       "Access Control and Authentication: Implement robust access control and authentication mechanisms, such as multi-factor authentication, to secure network access and prevent unauthorized access.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Interoperability and Integration: The network solutions should seamlessly integrate with existing enterprise systems, applications, and security tools, ensuring compatibility and efficient data exchange.",
  //       "Monitoring and Reporting: Implement comprehensive monitoring and reporting capabilities to track network performance, security events, and compliance adherence, enabling proactive management and decision-making.",
  //     ],
  //   },
  //   {
  //     PSId: "PS05",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity - Software Security",
  //     PSOrganization: "VMware",
  //     PSTitle: "Secure Source to Sink Mapping Platform in Java",
  //     PSDescription:
  //       "Develop a comprehensive platform to enable source-to-sink mapping across Java files, facilitating the identification and mitigation of critical security vulnerabilities such as SQL injection, Cross-Site Scripting (XSS), and other code injection attacks. The platform should provide a robust analysis engine capable of accurately tracing data flows, detecting potential vulnerability entry points, and highlighting code segments susceptible to exploitation. Incorporate user-friendly visualizations and actionable insights to streamline the remediation process and enhance the overall security posture of Java-based applications.",
  //     PSFunctionalRequirement: [
  //       "Source and Sink Identification: Identify and categorize sources (user input, file read, etc.) and sinks (database queries, output rendering, etc.) within the Java codebase.",
  //       "Taint Analysis: Perform taint analysis to track the data flow from sources to sinks, considering various control and data flow paths.",
  //       "Vulnerability Detection: Implement rules and patterns to detect potential vulnerabilities like SQL injection, XSS, and other code injection attacks based on the identified source-sink mappings.",
  //       "Vulnerability Reporting: Generate comprehensive reports highlighting the identified vulnerabilities, their locations, and potential impacts, along with suggested remediation steps.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Scalability and Performance: The platform should be able to handle large codebases efficiently, providing reasonable analysis times and resource utilization.",
  //       "Extensibility and Customization: Allow for easy extension and customization of vulnerability rules and patterns to accommodate new or project-specific vulnerabilities.",
  //     ],
  //   },
  //   {
  //     PSId: "PS06",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity - Authentication",
  //     PSOrganization: "Neptune Ubicom Pvt Ltd",
  //     PSTitle: "Website Authenticity Scanner Software",
  //     PSDescription:
  //       "Develop a robust software solution to combat the rising threat of malicious websites, phishing scams, and virus-laden links aimed at compromising user systems and illegally obtaining personal information. The software should implement advanced scanning and analysis techniques to evaluate website authenticity, detect potential threats, and provide users with clear and actionable insights. Implement machine learning models and leverage crowdsourced data to continuously improve threat detection capabilities, ensuring users can confidently browse the web without falling victim to cyber criminals.",
  //     PSFunctionalRequirement: [
  //       "Website Crawling and Indexing: Crawl and index websites to build a comprehensive database for analysis.",
  //       "Reputation Analysis: Analyze the reputation of websites based on blacklists, whitelists, and other threat intelligence sources.",
  //       "Content and Code Analysis: Perform static and dynamic analysis of website content and code to detect potential malicious behavior, such as obfuscated code, suspicious redirects, or hidden iframes.",
  //       "Phishing Detection: Implement techniques to identify phishing websites, such as domain similarity analysis, content similarity analysis, and visual similarity analysis.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Accuracy and False Positive Mitigation: Minimize false positives and maintain high accuracy in detecting malicious websites through continuous refinement of detection techniques.",
  //       "User Experience and Reporting: Provide a user-friendly interface for submitting websites for analysis and presenting clear and actionable reports on website authenticity and potential risks.",
  //     ],
  //   },
  //   {
  //     PSId: "PS07",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity - Ransomware Defence",
  //     PSOrganization: "Kroll",
  //     PSTitle: "Ransomware Protection and Business Continuity Plan",
  //     PSDescription:
  //       "In light of the escalating ransomware threat targeting industrial sectors, XYZ organization requires a comprehensive strategy to fortify defenses and ensure operational resilience. Develop a multi-layered plan encompassing proactive measures such as employee phishing awareness training, robust backup and recovery systems, and advanced threat detection mechanisms. Simultaneously, devise reactive protocols to swiftly contain and mitigate ongoing ransomware incidents, safeguarding critical data assets and minimizing downtime. The overarching goal is to implement a foolproof ransomware protection and incident response framework, enabling XYZ to maintain business continuity amid evolving cyber threats.",
  //     PSFunctionalRequirement: [
  //       "Endpoint Protection and Vulnerability Management: Implement robust endpoint protection solutions, including anti-malware, firewalls, and vulnerability management tools, to prevent ransomware infections and patch security vulnerabilities.",
  //       "User Awareness and Phishing Training: Develop a comprehensive user awareness and training program to educate employees on identifying and reporting phishing attempts, which are common vectors for ransomware delivery.",
  //       "Backup and Recovery Strategy: Establish a reliable backup and recovery strategy, including offsite backups and air-gapped backups, to ensure data can be restored in case of a successful ransomware attack.",
  //       "Incident Response and Business Continuity Planning: Develop an incident response plan and business continuity plan to guide actions during and after a ransomware attack, including containment, recovery, and communication strategies.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Usability and Transparency: Provide user-friendly interfaces and clear communication channels for employee training, incident reporting, and status updates during an attack.",
  //       "Continuous Improvement: Establish processes for regularly reviewing and updating the ransomware protection strategy, incorporating lessons learned from incidents and emerging threats.",
  //     ],
  //   },
  //   {
  //     PSId: "PS08",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity- Insider Threat Management",
  //     PSOrganization: "Kroll",
  //     PSTitle: "Insider Threat Detection and Mitigation Strategy",
  //     PSDescription:
  //       "In the wake of recent data breaches, XYZ organization suspects insider threats as a potential culprit and requires a robust plan to detect and mitigate such risks. The current lack of employee activity monitoring on sensitive systems and databases leaves the organization vulnerable. Develop an insider threat detection and response strategy that incorporates comprehensive user behavior analytics, access control policies, and real-time monitoring capabilities. Leverage YARA rules to identify suspicious patterns and indicators of insider attacks, seamlessly integrating with existing SIEM and EDR solutions. Prioritize proactive threat hunting and incident response procedures to promptly neutralize insider threats and fortify data protection measures.",
  //     PSFunctionalRequirement: [
  //       "User Activity Monitoring: Implement a comprehensive user activity monitoring solution to track and log employee interactions with sensitive databases, systems, and applications.",
  //       "Anomaly Detection: Develop a system to detect anomalous behavior patterns that deviate from established baselines, such as unusual data access, unauthorized privilege escalation, or suspicious file transfers.",
  //       "YARA Rule Creation and Integration: Create customized YARA rules to detect specific patterns or indicators of insider threats, such as data exfiltration attempts, unauthorized software installations, or malicious code execution.",
  //       "Incident Response and Investigation: Establish an incident response process to investigate and mitigate detected insider threats, including forensic analysis, evidence preservation, and appropriate disciplinary actions.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Privacy and Compliance: Ensure that the monitoring and detection solutions comply with relevant data privacy regulations and organizational policies, while respecting employee privacy rights.",
  //       "Scalability and Performance: Implement solutions that can scale across the organization's infrastructure and handle large volumes of user activity data without impacting system performance.",
  //     ],
  //   },
  //   {
  //     PSId: "PS09",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity - Cloud Security",
  //     PSOrganization: "Kroll",
  //     PSTitle: "Cloud Security Enhancement Plan for Data Migration",
  //     PSDescription:
  //       "XYZ organization aims to leverage the scalability and efficiency of cloud computing, but the current cloud environment lacks robust security configurations, exposing sensitive data to potential breaches and unauthorized access. Develop a comprehensive cloud security strategy to facilitate the safe migration of critical assets to the cloud. This plan should encompass rigorous access controls, data encryption, continuous monitoring, incident response procedures, and adherence to industry best practices and regulatory compliance requirements. Strengthen the organization's overall cybersecurity posture by implementing defense-in-depth measures tailored to the cloud infrastructure, ensuring the confidentiality, integrity, and availability of data and systems.",
  //     PSFunctionalRequirement: [
  //       "Cloud Security Posture Assessment: Conduct a comprehensive assessment of the existing cloud environment to identify security vulnerabilities, misconfigurations, and areas for improvement.",
  //       "Identity and Access Management: Implement robust identity and access management (IAM) controls, including multi-factor authentication, role-based access control, and least privilege principles, to restrict unauthorized access to cloud resources.",
  //       "Data Encryption and Key Management: Implement data encryption mechanisms for data at rest and in transit, and establish secure key management processes to protect sensitive information stored in the cloud.",
  //       "Network Security and Segmentation: Configure network security controls, such as virtual private clouds (VPCs), security groups, and network access control lists (NACLs), to segment and isolate critical resources and limit exposure to potential threats.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Compliance and Regulatory Adherence: Ensure that the cloud security measures align with relevant industry regulations and standards, such as GDPR, HIPAA, or PCI-DSS, to maintain compliance and protect sensitive data.",
  //       "Scalability and Automation: Implement cloud security solutions that can scale efficiently as the organization's cloud footprint grows, and leverage automation to streamline security processes and reduce the risk of human error.",
  //     ],
  //   },
  //   {
  //     PSId: "PS10",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity - Governance",
  //     PSOrganization: "Aimpeak Resources and Consults Limited",
  //     PSTitle: "Cybersecurity Governance Model Development",
  //     PSDescription:
  //       "Develop a comprehensive cybersecurity governance model that establishes a robust framework for effective management and oversight of the organization's cybersecurity posture. The model should clearly define security policies, standards, and best practices aligned with industry regulations and organizational risk appetite. It must also delineate roles, responsibilities, and accountabilities for stakeholder groups across various functions, fostering a culture of security awareness and promoting organization-wide collaboration in addressing cyber threats.",
  //     PSFunctionalRequirement: [
  //       "Policy Management\nRisk Assessment and Management\nRoles and Responsibilities Definition\nIncident Response and Disaster Recovery Planning",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Stakeholder Engagement and Awareness\nIntegration and Alignment with Organizational Objectives",
  //     ],
  //   },
  //   {
  //     PSId: "PS11",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity - Blockchain",
  //     PSOrganization: "Aimpeak Resources and Consults Limited",
  //     PSTitle: "Blockchain-based Defense Systems for Critical Infrastructure",
  //     PSDescription:
  //       "Design and implement a multi-layered cyber defense system to safeguard critical national infrastructure, such as electricity grids, from sophisticated cyber threats. Leverage emerging technologies like blockchain to enable secure data sharing, enhance system resilience, and establish trusted audit trails. Integrate advanced threat detection, response, and recovery mechanisms to mitigate risks proactively. The defense architecture should prioritize system availability, data integrity, and operational continuity, ensuring the reliable delivery of essential services while thwarting attempts at disruption or compromise.",
  //     PSFunctionalRequirement: [
  //       "Access Control and Authentication: Implement robust access control and authentication mechanisms, such as multi-factor authentication, role-based access control, and biometric authentication, to ensure that only authorized personnel can access critical infrastructure systems.",
  //       "Blockchain-Based Monitoring and Auditing: Leverage blockchain technology to create an immutable and distributed ledger for monitoring and auditing system activities, ensuring transparency and tamper-proof logging of events and actions.",
  //       "Secure Firmware Updates: Establish a secure and verifiable process for distributing and applying firmware updates to critical infrastructure components, leveraging blockchain for integrity verification and version control.",
  //       "Intrusion Detection and Prevention: Deploy advanced intrusion detection and prevention systems (IDS/IPS) to monitor network traffic and system activities, identify potential threats, and automatically respond to detected incidents.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Interoperability and Integration: Enable seamless integration and interoperability between the defense systems and existing critical infrastructure components, as well as with other security solutions and monitoring tools.",
  //       "Regulatory Compliance and Industry Standards: Ensure that the defense systems adhere to relevant regulatory requirements, industry standards, and best practices for critical infrastructure protection.",
  //     ],
  //   },
  //   {
  //     PSId: "PS12",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity - AI in threat monitoring",
  //     PSOrganization: "Aimpeak Resources and Consults Limited",
  //     PSTitle: "AI-Powered Threat Monitoring Dashboard Development",
  //     PSDescription:
  //       "Develop an AI-powered threat monitoring dashboard capable of early attack detection and enabling rapid incident response. Leverage machine learning models to analyze diverse security data streams, identify sophisticated threat patterns, and provide actionable insights through intuitive visualizations. Integrate automated response playbooks to orchestrate mitigation actions, minimizing dwell time and reducing the impact of successful breaches. Ensure the dashboard is user-friendly, customizable, and aligned with organizational security operations workflows.",
  //     PSFunctionalRequirement: [
  //       "Data Ingestion: Implement mechanisms to collect and ingest security-relevant data from various sources, such as network traffic, system logs, threat intelligence feeds, and security tools.",
  //       "Threat Detection and Analytics: Leverage AI and machine learning techniques to analyze the ingested data, identify anomalies, and detect potential threats in real-time or near real-time.",
  //       "Visualization and Dashboarding: Develop an intuitive and customizable dashboard to visualize detected threats, provide actionable insights, and enable rapid identification of high-risk events or patterns.",
  //       "Incident Response and Automation: Integrate with existing incident response processes and security orchestration tools, enabling automated triage, notification, and execution of predefined playbooks or remediation actions.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "User Experience and Usability: Provide an intuitive and user-friendly interface for security analysts and incident responders, with customizable dashboards, drill-down capabilities, and efficient workflow management.",
  //       "Continuous Learning and Adaptation: Incorporate mechanisms for continuous learning and adaptation, leveraging feedback loops and updated threat intelligence to refine threat detection models and improve overall system accuracy.",
  //     ],
  //   },
  //   {
  //     PSId: "PS13",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity - Network Security",
  //     PSOrganization: "Aimpeak Resources and Consults Limited",
  //     PSTitle: "Vulnerability Analysis Planning Tools",
  //     PSDescription:
  //       "Develop comprehensive network analysis and vulnerability management tools to continuously monitor the organizational network infrastructure. These tools should leverage advanced techniques to identify high-risk vulnerabilities, prioritize remediation efforts based on risk scores, and provide actionable insights. Incorporate automation capabilities to streamline vulnerability assessments, enable efficient patch management, and ensure the organization's attack surface is minimized through proactive hardening measures. Foster an environment of continuous improvement in cyber defense posture.",
  //     PSFunctionalRequirement: [
  //       "Vulnerability Scanning: Implement comprehensive vulnerability scanning capabilities to identify and assess potential vulnerabilities across the network infrastructure, servers, applications, and endpoints.",
  //       "Risk Assessment and Prioritization: Develop a risk assessment engine that can analyze and prioritize identified vulnerabilities based on factors such as threat severity, asset criticality, and potential impact.",
  //       "Vulnerability Management: Establish a centralized vulnerability management system that tracks, reports, and facilitates the remediation of identified vulnerabilities, including patch management and configuration hardening.",
  //       "Continuous Monitoring and Alerting: Implement continuous monitoring mechanisms to detect changes in the network environment, new vulnerabilities, or emerging threats, and generate real-time alerts or notifications for high-risk vulnerabilities.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Integration and Automation: Enable seamless integration with existing network management, security information and event management (SIEM), and IT service management (ITSM) tools, and support automation of vulnerability scanning, assessment, and remediation processes.",
  //       "Compliance and Reporting: Provide comprehensive reporting capabilities to demonstrate compliance with relevant industry standards, regulatory requirements, and organizational policies related to vulnerability management and risk mitigation",
  //     ],
  //   },
  //   {
  //     PSId: "PS14",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity - Crisis Management",
  //     PSOrganization: "Aimpeak Resources and Consults Limited",
  //     PSTitle: "Cyber Crisis Resilience Simulation Development",
  //     PSDescription:
  //       "Develop advanced simulation environments to rigorously test and analyze system resilience under various cyber crisis scenarios. These simulations should accurately model real-world threat vectors, attack techniques, and adversarial behaviors to expose potential vulnerabilities and single points of failure. Leverage these insights to fortify cyber defenses, enhance incident response capabilities, and formulate robust business continuity strategies. Ultimately, these simulations will strengthen organizational preparedness and safeguard critical operations against sophisticated cyber threats.",
  //     PSFunctionalRequirement: [
  //       "Scenario Definition: Provide a framework for defining and configuring various cyber crisis scenarios, such as ransomware attacks, distributed denial-of-service (DDoS) attacks, data breaches, or advanced persistent threats (APTs).",
  //       "System Modeling: Enable the modeling of organizational systems, including network infrastructure, applications, data flows, and interdependencies, to accurately simulate the impact of cyber crisis scenarios on these systems.",
  //       "Simulation Execution and Analysis: Implement simulation engines capable of executing defined cyber crisis scenarios and analyzing the system's behavior, response, and resilience under various conditions.",
  //       "Visualization and Reporting: Develop intuitive visualization tools and reporting mechanisms to present simulation results, highlighting critical points of failure, system vulnerabilities, and potential mitigation strategies.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Realism and Accuracy: Incorporate industry-standard models, threat intelligence, and real-world data to ensure that the simulations accurately represent realistic cyber crisis scenarios and system behaviors.",
  //       "Interoperability and Integration: Enable integration with existing security tools, threat intelligence platforms, and organizational systems to facilitate data exchange and enhance the accuracy of simulations.",
  //     ],
  //   },
  //   {
  //     PSId: "PS15",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity - Blockchain",
  //     PSOrganization: "Aimpeak Resources and Consults Limited",
  //     PSTitle: "Secure Data Sharing Platform via Blockchain",
  //     PSDescription:
  //       "Develop a secure and decentralized data sharing platform leveraging blockchain technology to facilitate seamless collaboration between companies while ensuring data integrity and access control. Implement robust cryptographic protocols and smart contracts to govern data access permissions and maintain an immutable audit trail. Integrate privacy-preserving techniques like zero-knowledge proofs to enable selective disclosure of sensitive information. Prioritize interoperability, scalability, and regulatory compliance to promote widespread adoption across industries.",
  //     PSFunctionalRequirement: [
  //       "Data Encryption and Access Control: Implement robust encryption mechanisms to secure sensitive data before it is shared on the blockchain platform. Establish granular access control policies to regulate data access and sharing permissions among participating companies.",
  //       "Blockchain-Based Data Provenance and Immutability: Leverage blockchain technology to ensure data provenance and immutability, enabling participating companies to verify the origin, authenticity, and integrity of shared data.",
  //       "Smart Contract Integration: Develop smart contracts to automate and enforce data sharing agreements, rules, and conditions among participating companies, ensuring compliance and accountability.",
  //       "Audit Trail and Reporting: Maintain a tamper-proof audit trail of data sharing activities, including access logs, updates, and modifications, to facilitate transparency, compliance reporting, and dispute resolution.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Scalability and Performance: Ensure that the data sharing platform can handle large volumes of data and accommodate an increasing number of participating companies, while maintaining high performance and efficient data processing.",
  //       "Interoperability and Integration: Enable seamless integration with existing data management systems, security tools, and enterprise applications used by participating companies, adhering to industry standards and protocols.",
  //     ],
  //   },
  //   {
  //     PSId: "PS16",
  //     PSActive: true,
  //     PSSectorDomain: "UrbanTech - AI",
  //     PSOrganization: "JPMorgan",
  //     PSTitle: "AI Bot for Client Support and Issue Resolution",
  //     PSDescription:
  //       "Develop an AI-powered conversational bot to handle client calls efficiently. The bot should employ natural language processing to accurately categorize problems into different buckets based on their nature. It should then reference existing knowledge models to retrieve potential resolutions for each issue. The bot must provide clear and contextual responses to clients, streamlining the resolution process. Continuously enrich the knowledge base with new solutions, enabling the bot to provide up-to-date and personalized support, akin to the Swiggy bot's capabilities.",
  //     PSFunctionalRequirement: [
  //       "Call Handling: The bot should be able to receive incoming calls from clients and interpret the voice input to extract the problem or query.",
  //       "Problem Categorization: The bot should have a mechanism to categorize the extracted problem or query into different buckets or domains, such as order inquiries, delivery issues, payment problems, etc.",
  //       "Resolution Lookup: The bot should have access to an existing knowledge base or model containing predefined resolutions or solutions for various problem categories.",
  //       "Response Generation: Based on the categorized problem and the corresponding resolution from the knowledge base, the bot should generate a natural language response to be conveyed back to the client.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Scalability: The system should be designed to handle a large volume of incoming calls and scale horizontally as the user base grows.",
  //       "Accuracy: The problem categorization and resolution lookup components should have a high degree of accuracy to ensure correct solutions are provided to the clients.",
  //     ],
  //   },
  //   {
  //     PSId: "PS17",
  //     PSActive: true,
  //     PSSectorDomain: "UrbanTech - Accessibility Technology",
  //     PSOrganization: "DRDO",
  //     PSTitle: "Accessibility Enhancement Solution for Public Transportation",
  //     PSDescription:
  //       "Develop an innovative solution that leverages mobile technology or sensor networks to enhance accessibility and user experience for individuals with disabilities in public transportation systems. The proposed solution should address key challenges such as real-time navigation assistance, obstacle detection, and seamless integration with existing transportation infrastructure. Prioritize user-centric design principles, ensuring the solution is intuitive, inclusive, and empowers users with disabilities to navigate public transit independently and with confidence. Explore emerging technologies that can revolutionize mobility for this underserved population.",
  //     PSFunctionalRequirement: [
  //       "Navigation Assistance: The solution should provide navigation assistance to individuals with disabilities, such as visual, hearing, or mobility impairments, to help them navigate through public transportation systems, including bus stops, train stations, and transit hubs.",
  //       "Real-Time Information: The system should provide real-time information about accessible routes, available services, and any potential barriers or obstacles along the way.",
  //       "Accessibility Features: The solution should incorporate various accessibility features, such as audio or haptic feedback, voice commands, or gesture-based controls, to accommodate different types of disabilities.",
  //       "Crowd-Sourced Data: The system should leverage crowd-sourced data from users to identify and report accessibility issues or barriers in public transportation systems, allowing for continuous improvement and updates.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "User-Friendly Interface: The solution should have an intuitive and user-friendly interface that is easy to navigate and understand, especially for individuals with disabilities.",
  //       "Reliability and Robustness: The system should be reliable and robust, able to function consistently in various environments and handle potential disruptions or failures gracefully.",
  //     ],
  //   },
  //   {
  //     PSId: "PS18",
  //     PSActive: true,
  //     PSSectorDomain: "UrbanTech - Environmental Technology",
  //     PSOrganization: "DRDO",
  //     PSTitle: "Urban Heat Island Monitoring and Mitigation System",
  //     PSDescription:
  //       "Urban heat islands exacerbate rising temperatures and pose significant health risks to city dwellers. Design an innovative nature-based solution that harnesses sensors and advanced data analytics to monitor and mitigate urban heat island effects. The solution should provide real-time temperature mapping, identify hotspots, and recommend targeted interventions such as strategic vegetation placement or cool roof installations. By promoting cooler and healthier cityscapes, this solution aims to enhance urban resilience and improve the well-being of residents in densely populated areas.",
  //     PSFunctionalRequirement: [
  //       "Temperature Monitoring: The system should incorporate a network of sensors strategically placed throughout the urban area to continuously monitor and collect temperature data at various locations.",
  //       "Vegetation Analysis: The solution should utilize data from satellite imagery or aerial surveys to analyze and map the distribution of vegetation, such as trees and green spaces, across the city.",
  //       "Heat Island Identification: By integrating temperature data and vegetation analysis, the system should be capable of identifying and delineating urban heat island hotspots, areas with significantly higher temperatures compared to surrounding areas.",
  //       "Mitigation Strategy Recommendation: Based on the identified heat island hotspots and their characteristics (e.g., land use, building density, lack of greenery), the system should provide recommendations for nature-based mitigation strategies, such as planting trees, creating green spaces, or implementing cool roofing or paving materials.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Scalability: The system should be designed to accommodate the expansion of the sensor network and data processing capabilities as the urban area grows or additional functionalities are added.",
  //       "Data Accuracy and Reliability: The temperature sensors and data collection methods should ensure high accuracy and reliability of the gathered data, minimizing the impact of external factors or sensor malfunctions on the system's performance.",
  //     ],
  //   },
  //   {
  //     PSId: "PS19",
  //     PSActive: true,
  //     PSSectorDomain: "UrbanTech - Data Analysis",
  //     PSOrganization: "Swiggy",
  //     PSTitle: "Sales Cluster Analysis for Food Delivery Services",
  //     PSDescription:
  //       "As the Product Manager at Swiggy, A industry expert require a comprehensive analysis of our food packet sales data across the city to identify high-performing and low-performing clusters. These clusters can be based on various parameters such as cuisine type, restaurant category, geographical location, or customer demographics. The objective is to create an insightful visual representation of these clusters using data visualization tools like Tableau, Power BI, or Excel. This analysis will enable me to strategize and prioritize our efforts towards optimizing sales in the most profitable clusters while addressing the underperforming ones effectively.",
  //     PSFunctionalRequirement: [
  //       "Data Ingestion: The system should have the capability to ingest and process sales data from various sources, such as Swiggy's databases, third-party data PSOrganizations, or other relevant data sources.",
  //       "Data Preprocessing: The system should perform data cleaning, transformation, and normalization tasks to ensure data consistency and compatibility with the clustering algorithms.",
  //       "Clustering Algorithms: The system should incorporate multiple clustering algorithms (e.g., k-means, hierarchical clustering, DBSCAN) to group the sales data based on different criteria, such as food type, restaurant type, locality, and financial affordability.",
  //       "Visualization: The system should have the ability to visualize the clustered data using tools like Tableau, Power BI, Excel, or other visual analytics platforms, allowing users to explore and analyze the clusters interactively.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Scalability: The system should be designed to handle large volumes of sales data and accommodate future growth in the number of clusters or data sources.",
  //       "Performance: The system should be capable of processing and clustering data efficiently, ensuring timely delivery of insights and visualizations to support decision-making processes.",
  //     ],
  //   },
  //   {
  //     PSId: "PS20",
  //     PSActive: false,
  //     PSSectorDomain: "UrbanTech - Analytics",
  //     PSOrganization: "Swiggy",
  //     PSTitle: "House Price Prediction Model Development",
  //     PSDescription:
  //       "As a real estate analyst, you need to develop a predictive model that can accurately estimate house prices based on various influencing factors. The model should take into account relevant features such as number of bedrooms, bathrooms, square footage, location, property age, and other significant variables. By leveraging machine learning algorithms and a comprehensive dataset, the goal is to create a reliable tool that can assist in making informed decisions and pricing strategies for the housing market.",
  //     PSFunctionalRequirement: [
  //       "Data Ingestion: The system should be able to ingest and preprocess data from various sources, such as real estate databases, property listings, and other relevant datasets containing information about houses, neighborhoods, and market conditions.",
  //       "Feature Engineering: The system should be capable of extracting relevant features from the input data that may influence house prices, such as location, property characteristics (e.g., square footage, number of rooms, age), neighborhood attributes (e.g., school quality, crime rates), and economic indicators.",
  //       "Model Training: The system should incorporate machine learning algorithms (e.g., linear regression, decision trees, neural networks) to train predictive models using the engineered features and historical house price data.",
  //       "Model Evaluation: The system should include methods for evaluating the performance of the trained models, such as cross-validation, holdout testing, and standard evaluation metrics (e.g., mean squared error, R-squared).",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Accuracy: The system should strive to achieve high accuracy in predicting house prices, minimizing the difference between predicted and actual values.",
  //       "Scalability: The system should be designed to handle large volumes of data and scale well as the number of data sources, features, or computational requirements increase.",
  //     ],
  //   },
  //   {
  //     PSId: "PS21",
  //     PSActive: true,
  //     PSSectorDomain: "UrbanTech - Education",
  //     PSOrganization: "APSDK Public School",
  //     PSTitle: "AR and VR Integration for Hybrid Classroom Learning",
  //     PSDescription:
  //       "With the rise of online and hybrid learning, there is a need to enhance the virtual classroom experience through immersive technologies like Augmented Reality (AR) and Virtual Reality (VR). These technologies can provide interactive and engaging learning experiences, bridging the gap between physical and virtual classrooms. Additionally, exploring complementary technologies for hybrid teaching can further enrich the learning environment and foster collaboration among students and instructors.",
  //     PSFunctionalRequirement: [
  //       "Immersive Learning Environment: The system should provide an immersive augmented reality (AR) or virtual reality (VR) environment that simulates a classroom setting, allowing students to experience interactive and engaging learning experiences.",
  //       "Content Integration: The system should support the integration of various educational content formats, such as 3D models, videos, images, and interactive simulations, enabling a multisensory learning experience.  Personalization and Adaptive Learning: The system should offer personalized and adaptive learning experiences based on individual student's performance, learning styles, and preferences, providing tailored content and feedback.",
  //       "Assessment and Feedback: The system should incorporate assessment tools and provide real-time feedback to students, allowing them to track their progress and identify areas for improvement.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Cross-Platform Compatibility: The system should be compatible with various AR/VR devices and platforms, ensuring accessibility and widespread adoption across different hardware and operating systems.",
  //       "Scalability and Performance: The system should be capable of handling a large number of concurrent users while maintaining optimal performance, ensuring a smooth and lag-free experience for all participants.",
  //     ],
  //   },
  //   {
  //     PSId: "PS22",
  //     PSActive: true,
  //     PSSectorDomain: "UrbanTech-IoT",
  //     PSOrganization: "HCI Technologies",
  //     PSTitle: "IoT Home Automation Solution Design",
  //     PSDescription:
  //       "The need for a comprehensive home automation solution that seamlessly integrates with various household gadgets and appliances is paramount. By leveraging IoT technologies, this solution should enable users to control and monitor their home environment remotely, facilitating energy savings and enhancing convenience. Additionally, it should provide a secure cloud-based platform, allowing users to manage their smart home ecosystem from anywhere in the world, fostering a truly connected living experience.",
  //     PSFunctionalRequirement: [
  //       "Device Integration: The home automation solution should be capable of integrating and controlling various smart home devices and appliances, such as lights, thermostats, security systems, entertainment systems, and household appliances, from different manufacturers.",
  //       "Local Control: The solution should provide a local interface (e.g., mobile app, voice control, touchscreen panels) for users to monitor and control connected devices within the home network.",
  //       "Remote Access: Users should be able to access and control their home automation system remotely from anywhere in the world via the internet or cloud-based services, enabling them to monitor and manage their smart home devices while away.",
  //       "Automation and Scheduling: The solution should allow users to create automation rules and schedules for connected devices, enabling automated actions based on time, events, or sensor triggers (e.g., turning off lights at a specific time, adjusting the thermostat based on presence, or activating security systems when leaving home)",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Security and Privacy: The home automation solution should implement robust security measures, including secure communication protocols, encryption, and user authentication, to protect user data and prevent unauthorized access or control of connected devices.",
  //       "Scalability and Interoperability: The system should be scalable to accommodate the addition of new devices and should support interoperability with various smart home ecosystems and protocols, ensuring compatibility with a wide range of devices from different manufacturers.",
  //     ],
  //   },
  //   {
  //     PSId: "PS23",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity - Explainable AI",
  //     PSOrganization: "DRDO",
  //     PSTitle: "Interpretable AI Models for Cybersecurity",
  //     PSDescription:
  //       "A cybersecurity firm specializing in network intrusion detection has developed an advanced AI model capable of identifying potential cyber threats with high accuracy. However, during a recent incident response, the firm's security analysts struggled to understand the model's decision-making process, leading to confusion and delays in implementing appropriate countermeasures. In the realm of cybersecurity, where time is of the essence and the consequences of incorrect decisions can be severe, there is a pressing need for interpretable AI models that can provide clear and understandable explanations for their predictions and decisions. The current lack of transparency in many AI-based cybersecurity models hinders user trust and adoption, as security analysts and stakeholders are unable to comprehend the underlying reasoning behind the model's outputs. To address this challenge, there is a need to develop interpretable AI models that strike a balance between accuracy and explainability. These models should be able to provide clear explanations for their decision-making processes, enabling security professionals to understand the rationale behind threat detections or risk assessments. By fostering transparency and interpretability, these AI models can enhance trust and facilitate informed decision-making in critical security scenarios, ultimately improving an organization's ability to respond effectively to cyber threats.",
  //     PSFunctionalRequirement: [
  //       "Threat Detection and Classification: The system should be capable of detecting and accurately classifying various cyber threats, such as malware, intrusions, network attacks, and data breaches, using interpretable AI models.",
  //       "Feature Importance and Contribution: The interpretable AI models should provide insights into the relative importance and contribution of different features (e.g., network traffic patterns, system logs, user behavior) in determining the classification or decision outcome.",
  //       "Decision Explanations: The system should generate clear and understandable explanations for its decisions or predictions, providing users with insights into the reasoning process and the factors that influenced the outcome.",
  //       "Interpretability Visualization: The system should incorporate interactive visualization tools that allow users to explore and understand the decision-making process of the interpretable AI models, such as feature importance rankings, decision trees, or rule-based explanations.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Accuracy and Performance: While prioritizing interpretability, the system should maintain high accuracy and performance in detecting and classifying cyber threats, ensuring effective cybersecurity protection.",
  //       "Scalability and Adaptability: The interpretable AI models should be scalable to handle large volumes of data and adaptable to evolving cyber threats, allowing for continuous learning and model updates without sacrificing interpretability.",
  //     ],
  //   },
  //   {
  //     PSId: "PS24",
  //     PSActive: true,
  //     PSSectorDomain: "UrbanTech+CyberSecurity",
  //     PSOrganization: "ABN AMRO Bank N.V.",
  //     PSTitle: "AI and ML Automation for Security and Compliance",
  //     PSDescription:
  //       "A large financial institution needs to ensure stringent security and compliance across its vast network infrastructure, applications, and data repositories. With thousands of assets and a constantly evolving threat landscape, manual monitoring and analysis become increasingly challenging and resource-intensive. To address this challenge, the institution seeks to leverage AI and ML technologies to automate security and compliance processes. By implementing AI-driven systems, the institution aims to continuously monitor and analyze large volumes of security-related data, including network traffic, user activities, and system logs. These AI models should be capable of detecting anomalies, identifying potential threats, and providing real-time alerts to security teams. Additionally, ML algorithms can be employed to automate compliance checks, ensuring that the institution adheres to industry regulations and internal policies across its IT infrastructure. The ultimate goal is to enhance security posture, reduce risk exposure, and streamline compliance efforts through intelligent automation, enabling efficient resource allocation and proactive response to emerging threats.",
  //     PSFunctionalRequirement: [
  //       "Risk Assessment and Compliance Monitoring: The system should leverage AI and ML techniques to continuously monitor and assess compliance with various security standards, regulations, and internal policies. It should be capable of identifying potential risks, vulnerabilities, and non-compliant activities within the organization's systems and applications.",
  //       "Automated Remediation and Response: Based on the identified risks and compliance violations, the system should be able to automatically initiate appropriate remediation actions or trigger predefined response workflows. This could include patching vulnerabilities, reconfiguring system settings, isolating compromised assets, or generating incident reports.",
  //       "Policy and Ruleset Management: The system should provide a centralized platform for managing and updating security policies, rulesets, and compliance requirements. It should allow for easy integration and incorporation of new or updated regulations and standards, enabling the AI/ML models to adapt and ensure ongoing compliance.",
  //       "Anomaly Detection and Threat Hunting: Utilizing machine learning algorithms, the system should be capable of detecting anomalous behavior patterns, unusual activities, and potential threats within the organization's network, systems, and user activities. This would enable proactive identification and mitigation of security risks.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Scalability and Performance: The system should be designed to handle large volumes of data and scale efficiently as the organization's infrastructure and compliance requirements grow, ensuring real-time processing and analysis capabilities.",
  //       "Adaptability and Continuous Learning: The AI/ML models employed should be capable of continuous learning and adaptation to evolving security landscapes, emerging threats, and changing compliance requirements, minimizing the need for frequent manual updates or interventions.",
  //     ],
  //   },
  //   {
  //     PSId: "PS25",
  //     PSActive: true,
  //     PSSectorDomain: "UrbanTech - Accessibility Technology",
  //     PSOrganization: "Microsoft",
  //     PSTitle: "Sensory Input Translation System Design",
  //     PSDescription:
  //       "There is a need for a comprehensive system that can bridge the gap between different sensory modalities, enabling individuals with sensory impairments or disabilities to experience and interpret information in a form that is accessible to them. The system should be capable of converting various types of sensory input, such as visual, auditory, or tactile, into alternative representations that can be perceived and understood by users with specific sensory limitations.The primary objective of this system is to enhance accessibility and inclusivity by providing alternative means of experiencing and comprehending sensory information. For example, the system could convert visual information, such as images or videos, into tactile representations that can be experienced through haptic feedback devices, allowing individuals with visual impairments to perceive and explore the content.",
  //     PSFunctionalRequirement: [
  //       "Sensory Input Processing: The system should be capable of receiving and processing various forms of sensory input, such as images, audio, video, or other types of data, depending on the specific application.",
  //       "Sensory Translation: The system should incorporate algorithms and models that can translate the input sensory data from one form to another. For example, it could convert visual information (images or videos) into tactile representations or haptic feedback for individuals with visual impairments, or translate audio data into visual or tactile formats for individuals with hearing impairments.",
  //       "Customization and Personalization: The system should allow for customization and personalization of the sensory translation process based on individual preferences, accessibility needs, or specific use cases. This could include adjusting parameters such as resolution, intensity, or output modalities.",
  //       "Output Devices Integration: The system should be compatible with and able to interface with various output devices or technologies, such as tactile displays, haptic feedback devices, Braille displays, or other assistive technologies, to deliver the translated sensory information effectively.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Accuracy and Reliability: The sensory translation process should be accurate and reliable, ensuring that the converted information faithfully represents the original sensory input without significant loss or distortion.",
  //       "Real-time Performance: Depending on the application, the system may need to process and translate sensory inputs in real-time or near real-time to provide a seamless and responsive experience for users.",
  //     ],
  //   },
  //   {
  //     PSId: "PS26",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity- IoT",
  //     PSOrganization: "Ford",
  //     PSTitle: "Security Enhancement via LoRaWAN Architecture",
  //     PSDescription:
  //       "IoT devices often lack robust security measures, making them vulnerable to cyberattacks. There is a pressing need to enhance the security of these devices, particularly in critical applications. By leveraging the LoRaWAN architecture, which offers long-range and low-power communication capabilities, we can explore and develop secure solutions to mitigate the vulnerabilities in IoT devices. The goal is to implement robust authentication, encryption, and access control mechanisms within the LoRaWAN framework, ensuring the confidentiality, integrity, and availability of data transmitted by IoT devices.",
  //     PSFunctionalRequirement: [
  //       "Device Authentication and Authorization: Implement robust device authentication and authorization mechanisms to ensure that only legitimate devices can join and communicate within the LoRaWAN network. This can involve the use of unique device identifiers, security keys, and secure onboarding processes.",
  //       "Encrypted Communication: Leverage the built-in encryption capabilities of the LoRaWAN protocol to secure data transmissions between end devices and gateways. Implement industry-standard encryption algorithms (e.g., AES) and key management practices to protect data confidentiality and integrity.",
  //       "Secure Over-the-Air Updates: Develop a secure over-the-air update mechanism to remotely update firmware and software on LoRaWAN devices. This should include features such as secure update package delivery, verification, and roll-back capabilities in case of failed updates.",
  //       "Network Access Control: Implement network access control mechanisms to restrict and monitor device access to the LoRaWAN network. This can involve whitelisting or blacklisting devices, setting device-specific communication policies, and monitoring for unauthorized network access attempts.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Scalability and Performance: The security measures implemented should be scalable and capable of handling a large number of IoT devices without compromising performance or introducing significant latency.",
  //       "Interoperability: Ensure that the security solutions are compatible with various LoRaWAN device manufacturers, gateways, and network servers, enabling interoperability and seamless integration within the ecosystem.",
  //     ],
  //   },
  //   {
  //     PSId: "PS27",
  //     PSActive: true,
  //     PSSectorDomain: "UrbanTech - Computer Vision,NLP",
  //     PSOrganization: "Carelon",
  //     PSTitle: "PDF-Based Chatbot Development",
  //     PSDescription:
  //       "Develop a user-friendly interface that allows users to upload PDF files. Integrate a generative AI-powered chatbot capable of understanding and answering questions based on the content of the uploaded PDF. The chatbot should be able to comprehend natural language queries, extract relevant information from the PDF, and provide accurate and contextual responses. This solution will enable users to quickly find answers and gain insights from PDF documents without manually searching through the content, enhancing productivity and improving the overall user experience.",
  //     PSFunctionalRequirement: [
  //       "PDF Upload UI:\nProvide a simple and intuitive user interface for uploading PDF files.",
  //       "Chatbot Integration:Develop a chatbot capable of processing natural language queries based on the content of the uploaded PDF.",
  //       "PDF Parsing and Information Extraction: Implement a module to extract relevant information from the uploaded PDF to provide accurate responses to user queries.",
  //       "User Interaction and Response Handling:Design an interactive chat interface for users to ask questions and receive responses from the chatbot based on the content of the PDF.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Scalability and Performance: Ensure the system can handle multiple user interactions and process PDF files efficiently, even under high load conditions.",
  //       "Security and Data Privacy: Implement security measures to protect user-uploaded PDF files and chat interactions, ensuring data privacy and confidentiality.",
  //     ],
  //   },
  //   {
  //     PSId: "PS28",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity- Deep Fake Detection",
  //     PSOrganization: "Bosch Global",
  //     PSTitle: "AI Voice Detection for Vishing Prevention",
  //     PSDescription:
  //       "The rise of AI-generated voices has led to an increase in voice phishing (vishing) scams, posing significant security risks. There is a critical need for a robust system that can accurately differentiate between AI-generated and human voices in real-time. By leveraging advanced audio analysis and machine learning techniques, this system should be capable of detecting subtle patterns and anomalies that distinguish AI voices from legitimate users. Implementing such a solution will enhance security measures, prevent vishing attacks, and protect individuals and organizations from falling victim to these sophisticated audio-based scams.",
  //     PSFunctionalRequirement: [
  //       "Voice Authentication: Implement a mechanism to authenticate users based on their voice characteristics.",
  //       "\nAI Voice Detection: Develop algorithms to identify AI-generated voices commonly used in vishing scams.",
  //       "\nReal-time Monitoring: Enable continuous monitoring of voice interactions to detect suspicious patterns indicative of AI voices.",
  //       "Alerting System: Implement a system to alert administrators or security personnel upon detecting AI voice patterns, facilitating prompt investigation and response.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Accuracy and Reliability: Ensure the system accurately distinguishes between AI-generated voices and legitimate users, minimizing false positives and negatives.",
  //       "Scalability: Design the system to handle a large volume of voice interactions efficiently, ensuring consistent performance even during peak usage.",
  //     ],
  //   },
  //   {
  //     PSId: "PS29",
  //     PSActive: true,
  //     PSSectorDomain:
  //       "CyberSecurity- AI Ethics, Fairness, Accountability, and Transparency (AIFAT)",
  //     PSOrganization: "DRDO",
  //     PSTitle: "Bias Detection and Mitigation in AI Security Systems",
  //     PSDescription:
  //       "AI algorithms employed in cybersecurity systems can inadvertently inherit and amplify societal biases, leading to discriminatory and unfair outcomes. There is a pressing need to develop robust methods that can detect and mitigate such biases, ensuring fairness and transparency in AI-driven security decision-making processes. These methods should leverage advanced techniques, such as adversarial debiasing, causal reasoning, and explainable AI, to identify and mitigate biases while maintaining high accuracy and reliability. Implementing such solutions will foster trust, accountability, and ethical AI practices in the cybersecurity domain.",
  //     PSFunctionalRequirement: [
  //       "Bias Detection: Implement techniques to detect and quantify potential biases in the data used for training AI-powered security systems. This may involve statistical tests, exploratory data analysis, or specialized algorithms to identify biases related to protected attributes (e.g., race, gender, age) or other relevant factors.",
  //       "Data Debiasing: Develop methods to mitigate and remove identified biases from the training data. This can include techniques such as data reweighting, data augmentation, or adversarial debiasing approaches that aim to minimize the influence of protected attributes on the model's decision-making process.",
  //       "Model Auditing: Incorporate model auditing techniques to evaluate the fairness and transparency of the trained AI models. This may involve testing the models with carefully curated test sets, analyzing feature importance and contribution, or employing techniques like counterfactual explanations to understand the model's decision-making process.",
  //       "Continuous Monitoring: Implement continuous monitoring mechanisms to assess the performance and potential biases of the AI-powered security systems during deployment. This may involve collecting feedback from users, analyzing real-world outcomes, and adjusting or retraining the models as needed to address emerging biases.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Fairness and Non-Discrimination: The bias mitigation methods should ensure that the AI-powered security systems make decisions in a fair and non-discriminatory manner, adhering to relevant laws, regulations, and ethical principles.",
  //       "Accountability and Auditability: The system should provide mechanisms for stakeholders, regulators, and auditors to assess the fairness and transparency of the AI-powered security systems, enabling accountability and compliance with applicable standards and guidelines.",
  //     ],
  //   },
  //   {
  //     PSId: "PS30",
  //     PSActive: true,
  //     PSSectorDomain: "UrbanTech- Accessability",
  //     PSOrganization: "DRDO",
  //     PSTitle: "Inclusive Design Crowdsourcing Platform for Public Spaces",
  //     PSDescription:
  //       "Develop a crowdsourcing platform that enables users to map and report on the accessibility features (or lack thereof) in public spaces within their city. This platform should empower individuals with physical or cognitive limitations to identify areas that require improvements, such as the installation of ramps, braille signage, or sensory-friendly environments. By leveraging user-generated data, the platform can highlight areas in need of inclusive design features and facilitate advocacy efforts to make public spaces more accessible and welcoming for all individuals, fostering a more inclusive and equitable urban landscape.",
  //     PSFunctionalRequirement: [
  //       "Data Collection: The platform should allow users to contribute data on the accessibility features (or lack thereof) of public spaces, buildings, transportation hubs, and other urban infrastructure. This may include information such as the presence of ramps, elevators, braille signage, audio guidance, or accessible restrooms.",
  //       "Location Mapping: The platform should integrate with a mapping system (e.g., Google Maps, OpenStreetMap) to visually display the crowdsourced accessibility data on a map. Users should be able to search for specific locations and view their accessibility features or limitations.",
  //       "User Feedback and Ratings: The platform should enable users to rate and provide feedback on the accessibility of a location based on their personal experiences. This could include features like rating scales, comments, and the ability to upload photos or videos to document specific accessibility issues.",
  //       "Advocacy and Reporting: The platform should provide mechanisms for users to advocate for improvements or report accessibility concerns. This could involve generating reports or petitions that can be submitted to relevant authorities, building owners, or community organizations.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Accessibility: The platform itself should be designed with accessibility in mind, ensuring that users with various disabilities can easily navigate, contribute, and interact with the system.",
  //       "Data Privacy and Security: Implement robust data privacy and security measures to protect user information and ensure compliance with relevant regulations, such as the General Data Protection Regulation (GDPR) or the Americans with Disabilities Act (ADA).",
  //     ],
  //   },
  //   {
  //     PSId: "PS31",
  //     PSActive: true,
  //     PSSectorDomain: "UrbanTech - Education",
  //     PSOrganization: "DRDO",
  //     PSTitle: "Education and Training Programs for AI in Cybersecurity",
  //     PSDescription:
  //       "As AI tools become increasingly prevalent in cybersecurity, there is a growing need to equip professionals with the necessary skills to effectively interact with and manage these advanced technologies. Educational programs and comprehensive training resources must be developed to bridge the knowledge gap, enabling cybersecurity professionals to understand the underlying principles of AI, interpret its outputs, and make informed decisions. These resources should cover topics such as AI fundamentals, ethical considerations, model evaluation, and best practices for integrating AI into security workflows, ensuring a well-prepared workforce capable of navigating the AI-powered future of cybersecurity.",
  //     PSFunctionalRequirement: [
  //       "Curriculum Development: Develop a comprehensive curriculum that covers the foundational concepts of AI, machine learning, and deep learning, as well as their applications in cybersecurity. The curriculum should include theoretical knowledge and practical hands-on exercises.",
  //       "Interactive Learning Environment: Implement an interactive learning environment that facilitates hands-on training and experimentation with AI tools and technologies. This could include virtual labs, simulations, or access to cloud-based resources for practical exercises.",
  //       "Case Studies and Real-World Scenarios: Incorporate case studies and real-world scenarios that highlight the use of AI in cybersecurity applications, such as threat detection, malware analysis, and risk assessment. These practical examples should reinforce the relevance and importance of AI skills in the field.",
  //       "Skill Assessment and Certification: Develop mechanisms for assessing the skills and competencies of learners, such as quizzes, projects, or certifications. This will allow professionals to demonstrate their proficiency and validate their knowledge.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Accessibility and Flexibility: Ensure that the educational programs and training resources are accessible to a diverse audience, including professionals with varying backgrounds and experience levels. Offer flexible delivery methods, such as online courses, in-person workshops, or self-paced learning modules.",
  //       "Scalability and Performance: Design the learning platform and infrastructure to accommodate a large number of learners and ensure a seamless and efficient learning experience, even during periods of high demand or resource-intensive activities.",
  //     ],
  //   },
  //   {
  //     PSId: "PS32",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity - Data Communication and Encryption",
  //     PSOrganization: "DRDO",
  //     PSTitle: "Secure Communication Protocols for AI Systems",
  //     PSDescription:
  //       "As AI systems become more interconnected, they become vulnerable to data breaches and cyberattacks. Traditional security measures may not be sufficient to protect sensitive data processed and transmitted by these systems. Secure communication protocols and advanced data encryption methods tailored for AI-powered security solutions are crucial to safeguard against potential threats.Design secure communication protocols and data encryption methods specifically for AI-powered security solutions.",
  //     PSFunctionalRequirement: [
  //       "Secure Communication Protocols: Develop confidential, integrity-preserving, and available communication protocols for AI system components.",
  //       "Data Encryption: Implement robust encryption for data at rest and in transit using industry-standard algorithms and secure key management.",
  //       "Secure Model Transfer: Enable secure transfer of trained AI models between components, ensuring confidentiality and integrity.",
  //       "Access Control and Authentication: Implement strong access control and authentication mechanisms for authorized access to the AI system.",
  //       "Secure Execution Environment: Provide a secure execution environment, such as secure enclaves or trusted execution environments, for AI system components.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Performance and Efficiency: The secure communication protocols and data encryption methods should not significantly impact the performance and efficiency of the AI-powered security solution, ensuring real-time or near-real-time processing capabilities.",
  //       "Scalability and Interoperability: The security measures should be scalable to accommodate growing data volumes and increasing numbers of interconnected AI components. Additionally, they should be interoperable with existing security protocols and systems to facilitate seamless integration.",
  //     ],
  //   },
  //   {
  //     PSId: "PS33",
  //     PSActive: true,
  //     PSSectorDomain: "UrbanTech - Public Health and Safety",
  //     PSOrganization: "Neptune Ubicom Pvt Ltd",
  //     PSTitle: "Public Health Infrastructure Planning Matrix Development",
  //     PSDescription:
  //       "Consider a scenario where a government is planning the expansion of public health facilities in a growing city. They gather data on population density, gender distribution, economic status (income levels, employment rates), availability of public services (water, electricity), pollution levels (air, water, noise), and existing healthcare infrastructure in each neighborhood. Using this data, they develop a scalable matrix that assigns scores to each area based on their public health needs. Areas with higher scores indicate greater demand for healthcare services and are prioritized for the establishment of new hospitals, clinics, and other healthcare facilities. By regularly updating and analyzing this matrix, the government can ensure that public health resources are allocated efficiently and effectively to meet the evolving needs of the population at the city, district, state, or national level.In urban planning, governments need a comprehensive matrix to assess the public health needs of different areas based on various demographic, economic, and environmental factors. This matrix should consider population density, gender distribution, economic indicators, availability of public services (e.g., water, electricity), pollution levels, and other relevant metrics to gauge the overall health status of each area. By analyzing this data, governments can identify areas that require additional public health institutions and plan accordingly to ensure equitable access to healthcare services across the city, district, state, or country.",
  //     PSFunctionalRequirement: [
  //       "Population Analysis: The system should be able to analyze the population of different areas based on demographics such as age, gender, socio-economic status, and health indicators like prevalent diseases or conditions.",
  //       "Infrastructure Assessment: It should assess the existing infrastructure in each area, including availability and quality of public services such as water, electricity, sanitation, and transportation, which directly or indirectly impact public health.",
  //       "Pollution Index Calculation: The system must calculate a pollution index for each area considering various factors such as air quality, water quality, noise pollution, and waste management practices.",
  //       "Healthcare Facility Planning: Based on the analysis, the system should provide recommendations for the type and scale of healthcare facilities needed in each area, considering factors like population density, health risks, and existing healthcare infrastructure.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Scalability: The system should be scalable to accommodate analysis at various levels, including city, district, state, and country, without compromising performance or accuracy.",
  //       "Data Privacy and Security: It should ensure the privacy and security of sensitive data collected for analysis, adhering to relevant regulations and industry best practices to prevent unauthorized access or misuse of information.",
  //     ],
  //   },
  //   {
  //     PSId: "PS34",
  //     PSActive: true,
  //     PSSectorDomain: "UrbanTech- Data Engineering, DBMS",
  //     PSOrganization: "JPMorgan",
  //     PSTitle: "Transaction Data Processing Microservice Development",
  //     PSDescription:
  //       "A microservice is required to manage transaction files from Client A. In a scenario, Client A, a financial institution, sends a daily transaction file containing customer data. The microservice receives this file, cleans the data to remove inconsistencies, and inserts it into a PostgreSQL database. Additionally, it appends two columns for further analysis. Once processed, the modified file is sent back to Client B, enabling informed decision-making and enhancing data integrity.",
  //     PSFunctionalRequirement: [
  //       "Data Cleaning: The microservice should clean the transaction file received from Client A, which involves removing any inconsistencies, errors, duplicates, or irrelevant information to ensure data accuracy and integrity.",
  //       "Database Insertion: After cleaning the data, the microservice should insert the cleaned transaction data into a PostgreSQL database, ensuring proper data formatting and mapping to the database schema.",
  //       "Column Addition: The microservice should add two additional columns to the cleaned transaction data before sending it back to Client B. These columns may contain calculated values, metadata, or any other relevant information as required by Client B.",
  //       "File Transmission: Once the data is cleaned, inserted into the database, and the additional columns are added, the microservice should transmit the updated transaction file back to Client B in a specified format or protocol agreed upon by both parties.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Performance: The microservice should be designed for high performance to handle large transaction files efficiently, ensuring minimal processing time and resource utilization.",
  //       "Reliability: It should be reliable, capable of handling errors gracefully, and implementing mechanisms for data validation and error handling to prevent data loss or corruption during processing and transmission.",
  //     ],
  //   },
  //   {
  //     PSId: "PS35",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity - IoT",
  //     PSOrganization: "Setup it",
  //     PSTitle: "Urban IoT Cybersecurity Framework",
  //     PSDescription:
  //       "Urban environments are increasingly adopting IoT technologies across various applications such as smart homes, connected vehicles, and environmental monitoring systems. However, the proliferation of these interconnected devices introduces significant cybersecurity challenges. Without proper safeguards, these IoT ecosystems are vulnerable to cyber threats that could compromise data privacy, disrupt critical services, and even pose physical safety risks to citizens. Therefore, there is a pressing need to develop a comprehensive cybersecurity framework tailored to urban IoT ecosystems. This framework should address diverse applications, identify vulnerabilities, and propose mitigation strategies to ensure the resilience and security of urban infrastructure and its inhabitants.",
  //     PSFunctionalRequirement: [
  //       "Authentication and Access Control: Implement secure authentication mechanisms and access controls to ensure only authorized users and devices can access urban IoT systems.",
  //       "Continuous Monitoring: Enable real-time monitoring and intrusion detection to promptly identify and respond to security threats across smart homes, connected vehicles, and environmental monitoring systems.",
  //       "Data Encryption: Utilize end-to-end encryption protocols to protect data transmitted between IoT devices, gateways, and cloud servers, ensuring confidentiality and integrity.",
  //       "Incident Response: Develop predefined incident response procedures to effectively mitigate security incidents and minimize downtime in urban IoT ecosystems.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Scalability: Ensure the cybersecurity framework can scale to accommodate the growing number of IoT devices and applications within urban environments.",
  //       "Resource Efficiency: Optimize resource utilization to maintain the performance and responsiveness of IoT systems, particularly in resource-constrained environments like connected vehicles and environmental monitoring systems.",
  //     ],
  //   },
  //   {
  //     PSId: "PS36",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity - Information Security",
  //     PSOrganization: "Aimpeak Resources and Consults Limited",
  //     PSTitle: "Strong Data Privacy System Design",
  //     PSDescription:
  //       "In an era of heightened data privacy concerns, organizations face the critical challenge of safeguarding sensitive information while maintaining compliance with industry regulations and standards. To address this, there is a need to develop a robust system with stringent data privacy guidelines, encryption protocols, and access controls based on industry best practices. This system must ensure the confidentiality, integrity, and availability of data, protecting it from unauthorized access, breaches, and misuse. By implementing such a system, organizations can enhance trust with customers, partners, and stakeholders while mitigating the risks associated with data privacy violations.",
  //     PSFunctionalRequirement: [
  //       "User Authentication and Authorization: The system must include robust user authentication mechanisms such as multi-factor authentication (MFA) and role-based access controls (RBAC) to ensure that only authorized personnel can access sensitive data.",
  //       "Data Encryption: All data stored within the system must be encrypted using industry-standard encryption algorithms (e.g., AES-256) to prevent unauthorized access or data breaches.",
  //       "Audit Trails: The system should maintain detailed audit trails of user activities, including login attempts, data access, and modifications, to facilitate accountability and traceability.",
  //       "Data Masking and Anonymization: Sensitive data should be masked or anonymized whenever possible to protect the privacy of individuals and comply with regulations such as GDPR. Only users with specific privileges should be able to access the original, unmasked data.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Performance: The system should maintain high performance even with encryption and access control mechanisms in place, ensuring minimal impact on user experience and response times.",
  //       "Compliance: The system must adhere to relevant data privacy regulations such as GDPR, HIPAA, or CCPA, ensuring that all data handling practices are compliant with legal requirements and industry standards.",
  //     ],
  //   },
  //   {
  //     PSId: "PS37",
  //     PSActive: true,
  //     PSSectorDomain: "UrbanTech - IoT",
  //     PSOrganization: "Aimpeak Resources and Consults Limited",
  //     PSTitle: "Multifactor Authentication in IoT and Smart City Tech",
  //     PSDescription:
  //       "As cities evolve into smart ecosystems powered by Internet of Things (IoT) technologies, the need for robust security measures becomes paramount. Integrating multifactor authentication (MFA) directly into IoT and smart city infrastructure is crucial to fortify against cyber threats and unauthorized access. This necessitates the development of IoT and smart city technologies with baked-in multifactor capabilities, ensuring that authentication processes rely on multiple factors such as passwords, biometrics, and cryptographic keys. By embedding MFA into the fabric of these systems, cities can bolster data privacy, safeguard critical infrastructure, and enhance overall cybersecurity posture in the face of evolving threats.",
  //     PSFunctionalRequirement: [
  //       "Device Authentication: The system should support multifactor authentication (MFA) for IoT devices to ensure that only authorized devices can connect to the network or access sensitive data.",
  //       "User Authentication: For user interactions with the IoT and smart city tech, robust user authentication mechanisms such as biometric authentication or token-based authentication should be implemented to enhance security.",
  //       "Secure Communication Protocols: Utilize secure communication protocols such as TLS (Transport Layer Security) or MQTT (Message Queuing Telemetry Transport) with built-in encryption to protect data transmitted between IoT devices and the central system.",
  //       "Access Control Policies: Implement access control policies based on role-based access controls (RBAC) to manage and restrict user and device access to specific functionalities and data within the IoT and smart city ecosystem.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Scalability: The system should be able to handle a large number of IoT devices and user interactions while maintaining performance and security standards, ensuring scalability as the smart city infrastructure expands.",
  //       "Reliability: Ensure high reliability of the IoT infrastructure with built-in redundancy and failover mechanisms to minimize downtime and ensure continuous operation of critical services.",
  //     ],
  //   },
  //   {
  //     PSId: "PS38",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity - API security",
  //     PSOrganization: "Cyberark india",
  //     PSTitle: "API Rate Limiter Implementation",
  //     PSDescription:
  //       "\nIn the realm of API management, ensuring fair and efficient usage of resources is paramount. Rate limiting mechanisms play a vital role in controlling the flow of requests to an API, preventing abuse, and optimizing resource allocation. This entails implementing various rate limiting strategies such as Fixed Window, Sliding Window, Token Bucket, and Leaky Bucket. The challenge lies in designing and deploying a robust rate limiter that can effectively enforce limits based on parameters like request frequency, client identities, and available capacity. By addressing this challenge, API PSOrganizations can safeguard their infrastructure, enhance performance, and deliver a seamless experience to all users.You are expected to develop and implement a comprehensive rate limiting mechanism for API management. This includes understanding and applying various rate limiting strategies such as Fixed Window, Sliding Window, Token Bucket, and Leaky Bucket, based on the specific requirements of the API and its users. Participants should focus on designing a scalable, efficient, and resilient rate limiter that can handle varying loads and enforce limits effectively. Additionally, they should consider factors such as request frequency, client identities, and available capacity while implementing rate limiting rules. The goal is to ensure fair usage of resources, prevent abuse, optimize performance, and deliver a positive user experience.",
  //     PSFunctionalRequirement: [
  //       "Rate Limiting Configuration: The system should allow administrators to configure rate limiting policies based on different parameters such as requests per second, minute, or hour, IP addresses, user accounts, or API keys.",
  //       "Fixed Window Rate Limiting: Implement a fixed window rate limiting strategy where the system restricts the total number of requests allowed within a fixed time window.",
  //       "Sliding Window Rate Limiting: Provide support for sliding window rate limiting to calculate the number of requests made within a specific duration and permit or restrict subsequent requests accordingly.",
  //       "Token Bucket and Leaky Bucket Support: Include token bucket and leaky bucket rate limiting strategies, allowing clients to be allocated tokens based on their request rate and available capacity, or to allow a fixed number of requests to be served immediately and queue any excess requests for later processing.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Scalability: The rate limiting mechanism should be scalable to handle high request volumes without affecting system performance, ensuring that the API remains responsive even during peak usage periods.",
  //       "Customization and Flexibility: Provide flexibility for developers to customize rate limiting rules based on specific use cases and requirements, allowing for fine-tuning of rate limiting policies to suit different API endpoints and client needs.",
  //     ],
  //   },
  //   {
  //     PSId: "PS39",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity - Access Management",
  //     PSOrganization: "Cyberark india",
  //     PSTitle: "Privileged Access Management Solution Implementation",
  //     PSDescription:
  //       "The absence or inadequacy of a Privileged Access Management (PAM) system within an organization poses significant challenges. Without proper control over privileged accounts, there is an increased risk of security breaches, compliance violations, and inefficiencies in access management. Additionally, the lack of robust session monitoring capabilities further exacerbates these issues, leaving critical assets and sensitive data vulnerable to exploitation. Implementing a comprehensive PAM solution is imperative to mitigate these risks and protect the organization's infrastructure and information assets. Leveraging technologies such as Java/J2EE with Spring Boot for backend development can aid in designing a secure and efficient cybersecurity application to address these challenges effectively.",
  //     PSFunctionalRequirement: [
  //       "Privileged Account Management: Implement a system for managing and controlling access to privileged accounts within the organization, including administrator accounts and other accounts with elevated access rights.",
  //       "Role-Based Access Control (RBAC): Incorporate RBAC mechanisms to define and enforce access control policies based on users' roles and responsibilities, ensuring that privileged access is granted only to authorized individuals.",
  //       "Session Monitoring and Logging: Enable comprehensive session monitoring and logging capabilities to track and record activities performed by privileged users, including commands executed, files accessed, and system configurations modified.",
  //       "Access Certification and Review: Implement regular access certification and review processes to ensure that privileged access rights are periodically reviewed, validated, and revoked when no longer necessary, reducing the risk of unauthorized access.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "Security: Ensure that the PAM solution provides robust security measures to protect privileged accounts and sensitive data from unauthorized access, misuse, and cyber threats.",
  //       "Compliance: Ensure compliance with relevant regulatory requirements and industry standards (e.g., PCI DSS, GDPR) by implementing controls and mechanisms to manage privileged access in accordance with regulatory guidelines.",
  //     ],
  //   },
  //   {
  //     PSId: "PS40",
  //     PSActive: true,
  //     PSSectorDomain: "CyberSecurity - Activity Monitoring",
  //     PSOrganization: "Nokia",
  //     PSTitle: "Cybersecurity Dashboard Development",
  //     PSDescription:
  //       "Organizations face a myriad of cybersecurity challenges that necessitate robust monitoring and management solutions. The absence of a centralized dashboard to oversee organizational activity leaves them vulnerable to various risks and threats. These include unidentified environmental risks, exposure of assets to external networks, difficulty in distinguishing legitimate user accounts, inadequate management of critical assets' patches and vulnerabilities, lack of regular monitoring through Endpoint Detection and Response (EDR) tools, and insufficient email security measures and domain registration practices. Additionally, the absence of secure port access and monitoring, training sessions, awareness programs, and proactive measures such as blocking malicious domains further compounds these challenges. Without an effective monitoring system, organizations struggle to track emails passing through their domain, identify and mitigate risks promptly, and ensure the overall security posture of their infrastructure. Therefore, the development of a comprehensive dashboard to address these concerns is imperative to enhance organizational cybersecurity and protect critical assets and sensitive data from potential threats.",
  //     PSFunctionalRequirement: [
  //       "Risk Identification: Develop a feature to identify and prioritize risks within the organization's environment, providing actionable insights to mitigate potential threats promptly.",
  //       "External Exposure Analysis: Implement functionality to assess and visualize the organization's external exposure, identifying assets and services accessible from outside networks to prevent unauthorized access.",
  //       "Critical Assets Management: Include a feature to manage critical assets, track their patch levels, and facilitate vulnerability mitigation actions to ensure the security of essential infrastructure components.",
  //       "Mail Security and Domain Registration: Integrate tools for managing email security and domain registration, ensuring proper configuration and monitoring of email traffic to prevent phishing attacks and domain spoofing.",
  //     ],
  //     PSNonFunctionalRequirement: [
  //       "User-Friendly Interface: Design an intuitive and user-friendly interface for the dashboard, making it easy for users to navigate and access relevant information efficiently.",
  //       "Integration: Enable seamless integration with existing security tools and systems within the organization's infrastructure, ensuring interoperability and data consistency.",
  //     ],
  //   },
  //   {
  //     PSId: "PS41",
  //     PSActive: false,
  //     PSSectorDomain: "CyberSecurity / UrbanTech",
  //     PSTitle: "Choose Your Own",
  //     PSDescription:
  //       "Participants can select a problem statement from two Problem Statement Domains: Redefining Urban Horizons with Innovation or Secure Digital Environment and Privacy, focusing on reshaping urban landscapes through innovation or enhancing cybersecurity and privacy in the digital realm.",
  //   },
  // ];

  const openPopup = (statement) => {
    setSelectedStatement(statement);
    setShowPopup(true);
    console.log(statement);
  };

  const closePopup = () => {
    setSelectedStatement(null);
    setShowPopup(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={mainDiv} id="problemStatement">
      <Logo src="/logo/hackathon.png" height={"10rem"} />
      <div className={problemStatementHeading}>
        <h1 className="heading">Problem Statements</h1>
      </div>
      <div className={problemStatementDiv}>
        {data.map((statement, index) => (
          <div key={index}>
            <ProblemStatementBody statement={statement} openPopup={openPopup} />
          </div>
        ))}
      </div>
      {showPopup && (
        <PopupHackathon
          statementID={selectedStatement.PSId}
          statementTitle={selectedStatement.PSTitle}
          statementOrganisation={selectedStatement.PSOrganization}
          statementSectorDomain={selectedStatement.PSSectorDomain}
          statementDescription={selectedStatement.PSDescription}
          statementFunctionalRequirement={
            selectedStatement.PSFunctionalRequirement
          }
          statementNonFunctionalRequirement={
            selectedStatement.PSNonFunctionalRequirement
          }
          statementActive={selectedStatement.PSActive}
          eventFormURL="https://forms.gle/6aHxGtjkMnSgrrUT6"
          closePopup={closePopup}
        />
      )}
    </div>
  );
};

export default ProblemStatement;
