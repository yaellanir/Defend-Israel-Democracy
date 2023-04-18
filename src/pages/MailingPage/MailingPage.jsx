import React, { useState } from "react";
import Mailchimp from "./Mailchimp";
import "./MailingPage.css";

function MailingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div id="mailing" className="mailing-wrapper">
      <div className="mailing-text">Connect With Us</div>
      {!modalOpen && (
        <button  className='primaryBtn' onClick={() => setModalOpen(true)}>Sign Up</button>
      )}
      {modalOpen && (
        <Mailchimp modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
      {/* <div className="form-wrapper">
        <form action="">
          <div className="inputs-wrapper">
            <div className="labelInput">
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <div className="labelInput">
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div className="labelInput">
              <label htmlFor="">Phone Number</label>
              <input type="text" />
            </div>
          </div>
          <button className="submitBtn">Submit</button>
        </form>
      </div> */}
    </div>
  );
}

export default MailingPage;
