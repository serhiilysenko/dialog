import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import dayjs from "dayjs";
import { IoIosTrash } from "react-icons/io";
import Icon from "../../Icon";

import "./styles.css"

const Item = ({ isReverse, isRemovable, messages, avatar, onRemove }) => {
    const onRemoveHandle = (event) => {
        const { id } = event.currentTarget.dataset;
        onRemove(+id);
    };

    return (
        <div 
        className={classNames("item", {
            reverse: isReverse,
            removable: isRemovable,
        })}>
            <img src={avatar} className="avatar" alt="avatar" />
            <div className="list">
                {messages.map((item) => (
                    <div className="list-item" key={item.id}>
                        <div className="text">{item.text}</div>
                        <div className="time">{dayjs(item.date).format("HH:mm")}</div>
                        <Icon
                            size={15}
                            className="message-status"
                            name={
                                item.status === "sended" ? "MessageSended" : "MessageReaded"
                            }
                        />
                        <IoIosTrash
                            data-id={item.id}
                            size={18}
                            cassName="remove-message"
                            onClick={onRemoveHandle}
                        />
                    </div>
                ))}
            </div> 
        </div>
    );
};

Item.propTypes = {
    isReverse: PropTypes.bool.isRequired,
    isRemovable: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(
       PropTypes.shape({ 
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        status : PropTypes.oneOf(["sended", "readed"]),
    })
    ).isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default Item;