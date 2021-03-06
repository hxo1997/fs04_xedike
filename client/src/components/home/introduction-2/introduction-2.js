import React from 'react';
import "./introduction-2.css";

const Introduction2 = () => {
  return (
    <section className="introduction-2">
        <div className="container">
            <h1>Tại sao sử dụng XEDIKE.VN?</h1>
            <p className="mb-5">Dưới đây là một trong những lí do cho việc lựa chọn.</p>
            <div className="row">
               
                <div className="col-sm-4 col-12">
                    <img src = "./img/img_trust.png" alt="tin tưởng" height="50px"/>
                    <h5>Tin tưởng</h5>
                    <p >
                    Bạn sẽ biết tài xế và bạn đồng hành của bạn là ai. Điều đó giúp bạn có những trải nghiệm tốt hơn trên hành trình của mình.
                    </p>
                </div>

                <div className="col-sm-4 col-12">
                    <img src = "./img/img_safe.png" alt="chủ động" height="50px"/>
                    <h5>Chủ động</h5>
                    <p >
                    Thời gian chờ, số ghế trống, giá cả, chất lượng tài xế, các đánh giá, … tất cả sẽ được hiển thị rõ ràng để bạn yên tâm đặt chuyến đi.
                    </p>
                </div>

                <div className="col-sm-4 col-12">
                    <img src = "./img/img_love_car.png" alt="Môi trường" height="50px"/>
                    <h5>Môi trường</h5>
                    <p>
                    Mỗi 2 người đi chung một xe tương đương với việc trồng 4 cây xanh cho việc hấp thụ khí C02 trong vòng 1 năm.
                    </p>
                </div>

            </div>
        </div>
    </section>
  )
}
export default Introduction2;
