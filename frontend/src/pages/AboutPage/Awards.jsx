import React from "react";
import { motion } from "framer-motion";
import "./Awards.css";

const Awards = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ background: "linear-gradient(100deg, #242323, rgb(0, 0, 0))" }}
      className="py-5"
    >
      <div className="container">
        <h2 className="text-center text-white mb-4" >Awards</h2>
        <div className="main-timeline-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="timeline-2 left-2"
          >
            <div className="card">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4">Learning Partner of the Year</h4>
                <p className="text-muted mb-4">
                  <i className="far fa-clock" aria-hidden="true"></i> 2019
                </p>
                <p className="mb-0">
                  Recognized as the 2019 Microsoft Learning Partner of the
                  Year, Global Knowledge Technologies has been committed to
                  delivering high caliber training on Microsoft technologies.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="timeline-2 right-2"
          >
            <div className="card">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4">
                  Fastest Growing Training Partner
                </h4>
                <p className="text-muted mb-4">
                  <i className="far fa-clock" aria-hidden="true"></i> 2019
                </p>
                <p className="mb-0">
                  Validating the matchless efforts put by Global Knowledge
                  Technologies in terms of providing matchless Red Hat training
                  and Certifications, it has been acknowledged with Fastest
                  Growing Training Partner-2019.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="timeline-2 left-2"
          >
            <div className="card">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4">Learning Partner of the Year</h4>
                <p className="text-muted mb-4">
                  <i className="far fa-clock" aria-hidden="true"></i> 2018
                </p>
                <p className="mb-0">
                  Recipient of Cisco's prestigious and coveted Learning Partner
                  of the Year-2018; Global Knowledge Technologies has been
                  honored by Cisco for excelling in delivering expert-level
                  training.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="timeline-2 right-2"
          >
            <div className="card">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4">IBM GTP of the Year</h4>
                <p className="text-muted mb-4">
                  <i className="far fa-clock" aria-hidden="true"></i> 2015/2014
                </p>
                <p className="mb-0">
                  Global Knowledge Technologies for its outstanding services as
                  a GTP of IBM has been recognized as IBM GTP of the Year in
                  the year 2014 and 2015 consecutively.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Awards;
