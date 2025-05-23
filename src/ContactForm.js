import "./App.css";

const ContactForm = () => {
  return (
    <form
      action="https://formspree.io/f/xvgaybvj"
      method="POST"
      className="form-grid"
    >
      <div className="form-left">
        <label>
          お名前:
          <input type="text" name="name" required />
        </label>

        <label>
          会社（組織）名:
          <input type="text" name="organization" />
        </label>

        <label>
          メールアドレス:
          <input type="email" name="email" required />
        </label>
      </div>

      <div className="form-right">
        <label>
          メッセージ:
          <textarea name="message" rows="8" required />
        </label>
      </div>

      <div className="form-submit">
        <button type="submit">送信</button>
        <input
          type="hidden"
          name="_redirect"
          value="https://your-site.com/thanks.html"
        />
      </div>
    </form>
  );
};

export default ContactForm;
