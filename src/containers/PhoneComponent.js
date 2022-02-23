import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from "antd";

const { Meta } = Card;

const PhoneComponent = () => {
    const phones = useSelector((state) => state.allPhones.phones);
    const renderList = phones.map((phone) => {
        const { id, title, price, image } = phone;
        return (
            <div className="four wide column" key={id}>
                <Link to={`/phone/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={title} />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
    return <>{renderList}</>;
};

export default PhoneComponent;
