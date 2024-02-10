import { useEffect } from "react";
import styles from "./CsrPage.module.css";

import useFetch from "../../hooks/useFetch";

import PageHeading from "../../components/PageHeading/PageHeading";
import EventGrid from "../../components/EventGrid/EventGrid";

// CSS STYLES
const { csrContainer, csrHeader } = styles;

const CsrPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const { data, error, loading } = useFetch({
    url: `http://localhost:3000/api/csr/`,
  });

  return (
    <div className={csrContainer}>
      <div className={csrHeader}>
        <PageHeading imgURL="/img/pageheaders/csr.png" text="CSR" />
      </div>
      <EventGrid data={data} loading={loading} error={error} />
    </div>
  );
};

export default CsrPage;
