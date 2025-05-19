const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

// Expressアプリケーションの作成
const app = express();
const port = 5000;

// ミドルウェア設定
app.use(cors());
app.use(bodyParser.json());

// メール送信のルート
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Nodemailerでメール送信
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'k.ejiri.sb@gmail.com', // 送信者のメールアドレス
            pass: 'E29897474k'   // メールアドレスのパスワード（またはアプリケーション固有のパスワード）
        }
    });

    const mailOptions = {
        from: email,
        to: 'k.ejiri.sb@gmail.com', // 受信者のメールアドレス（自分のメールアドレス）
        subject: 'お問い合わせフォーム',
        text: `名前: ${name}\nメール: ${email}\nメッセージ: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('メールの送信に失敗しました');
        }
        res.status(200).send('メールが送信されました');
    });
});

// サーバーの開始
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
