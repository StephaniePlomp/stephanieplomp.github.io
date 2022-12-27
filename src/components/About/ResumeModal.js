import { FaTimes } from "react-icons/fa"
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import React, { useState, useEffect, useRef } from "react";
import throttle from 'lodash/throttle';
import Resume from './Resume.pdf'
import { BsDownload } from 'react-icons/bs'


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  'https://github.com/StephaniePlomp/stephanieplomp.github.io/raw/92e5613a00d49e990534dde04dad4d51ccd4cc41/src/components/About/Resume.pdf';

function ResumeModal({ onClose }) {
  const [initialWidth, setInitialWidth] = useState(null);
  const pdfWrapper = useRef(null);

  const setPdfSize = () => {
    if (pdfWrapper && pdfWrapper.current) {
      setInitialWidth(pdfWrapper.current.getBoundingClientRect().width);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', throttle(setPdfSize, 500));
    setPdfSize();
    return () => {
      window.removeEventListener('resize', throttle(setPdfSize, 500));
    };
  }, []);

  return (
    <div className='modal-background'
    onClick={onClose}
    >
      <div className='modal-container'
          onClick={onClose}
          >
        <a
        className="resume-download-btn"
        href={resumeLink}
        download>
        <BsDownload className="download-icon" />Download PDF
      </a>
        <FaTimes onClick={onClose} className="modal-close-btn" />
        <div id="pdf-wrapper" 
        ref={pdfWrapper}
        onClick={e => e.stopPropagation()}
        >
          <Document
            file={Resume}
            onLoadError={console.error}
          >
            <Page pageNumber={1} 
            width={initialWidth} 
            renderAnnotationLayer={false}
            />
          </Document>
        </div>
      </div>
    </div>
  )
}

export default ResumeModal