import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./CommitteePageIndividual.module.css";

import useFetch from "../../hooks/useFetch";

import PageHeading from "../../components/PageHeading/PageHeading";
import ImageText from "../../components/ImageText/ImageText";
import Loading from "../../components/Loading/Loading";

// CSS STYLES
const {
  committeePageIndividualContainer,
  committeePageIndividualdDiv,
  committeeDescription,
  committeeMemberTitle,
  committeeHeadsContainer,
  committeeMembersContainer,
  committeeMemberName,
} = styles;

const CommitteePageIndividual = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const teamId = useParams();

  let teamValue = "";

  const committeeNames = {
    design: "Design",
    editorial: "Editorial",
    events: "Events",
    logistics: "Logistics",
    photography: "Photography",
    publicrelations: "Public Relations",
    registrations: "Registrations",
    socialmedia: "Social Media",
    technical: "Technical",
  };
  const currentTeamValue = teamId ? Object.values(teamId)[0] : null;
  teamValue = committeeNames[currentTeamValue];

  const { data, error, loading } = useFetch({
    url: `${import.meta.env.VITE_SERVER_URL}/api/committee/name/?committeeName=${teamValue}`,
  });

  if (loading) {
    return <Loading />;
  }

  // REPLACE WITH ERROR COMPONENT

  if (error) {
    return <h6>Something went wrong...</h6>;
  }

  // COMMITTEE DATA
  const committeeData = {
    committeeName: teamValue,
    committeeDescription: data[0].committeeDescription,
    committeeHeads: data[0].committeeHeads,
    committeeMembers: data[0].committeeMembers,
  };

  return (
    <div className={committeePageIndividualContainer}>
      <PageHeading
        imgURL="/img/pageheaders/team.jpg"
        text={committeeData.committeeName}
      />
      <div className={committeePageIndividualdDiv}>
        <p className={committeeDescription}>
          {committeeData.committeeDescription}
        </p>
        <h4 className={committeeMemberTitle}>Heads & Associate Heads</h4>
        <div className={committeeHeadsContainer}>
          {committeeData.committeeHeads.map((head) => (
            <ImageText
              key={head._id}
              title={head.name}
              titleAlign="center"
              subTitle={head.position}
              subTitleAlign="center"
              link={head.linkedInURL}
              mainImg={head.headImgURL}
              externalLink={false}
              textColor={"var(--textDark)"}
            />
          ))}
        </div>
        <h4 className={committeeMemberTitle}>Members</h4>
        <div className={committeeMembersContainer}>
          {committeeData.committeeMembers.map((member) => (
            <div key={member._id} className={committeeMemberName}>
              {member.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitteePageIndividual;
