import React, { useState } from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import styles from "./AlumniPage.module.css";
import AlumniCard from "../../components/AlumniCard/AlumniCard";
import useFetch from "../../hooks/useFetch";
import SearchIcon from "./search1.png";

const AlumniPage = () => {
  const {
    MainDiv,
    SubHeading,
    Line,
    AlumniContainer,
    alumnicard,
    LoadMoreButton,
    Button,
    Header,
    Input,
    icon,
  } = styles;

  const [count, setcount] = useState(3);
  const [searchQuery, setSearchQuery] = useState(""); // Search state for the input field

  const { data, error, loading } = useFetch({
    url: `${import.meta.env.VITE_SERVER_URL}/api/alumni/`,
  });

  const updateCount = () => {
    if (filteredAlumni.length > count + 6) {
      setcount(count + 6);
    } else {
      setcount(filteredAlumni.length);
    }
  };

  // Filter alumni data based on the search query (case-insensitive)
  const filteredAlumni = data
    ? data.filter((alumnus) =>
        alumnus.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Logic to conditionally display the Load More button
  const shouldShowLoadMore =
    searchQuery === ""
      ? count < data?.length // In normal case, if there are more results to load
      : filteredAlumni.length > 3 && count < filteredAlumni.length; // When searching, only show if more than 3 results and some left to load

  return (
    <div className={MainDiv}>
      <PageHeading imgURL="/img/pageheaders/team.jpg" text="ALUMNI" />
      <div className="Subcontainer">
        <span className={Header}>
          <p className={SubHeading}>
            CONNECT WITH OUR ALUMNI
            <hr className={Line} />
            {/* Search input */}
            <input
              type="text"
              className={Input}
              placeholder="Search by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input
            />
            <img className={icon} src={SearchIcon} alt="Search icon" />
          </p>
        </span>
        <div className={AlumniContainer}>
          {/* Render filtered alumni cards */}
          {filteredAlumni
            .slice()
            .reverse()
            .slice(0, count)
            .map((alumnus, index) => (
              <AlumniCard
                key={index}
                className={alumnicard}
                alumnus={alumnus}
                index={index}
              />
            ))}
        </div>
        <div className={Button}>
          {shouldShowLoadMore ? (
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
