import React from "react";
import "./App.css"; // カスタムCSS
import Services from "./Services"
import Profile from "./Profile";
import Works from "./Works";
import Contact from "./Contact";

// ヘッダーコンポーネント
const Header = () => {
  return (
    <header className="header">
      <h1>制御開発の悩み、モデルベースで一気に解決</h1>
      <p>Simulinkでの開発支援、要件定義から実装・検証まで一貫対応</p>
    </header>
  );
};


// フッターコンポーネント
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 モデルベース開発支援</p>
    </footer>
  );
};

// メインのAppコンポーネント
const App = () => {
  return (
    <div className="App">
      <Header />
      <Services />
      <Profile />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
