import React, { useState } from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import styles from "./AlumniPage.module.css";
import AlumniCard from "../../components/AlumniCard/AlumniCard";
import useFetch from "../../hooks/useFetch";

const alumniData = [
  { name: "Pranav Aeron", title: "Data Analyst", company: "Microsoft" },
  { name: "John Doe", title: "Software Engineer", company: "Google" },
  { name: "Jane Smith", title: "Product Manager", company: "Facebook" },
  { name: "Pranav Aeron", title: "Data Analyst", company: "Microsoft" },
  { name: "John Doe", title: "Software Engineer", company: "Google" },
  { name: "Jane Smith", title: "Product Manager", company: "Facebook" },
  { name: "Pranav Aeron", title: "Data Analyst", company: "Microsoft" },
  { name: "John Doe", title: "Software Engineer", company: "Google" },
  { name: "Jane Smith", title: "Product Manager", company: "Facebook" },
  { name: "Pranav Aeron", title: "Data Analyst", company: "Microsoft" },
  { name: "John Doe", title: "Software Engineer", company: "Google" },
  { name: "Jane Smith", title: "Product Manager", company: "Facebook" },
  { name: "Pranav Aeron", title: "Data Analyst", company: "Microsoft" },
  { name: "John Doe", title: "Software Engineer", company: "Google" },
  { name: "Jane Smith", title: "Product Manager", company: "Facebook" },
  { name: "Pranav Aeron", title: "Data Analyst", company: "Microsoft" },
  { name: "John Doe", title: "Software Engineer", company: "Google" },
  { name: "Jane Smith", title: "Product Manager", company: "Facebook" },
];

const AlumniPage = () => {
  const {
    MainDiv,
    SubHeading,
    Line,
    AlumniContainer,
    alumnicard,
    LoadMoreButton,
    Button,
  } = styles;

  const [count, setcount] = useState(3);
  const [showLoadMore, setshowLoadMore] = useState(true);

  const { data, error, loading } = useFetch({
    url: `${import.meta.env.VITE_SERVER_URL}/api/alumni/`,
  });

  const updateCount = () => {
    if (alumniData.length > count + 6) {
      setcount(count + 6);
    } else {
      setcount(alumniData.length);
      setshowLoadMore(false);
    }
  };
  if (data) {
    console.log(data.length);
    data.map((AlumniData, index) => console.log(AlumniData));
  }
  return (
    <div className={MainDiv}>
      <PageHeading imgURL="/img/pageheaders/team.jpg" text="ALUMNI" />
      <div className="Subcontainer">
        <p className={SubHeading}>
          CONNECT WITH OUR ALUMNI
          <hr className={Line} />
        </p>
        <div className={AlumniContainer}>
          {alumniData.slice(0, count).map((alumnus, index) => (
            <AlumniCard
              className={alumnicard}
              alumnus={alumnus}
              index={index}
            />
          ))}
          {data
            ? data
                .slice(0, 3)
                .map((alumnus, index) => (
                  <AlumniCard
                    className={alumnicard}
                    alumnus={alumnus}
                    index={index}
                  />
                ))
            : ""}
        </div>
        <div className={Button}>
          {showLoadMore ? (
            <button className={LoadMoreButton} onClick={updateCount}>
              LOAD MORE
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default AlumniPage;
