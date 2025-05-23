import React from "react";
import carImage from "./image/car.png";
import droneImage from "./image/drone.png";
import machineryImage from "./image/machinery.png";

const Services = () => {
  return (
    <section className="services">
      <h2>提供サービス</h2>
      <div className="service-cards">
        <div
          className="service-card"
          style={{
            backgroundImage: `url(${carImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <h3>自動車</h3>
          <p>最新技術を用いた自動車開発支援</p>
        </div>
        <div
          className="service-card"
          style={{
            backgroundImage: `url(${droneImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <h3>ドローン</h3>
          <p>効率的なモデルベース開発の導入</p>
        </div>
        <div
          className="service-card"
          style={{
            backgroundImage: `url(${machineryImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <h3>産業機械</h3>
          <p>高精度なシステム設計支援</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
