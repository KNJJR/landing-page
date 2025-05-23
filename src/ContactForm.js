import React, { useState } from "react";
import "./App.css";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  return (
    <form
      action="https://formspree.io/f/xvgaybvj"
      method="POST"
      onSubmit={() => setStatus("送信が完了しました！")}
    >
      <label style={{ width: "100%" }}>
        お名前:
        <input type="text" name="name" required />
      </label>

      <label style={{ width: "100%" }}>
        メールアドレス:
        <input type="email" name="email" required />
      </label>

      <label style={{ width: "100%" }}>
        メッセージ:
        <textarea name="message" required />
      </label>

      <button type="submit">送信</button>
      <input
        type="hidden"
        name="_redirect"
        value="https://your-site.com/thanks.html"
      />
      <p>{status}</p>
    </form>
  );
};

export default ContactForm;