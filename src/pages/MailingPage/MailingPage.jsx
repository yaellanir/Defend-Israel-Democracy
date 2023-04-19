import React, { useState } from "react";
import Mailchimp from "./Mailchimp";
import "./MailingPage.css";

function MailingPage() {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div id="mailing" className="mailing-wrapper">
      <div className="mailing-text">Connect With Us</div>
      {/* {!modalOpen && (
        <button  className='primaryBtn' onClick={() => setModalOpen(true)}>Sign Up</button>
      )} */}
      {modalOpen && (
        <Mailchimp modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
<div className="pdfDownload">
  <a href="dummy.pdf"
  download='dummy.pdf'>
  <button>Download</button>
  </a>
</div>
    </div>
  );
}

export default MailingPage;
