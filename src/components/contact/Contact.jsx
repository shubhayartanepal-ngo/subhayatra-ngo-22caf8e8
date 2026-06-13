import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getContactInfo } from "../../apis/contact";

const contact = () => {
  const [collegeInfo, setCollegeInfo] = useState({
    address: "Manigram, Tilottama-05",
    phoneNumber: "071-590150",
    email: "skycollegehelpdesk@gmail.com",
    facebookLink: "https://facebook.com/skycollege2024",
    instagramLink: "https://instagram.com/skyinternationalcollege",
  });

  useEffect(() => {
    getContactInfo().then((info) => {
      if (info) {
        setCollegeInfo((prev) => ({
          ...prev,
          address: info.location || prev.address,
          phoneNumber: info.phoneNumber || prev.phoneNumber,
          email: info.email || prev.email,
        }));
      }
    });
  }, []);
  return (
    <>
      <section id="text-1" className="widget widget_text bg-second text-light">
        <h4 className="widget-title">Do you need support !</h4>
        <div className="textwidget">
          <ul className="semi-bold">
            <li>
              <span className="normal">Phone:</span>{" "}
              <Link to="tel:+1253 1245 1245">{collegeInfo.phoneNumber}</Link>
            </li>
            <li>
              <span className="normal">Office:</span> {collegeInfo.address}
            </li>
            <li>
              <span className="normal">Mail:</span>{" "}
              <a href={`mailto:${collegeInfo.email}`}>{collegeInfo.email}</a>
            </li>
          </ul>
          <div className="gaps style-parent"></div>
          <div className="wpcf7">
            <div className="screen-reader-response"></div>
            <form action="#" method="post" className="wpcf7-form">
              <p>
                <Link to="/contact" className=" btn">
                  Contact Us
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default contact;
