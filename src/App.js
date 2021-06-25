import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";
const res = {
  id: "recAGJfiU4CeaV0HL",
  order: 3,
  title: "Full Stack Web Developer",
  dates: "December 2015 - Present",
  duties: [
    "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
    "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
    "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
  ],
  company: "TOMMY",
};

let data = [];

function App() {
  const [displaydata, setDisplayData] = useState({});
  const [active, setActive] = useState("");

  const changeData = (Companyname) => {
    const res = data.filter((info) => {
      return info.company === Companyname;
    });
    setDisplayData(res[0]);
    setActive(res[0].company);
  };

  const getAndSetData = async () => {
    const tData = await fetch(url);
    const pData = await tData.json();
    data = pData;
    setDisplayData(data[0]);
    setActive(data[0].company);
  };

  useEffect(() => {
    getAndSetData();
  }, []);

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      {displaydata && (
        <div className="jobs-center">
          <div className="btn-container">
            {/* <button className="job-btn active-btn">TOMMY</button> */}
            {data.map((info) => {
              return info.company === active ? (
                <button
                  className="job-btn active-btn"
                  onClick={() => changeData(info.company)}
                >
                  {info.company}
                </button>
              ) : (
                <button
                  className="job-btn "
                  onClick={() => changeData(info.company)}
                >
                  {info.company}
                </button>
              );
            })}
          </div>
          <article className="job-info">
            <h3>{displaydata.title}</h3>
            <h4>{displaydata.company}</h4>
            <p className="job-date">{displaydata.dates}</p>
            {displaydata.duties &&
              displaydata.duties.map((duty) => {
                return (
                  <div className="job-desc">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="job-icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path>
                    </svg>
                    <p>{duty}</p>
                  </div>
                );
              })}
          </article>
        </div>
      )}
      <button className="btn" type="button">
        more info
      </button>
    </section>
  );
}

export default App;
