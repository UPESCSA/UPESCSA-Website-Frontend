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
    url: "http://localhost:3000/api/head/",
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
      <PageHeading imgURL="/img/pageheaders/team.png" text="TEAM" />
      <div className={managementPageContainer}>
        <h2>Faculties</h2>
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
