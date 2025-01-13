import styles from "./SponsorsSection.module.css";

const {
  mainDiv,
  sponsorsHeadingDiv,
  subHeading,
  sponsorsHeading,
  sponsorsDiv,
  sponsorsInfo,
  sponsorInfo,
  sponsorImage,
  bluelearn,
} = styles;

const SponsorsSection = () => {
  const sponsors = [
    {
      name: "Live AI",
      id: "liveai",
      link: "https://www.liveai.eu/",
      image: "/sponsors/sponsors/LiveAi.jpg",
    },
    {
      name: "Rabbit AI",
      id: "rabbitai",
      link: "https://rabbitt.ai/",
      image: "/sponsors/sponsors/RabbitAi.jpg",
    },
    {
      name: "Learning with Travelling",
      id: "learningwithtravelling",
      link: "https://learningwhiletravelling.com/",
      image: "/sponsors/sponsors/lwt.png",
    },
    {
      name: "The Web Gravity",
      id: "thewebgravity",
      link: "https://www.thewebgravity.com/",
      image: "/sponsors/sponsors/TheWebGravity.png",
    },
    {
      name: "GiveMyCertificate",
      id: "givemycertificate",
      link: "https://givemycertificate.com/",
      image: "/sponsors/sponsors/givemycertificate.png",
    },
    {
      name: "XYZ",
      id: "xyz",
      link: "https://gen.xyz/",
      image: "/sponsors/sponsors/xyz.png",
    },
  ];

  return (
    <div className={mainDiv} id="sponsors">
      <div className={sponsorsHeadingDiv}>
        <h1 className={subHeading}>SUPPORTED BY</h1>
        <h1 className="heading" id={sponsorsHeading}>
          OUR SPONSORS
        </h1>
      </div>
      <div className={sponsorsDiv}>
        {sponsors.map((sponsor) => (
          <div className={sponsorsInfo} key={sponsor.name}>
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <div className={sponsorInfo}>
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className={sponsorImage}
                  id={sponsor.id}
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsSection;
