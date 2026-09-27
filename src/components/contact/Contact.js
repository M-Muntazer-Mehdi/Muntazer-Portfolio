import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import { useApp } from "../../context/AppContext";
import portrait from "../../assets/images/contact-portrait.jpg";

const ease = [0.22, 0.61, 0.36, 1];

/* EmailJS identifiers are browser credentials, public by design. What stops
   anyone else sending through this template is the allowed-origins list in the
   EmailJS dashboard, which must name muntazermehdi.com once deployed. */
const EMAILJS = { service: "service_lyvbr0m", template: "template_phpruhe", key: "qhskEOYPU3vOzuddR" };
const EMAIL = "muntazer.mehdi.rizvi@gmail.com";

const SOCIAL = [
  { icon: <FaGithub />, href: "https://github.com/M-Muntazer-Mehdi", label: "GitHub" },
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/m-muntazer-mehdi/", label: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/triple_m.r/", label: "Instagram" },
];

const card = {
  background: "var(--surface)",
  border: "1px solid var(--hair)",
};

const Contact = () => {
  const { theme } = useApp();

  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");          // honeypot
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [sending, setSending] = useState(false);

  /* Form controls resolve var() once, when they are created, and do not
     re-resolve it on a theme switch the way ordinary elements do — under
     color-scheme: dark the fields keep rendering the outgoing palette. Reading
     the tokens off the document a frame after the theme lands, and passing
     concrete values, avoids that without duplicating the palette. */
  const [tok, setTok] = useState({ ink: "var(--ink)", line: "var(--hair-hard)", field: "var(--paper)" });
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const cs = getComputedStyle(document.documentElement);
      setTok({
        ink: cs.getPropertyValue("--ink").trim(),
        line: cs.getPropertyValue("--hair-hard").trim(),
        field: cs.getPropertyValue("--paper").trim(),
      });
    });
    return () => cancelAnimationFrame(id);
  }, [theme]);

  const inputStyle = (bad) => ({
    color: tok.ink,
    background: tok.field,
    border: `1px solid ${bad ? "var(--accent)" : tok.line}`,
  });

  const emailValid = () => /^\w+([-.]?\w+)*@\w+([-]?\w+)*(\.\w{2,})+$/.test(String(email).toLowerCase());

  const handleSend = (e) => {
    e.preventDefault();
    if (company) return;
    if (!username) return setErrMsg("Username is required!");
    if (!email) return setErrMsg("Please give your Email!");
    if (!emailValid()) return setErrMsg("Give a valid Email!");
    if (!subject) return setErrMsg("Please give your Subject!");
    if (!message) return setErrMsg("Message is required!");

    setErrMsg("");
    setSending(true);
    emailjs
      .send(
        EMAILJS.service,
        EMAILJS.template,
        { from_name: username, from_phone: phoneNumber, from_email: email, subject, message },
        EMAILJS.key
      )
      .then(() => {
        setSuccessMsg(`Thank you ${username}, your message has been sent. I'll reply from ${EMAIL}.`);
        setUsername(""); setPhoneNumber(""); setEmail(""); setSubject(""); setMessage("");
      })
      .catch(() => setErrMsg("That did not send. Email me directly and it will reach me."))
      .finally(() => setSending(false));
  };

  const Label = ({ children }) => <p className="tag">{children}</p>;

  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-screen-xl px-5 pb-24 pt-20 lgl:px-8 lgl:pt-28">
        {/* title */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease }}
          className="mb-12 grid gap-8 lgl:grid-cols-12"
        >
          <div className="lgl:col-span-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-[12.5px] text-accent">/</span>
              <span className="tag">Contact</span>
            </div>
            <h2 className="font-display text-[clamp(2rem,4.6vw,3.2rem)] font-semibold leading-[0.98] tracking-tighter2">
              Let's talk.
            </h2>
          </div>
          <div className="lgl:col-span-7 lgl:pt-2">
            <p className="max-w-[52ch] text-[15px] leading-[1.75] text-muted text-pretty">
              The form reaches me, but email is faster and I answer it myself.
            </p>
          </div>
        </motion.div>

        <div className="flex w-full flex-col justify-between gap-6 lgl:flex-row">
          {/* left — who you are writing to */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease }}
            className="flex w-full flex-col gap-8 p-4 lgl:w-[35%] lgl:p-8"
            style={card}
          >
            <img
              className="mb-2 h-64 w-full object-cover lgl:h-auto lgl:min-h-[16rem] lgl:flex-1"
              style={{ objectPosition: "50% 18%" }}
              src={portrait}
              alt="Muntazer Mehdi"
            />

            <div className="flex flex-col gap-4">
              <h3 className="font-display text-[1.7rem] font-semibold leading-tight tracking-tight">
                M. Muntazer Mehdi
              </h3>
              <p className="text-[15px] text-muted">Full-Stack Developer</p>
              <p className="text-[15px] leading-relaxed text-muted text-pretty">
                I build products end to end — web, mobile and the AI systems around them —
                and I answer my own email.
              </p>
              <p className="flex flex-wrap items-center gap-x-2 text-[15px] text-muted">
                Email:
                <a href={`mailto:${EMAIL}`} className="break-all text-accent underline-offset-4 hover:underline">
                  {EMAIL}
                </a>
              </p>
            </div>

            <div>
              <h4 className="tag mb-4">Find me in</h4>
              <div className="flex gap-3">
                {SOCIAL.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center text-[15px] text-muted transition-colors hover:text-accent"
                    style={{ border: "1px solid var(--hair-hard)" }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* right — the form */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: 0.08 }}
            className="flex w-full flex-col gap-8 p-4 lgl:w-[63%] lgl:p-8"
            style={card}
          >
            <form className="flex w-full flex-col gap-4 py-2 lgl:gap-6 lgl:py-5" noValidate onSubmit={handleSend}>
              {errMsg && (
                <p className="px-4 py-3 text-center text-[15px]"
                   style={{ border: "1px solid var(--accent)", color: "var(--accent)" }}>
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="px-4 py-3 text-center text-[15px]"
                   style={{ border: "1px solid var(--accent)", color: "var(--accent)" }}>
                  {successMsg}
                </p>
              )}

              <div className="flex w-full flex-col gap-4 lgl:flex-row lgl:gap-10">
                <div className="flex w-full flex-col gap-3 lgl:w-1/2">
                  <Label>Your name</Label>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                         className="h-12 w-full px-4 text-[14.5px] outline-none"
                         style={inputStyle(errMsg === "Username is required!")} />
                </div>
                <div className="flex w-full flex-col gap-3 lgl:w-1/2">
                  <Label>Phone number</Label>
                  <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                         className="h-12 w-full px-4 text-[14.5px] outline-none"
                         style={inputStyle(false)} />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Label>Email</Label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                       className="h-12 w-full px-4 text-[14.5px] outline-none"
                       style={inputStyle(errMsg === "Please give your Email!" || errMsg === "Give a valid Email!")} />
              </div>

              <div className="flex flex-col gap-3">
                <Label>Subject</Label>
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)}
                       className="h-12 w-full px-4 text-[14.5px] outline-none"
                       style={inputStyle(errMsg === "Please give your Subject!")} />
              </div>

              <div className="flex flex-col gap-3">
                <Label>Message</Label>
                <textarea rows={8} value={message} onChange={(e) => setMessage(e.target.value)}
                          className="w-full resize-y px-4 py-3 text-[14.5px] leading-relaxed outline-none"
                          style={inputStyle(errMsg === "Message is required!")} />
              </div>

              {/* honeypot */}
              <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"
                     value={company} onChange={(e) => setCompany(e.target.value)}
                     className="pointer-events-none absolute h-0 w-0 opacity-0" />

              <button type="submit" disabled={sending}
                      className="h-12 w-full font-mono text-[12.5px] uppercase tracking-[0.16em] transition-colors disabled:opacity-60"
                      style={{ border: "1px solid var(--accent)", color: "var(--accent)" }}>
                {sending ? "Sending" : "Send message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
