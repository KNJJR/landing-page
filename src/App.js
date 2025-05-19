// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css"; // カスタムCSS
import ContactForm from "./ContactForm"

// ヘッダーコンポーネント
const Header = () => {
  return (
    <header className="header">
      <h1>モデルベース開発支援</h1>
      <p>革新的な技術で、あなたの研究開発をサポートします</p>
    </header>
  );
}

// サービス紹介コンポーネント
const Services = () => {
  return (
    <section className="services">
      <h2>提供サービス</h2>
      <div className="service-card car">
        <h3>自動車</h3>
        <p>最新技術を用いた自動車開発支援</p>
      </div>
      <div className="service-card drone">
        <h3>ドローン</h3>
        <p>効率的なモデルベース開発の導入</p>
      </div>
      <div className="service-card machinery">
        <h3>産業機械</h3>
        <p>高精度なシステム設計支援</p>
      </div>
    </section>
  );
}

// 問い合わせフォームコンポーネント
// const ContactForm = () => {
//   return (
//     <section className="contact">
//       <h2>お問い合わせ</h2>
//       <form>
//         <div>
//           <label htmlFor="name">お名前</label>
//           <input type="text" id="name" name="name" required />
//         </div>
//         <div>
//           <label htmlFor="email">メールアドレス</label>
//           <input type="email" id="email" name="email" required />
//         </div>
//         <div>
//           <label htmlFor="message">メッセージ</label>
//           <textarea id="message" name="message" required></textarea>
//         </div>
//         <button type="submit">送信</button>
//       </form>
//     </section>
//   );
// }

// フッターコンポーネント
const Footer = () => {
  return (
    <footer className="footer" >
      <p>&copy; 2025 モデルベース開発支援</p>
    </footer>
  );
}

// メインのAppコンポーネント
const App = () => {
  return (
    <div className="App">
      <Header />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
