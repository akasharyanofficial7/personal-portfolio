import React from "react";
import CV from "../../assets/cv.pdf";
const CTA = () => {
  return (
    <>
      <div className="cta">
        <a
          href={CV}
          Download
          className="btn  text-blue-500 text-lg f font-mono hover:text-gray-700"
        >
          Resume
        </a>
        {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
      </div>
    </>
  );
};

export default CTA;
