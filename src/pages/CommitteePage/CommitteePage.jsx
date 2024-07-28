import { useEffect } from "react";
import styles from "./CommitteePage.module.css";

import useFetch from "../../hooks/useFetch";

import ImageText from "../../components/ImageText/ImageText";
import PageHeading from "../../components/PageHeading/PageHeading";
import Loading from "../../components/Loading/Loading";

// CSS STYLES
const { committeePageContainer, teamPageContainer } = styles;

const CommitteePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const { data, error, loading } = useFetch({
    url: `${import.meta.env.VITE_SERVER_URL}/api/committee/`,
  });

  if (loading) {
    return <Loading />;
  }

  // REPLACE WITH ERROR COMPONENT

  if (error) {
    return <h6>Something went wrong...</h6>;
  }

  return (
    <div className={teamPageContainer}>
      <PageHeading imgURL="/img/pageheaders/team.jpg" text="Committees" />
      <div className={committeePageContainer}>
        {data.map((committee) => (
          <ImageText
            key={committee._id}
            title={committee.committeeName}
            titleAlign="center"
            link={committee.committeePageURL}
            externalLink={false}
            mainImg={"/logo/upescsa_nobg_low.png"}
            textColor={"var(--textDark)"}
          />
        ))}
      </div>
    </div>
  );
};

export default CommitteePage;
