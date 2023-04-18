import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from "./InputField";
// import "./Mailchimp.scss";
import "./Mailchimp.css";

console.log(process.env);
const Mailchimp = ({ modalOpen, setModalOpen }) => {
  const postUrl = `https://did.us21.list-manage.com/subscribe/post?u=07dfb56195e15671d0198d64c&id=d19ddeac6b`;
  // const postUrl = `https://genhybridsystems.us1.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MC_U}&id=${process.env.REACT_APP_MC_ID}`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        )}
      />
    </div>
  );
};
const CustomForm = ({
  status,
  message,
  onValidated,
  modalOpen,
  setModalOpen,
}) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
    if (modalOpen && status === "success") clearFields();
  }, [status, modalOpen]);

  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      firstName &&
      lastName &&
      email.indexOf("@") > -1 &&
      onValidated({
        MERGE0: email,
        MERGE1: firstName,
        MERGE2: lastName,
      });
  };

  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
      <h3 className="mc__title">
        {status === "success"
          ? "Success!"
          : "Join our email list for future updates."}
      </h3>
      {status === "sending" && (
        <div className="mc__alert mc__alert--sending">sending...</div>
      )}
      {status === "error" && (
        <div
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status !== "success" ? (
        <div className="mc__field-container">
          <InputField
            label="First Name"
            onChangeHandler={setFirstName}
            type="text"
            value={firstName}
            placeholder="Jane"
            isRequired
          />

          <InputField
            label="Last Name"
            onChangeHandler={setLastName}
            type="text"
            value={lastName}
            placeholder="Doe"
            isRequired
          />

          <InputField
            label="Email"
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="your@email.com"
            isRequired
          />
        </div>
      ) : null}

      {status === "success" ? (
        <button
          onClick={() => setModalOpen(false)}
          className="g__justify-self-center"
        >
          Close
        </button>
      ) : (
        <InputField
          label="subscribe"
          type="submit"
          formValues={[email, firstName, lastName]}
        />
      )}
    </form>
  );
};

{
  /* <form action="https://did.us21.list-manage.com/subscribe/post" method="POST">
    <input type="hidden" name="u" value="07dfb56195e15671d0198d64c">
    <input type="hidden" name="id" value="d19ddeac6b"> */
}
export default Mailchimp;
