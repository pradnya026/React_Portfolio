import React from "react";
import education from "./data/education.json";

const Education = () => {
  return (
    <>
      <div className="container ex" id="education">
        <h1>Education</h1>
        {education.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <img src={`/assets/${data.imageSrc}`} alt="" />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    <span style={{ color: "white" }}>
                      {data.startDate} {data.endDate}{" "}
                    </span>{" "}
                    <span style={{ color: "white" }}>{data.location}</span>
                  </h4>
                  <h5 style={{ color: "white" }}>{data.experiences[0]}</h5>
                  <h5 style={{ color: "white" }}>{data.experiences[1]}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Education;
