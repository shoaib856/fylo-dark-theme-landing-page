import BenefitItem from "./BenefitItem";
import anywhere from "../assets/images/icon-access-anywhere.svg";
import security from "../assets/images/icon-security.svg";
import collaboration from "../assets/images/icon-collaboration.svg";
import anyFile from "../assets/images/icon-any-file.svg";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: anywhere,
      heading: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      icon: security,
      heading: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      icon: collaboration,
      heading: "Real-time collaboration",
      description:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      icon: anyFile,
      heading: "Store any type of file",
      description:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];

  return (
    <section
      id="benefits-section"
      className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 py-12 max-md:px-4"
    >
      {benefits.map((benefit) => (
        <BenefitItem key={benefit.heading}>
          <BenefitItem.Icon>
            <img src={benefit.icon} alt={benefit.heading} />
          </BenefitItem.Icon>
          <BenefitItem.Heading>{benefit.heading}</BenefitItem.Heading>
          <BenefitItem.Description>
            {benefit.description}
          </BenefitItem.Description>
        </BenefitItem>
      ))}
    </section>
  );
};

export default BenefitsSection;
