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

  console.log(data)
  
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
        ?.filter((member) => member.position === "Head")
        .sort((a, b) => a.order - b.order),
    [data]
  );
  const associates = useMemo(
    () =>
      data
        ?.filter((member) => member.position === "Associate")
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

  // Helper function to render members with consistent styling
  const renderMembers = (members, title) => {
    if (!members || members.length === 0) return null;
    
    return (
      <>
        <h2>{title}</h2>
        <div className={managementDiv}>
          {members.map((member) => (
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
      </>
    );
  };

  return (
    <div className={teamPageContainer}>
      <PageHeading imgURL="/img/pageheaders/team.jpg" text="TEAM" />
      <div className={managementPageContainer}>
        {renderMembers(faculties, "Faculty Coordinator")}
        {renderMembers(presidents, "Management")}
        {renderMembers(management, "Management")}
        {renderMembers(heads, "Heads")}
        {renderMembers(associates, "Associate Heads")}
      </div>
    </div>
  );
};

export default TeamPage;