import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
    selectedPhone,
    removeSelectedPhone,
} from "../redux/actions/phoneActions";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const PhoneDetails = () => {
    const [loading, setLoading] = useState(false);
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    let phone = useSelector((state) => state.phone);
    const { image, title, price, description } = phone;
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        if (id && id !== "") fetchPhoneDetail();
        return () => {
            dispatch(removeSelectedPhone());
        };
    }, [id]);

    const fetchPhoneDetail = async () => {
        setLoading(true);
        const response = await axios
            .get(`http://localhost:4000/api/phones/${id}`)
            .catch((err) => {
                console.log("Err", err);
            })
            .finally(() => {
                setLoading(false);
            });
        dispatch(selectedPhone(response.data));
    };
    return (
        <Spin indicator={antIcon} spinning={loading}>
            <div className="ui grid container">
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">
                                        ${price}
                                    </a>
                                </h2>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Spin>
    );
};

export default PhoneDetails;
