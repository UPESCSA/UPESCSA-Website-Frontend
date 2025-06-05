import styles from "./TeamPage.module.css";

import { useEffect, useMemo } from "react";

import useFetch from "../../hooks/useFetch";

import ImageText from "../../components/ImageText/ImageText";
import PageHeading from "../../components/PageHeading/PageHeading";
import Loading from "../../components/Loading/Loading";

// CSS STYLES
const { managementPageContainer, managementDiv, teamPageContainer } = styles;

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const { data, error, loading } = useFetch({
    url: `${import.meta.env.VITE_SERVER_URL}/api/head/`,
  });

  const faculties = useMemo(
    () =>
      data
        ?.filter((member) => member.category === "Faculty")
        .sort((a, b) => a.order - b.order),
    [data]
  );
  const presidents = useMemo(
    () =>
      data
        ?.filter((member) => member.category === "President")
        .sort((a, b) => a.order - b.order),
    [data]
  );
  const management = useMemo(
    () =>
      data
        ?.filter((member) => member.category === "Management")
        .sort((a, b) => a.order - b.order),
    [data]
  );
  const heads = useMemo(
    () =>
      data
        ?.filter((member) => member.category === "Heads")
        .sort((a, b) => a.order - b.order),
    [data]
  );
  const associates = useMemo(
    () =>
      data
        ?.filter((member) => member.category === "Associate Heads")
        .sort((a, b) => a.order - b.order),
    [data]
  );

  if (loading) {
    return <Loading />;
  }

  // REPLACE WITH ERROR COMPONENT

  if (error) {
    return <h6>Something went wrong...</h6>;
  }

  const textColor = "var(--textDark)";

  return (
    <div className={teamPageContainer}>
      <PageHeading imgURL="/img/pageheaders/team.jpg" text="TEAM" />
      <div className={managementPageContainer}>
        <div
          style={{
            textAlign: "center",
            margin: "2rem 0 3rem 0", // Increased bottom margin
            padding: "1.5rem", // Increased padding
            border: "1px dashed var(--primary)",
            borderRadius: "8px",
          }}
        >
          <h2
            style={{
              fontWeight: "bold",
              color: "red",
              marginBottom: "0.75rem",
            }}
          >
            Tenure 2025-2026 Coming Soon!
          </h2>
          <p style={{ fontWeight: "bold", color: "red" }}>
            Our team for the new tenure will be updated shortly. Stay tuned!
          </p>
        </div>
        <h2>Faculty Coordinator</h2>
        <div className={managementDiv}>
          {faculties.map((member) => (
            <ImageText
              key={member._id}
              title={member.name}
              titleAlign="center"
              subTitle={member.position}
              subTitleAlign="center"
              link={member.linkedInURL}
              mainImg={member.headImgURL}
              textColor={textColor}
              externalLink={true}
            />
          ))}
        </div>

        <h2>Management</h2>
        <div className={managementDiv}>
          {presidents.map((member) => (
            <ImageText
              key={member._id}
              title={member.name}
              titleAlign="center"
              subTitle={member.position}
              subTitleAlign="center"
              link={member.linkedInURL}
              mainImg={member.headImgURL}
              textColor={textColor}
              externalLink={true}
            />
          ))}
        </div>

        <div className={managementDiv}>
          {management.map((member) => (
            <ImageText
              key={member._id}
              title={member.name}
              titleAlign="center"
              subTitle={member.position}
              subTitleAlign="center"
              link={member.linkedInURL}
              mainImg={member.headImgURL}
              textColor={textColor}
              externalLink={true}
            />
          ))}
        </div>

        <h2>Heads</h2>
        <div className={managementDiv}>
          {heads.map((member) => (
            <ImageText
              key={member._id}
              title={member.name}
              titleAlign="center"
              subTitle={member.position}
              subTitleAlign="center"
              link={member.linkedInURL}
              mainImg={member.headImgURL}
              textColor={textColor}
              externalLink={true}
            />
          ))}
        </div>

        <h2>Associate Heads</h2>
        <div className={managementDiv}>
          {associates.map((member) => (
            <ImageText
              key={member._id}
              title={member.name}
              titleAlign="center"
              subTitle={member.position}
              subTitleAlign="center"
              link={member.linkedInURL}
              mainImg={member.headImgURL}
              textColor={textColor}
              externalLink={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
