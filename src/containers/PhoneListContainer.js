import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPhones } from "../redux/actions/phoneActions";
import PhoneComponent from "./PhoneComponent";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const PhoneListContainer = () => {
    const [loading, setLoading] = useState(false);
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const phones = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchPhones();
    }, []);

    const fetchPhones = async () => {
        setLoading(true);
        const response = await axios
            .get("http://localhost:4000/api/phones")
            .catch((err) => {
                console.log("Err", err);
            })
            .finally(() => {
                setLoading(false);
            });

        dispatch(setPhones(response.data));
    };
    return (
        <Spin indicator={antIcon} spinning={loading}>
            <div className="ui grid container mt-5 pt-5">
                <PhoneComponent />
            </div>
        </Spin>
    );
};

export default PhoneListContainer;
