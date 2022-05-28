import dayjs from "dayjs";
import React, { useState } from "react";
import { DayContainer, DayText } from "./common";
import Modal from "./Modal";

const Day = ({ day, rowIdx }) => {
  //console.log(day.format("YYYY-MM-DD"))
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleOpen() {
    if (loading) {
      return;
    } else {
      setLoading(true);
      setOpenModal(true);
    }
  }

  function handleClose() {
    setLoading(false);
    setOpenModal(false);
  }

  return (
    <DayContainer type="button" onClick={handleOpen}>
      <DayText>
        {rowIdx === 0 && day.format("ddd").toUpperCase()}
        {rowIdx === 0 && <br />}
        {day.format("DD")}
      </DayText>
      {openModal && <Modal day={day} closeModal={handleClose} />}
    </DayContainer>
  );
};

export default Day;
