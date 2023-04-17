import React from "react";
import "./MailingPage.css";

function MailingPage() {


  
  return (
    <div id="mailing" className="mailing-wrapper">
    <div className="mailing-text">Join Our Mailing List</div>
    <div className="form-wrapper">
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
    </div>
    {/* <form action="https://did.us21.list-manage.com/subscribe/post" method="POST"/>
    <input type="hidden" name="u" value="07dfb56195e15671d0198d64c"/>
    <input type="hidden" name="id" value="d19ddeac6b"/> */}
    </div>
  );
}

export default MailingPage;
