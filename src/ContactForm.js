import React, { useState } from 'react';
import "./App.css"; // カスタムCSS

const ContactForm = () => {
    const [status, setStatus] = useState('');

    return (
        <section className="contact">
            <h2>お問い合わせ</h2>
            <form
                action="https://formspree.io/f/xvgaybvj" // ← あなたのエンドポイントに変更
                method="POST"
                onSubmit={() => setStatus('送信が完了しました！')}
            >
                <div>
                    <label>
                        お名前:
                        <input type="text" name="name" required />
                    </label>
                </div>
                <div>
                    <label>
                        メールアドレス:
                        <input type="email" name="email" required />
                    </label>
                </div>
                <div>
                    <label>
                        メッセージ:
                        <textarea name="message" required />
                    </label>
                </div>
                <button type="submit">送信</button>
                <input type="hidden" name="_redirect" value="https://your-site.com/thanks.html"></input>
                <p>{status}</p>
            </form>
        </section>
    );
};

export default ContactForm;
