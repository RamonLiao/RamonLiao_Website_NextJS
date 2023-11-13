"use client";

import React, { useState, useRef } from "react";
import styles from "@/styles/contact.module.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const refFromName = useRef(null);
  const refFromEmail = useRef(null);
  const refSubject = useRef(null);
  const refMessage = useRef(null);

  const refResult = useRef(null);
  const [result, setResult] = useState("Email sent successfull.");

  // // EmailJS User ID
  emailjs.init("uW8sf4GjjiyR8FyvC");

  function handleSendEmail() {
    // Get the form data
    const fromName = refFromName.current.value;
    const fromEmail = refFromEmail.current.value;
    const subject = refSubject.current.value;
    const message = refMessage.current.value;

    if (!fromName) {
      setResult("Please enter your name.");
    } else if (!fromEmail) {
      setResult("Please enter your Email.");
    } else if (!message) {
      setResult("Please leave your message.");
    } else {
      // Send email with EmailJS
      emailjs
        .send("service_xp54hlk", "template_phpf8gg", {
          from_name: fromName,
          from_email: fromEmail,
          reply_to: fromEmail,
          subject: subject,
          message: message,
        })
        .then(
          function () {
            setResult("Email sent successfully!");
          },
          function (error) {
            setResult("Email sending failed!");

            console.log(error);
          }
        );
    }

    refResult.current.style.opacity = 1;

    setTimeout(() => {
      refResult.current.style.opacity = 0;
    }, 3000);
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.formSection}>
            <h2>Hi, Friend!</h2>
            <p>Welcome to contact me with any question!</p>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="fromName">Name:</label>
                <input
                  type="text"
                  name="fromName"
                  id="fromName"
                  required
                  autoComplete="off"
                  placeholder="Full Name"
                  ref={refFromName}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="fromEmail">Email:</label>
                <input
                  type="email"
                  name="fromEmail"
                  id="fromEmail"
                  required
                  autoComplete="off"
                  placeholder="Example@email.com"
                  ref={refFromEmail}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  autoComplete="off"
                  placeholder="Collaboration Request"
                  ref={refSubject}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message:</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  spellCheck="false"
                  autoComplete="off"
                  placeholder="Your text..."
                  ref={refMessage}
                ></textarea>
              </div>

              <div className={`${styles.formGroup} ${styles.resultContainer}`}>
                <p className={styles.result} ref={refResult}>
                  {result}
                </p>
                <button
                  type="button"
                  className={styles.sendBtn}
                  onClick={handleSendEmail}
                >
                  Send Email
                </button>
              </div>
            </form>
          </div>

          <div className={styles.gradientSection}>
            <div className={styles.gradient}></div>
            <div className={styles.gradientContent}>
              <h1 className={styles.heading}>
                Welcome to <span>Ramon&apos;s</span> Website!
              </h1>
              <p className={styles.paragraph}>
                Nothing is impossible. Let&apos;s build the future together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
