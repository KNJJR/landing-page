import React, { useState } from 'react';
import "./App.css"; // カスタムCSS

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // サーバーにフォームデータを送信
        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('送信が完了しました！');
            } else {
                setStatus('送信に失敗しました。');
            }
        } catch (error) {
            setStatus('送信エラーが発生しました。');
        }
    };

    // return (
    //     <form onSubmit={handleSubmit}>
    //         <label>
    //             名前:
    //             <input
    //                 type="text"
    //                 name="name"
    //                 value={formData.name}
    //                 onChange={handleChange}
    //             />
    //         </label>
    //         <label>
    //             メール:
    //             <input
    //                 type="email"
    //                 name="email"
    //                 value={formData.email}
    //                 onChange={handleChange}
    //             />
    //         </label>
    //         <label>
    //             メッセージ:
    //             <textarea
    //                 name="message"
    //                 value={formData.message}
    //                 onChange={handleChange}
    //             />
    //         </label>
    //         <button type="submit">送信</button>
    //         <p>{status}</p>
    //     </form>
    // );
    return (
        <section className="contact">
            <h2>お問い合わせ</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        名前:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        メール:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        メッセージ:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit">送信</button>
            </form>
        </section>
    );
};

export default ContactForm;
