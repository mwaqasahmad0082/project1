import React, { useState } from "react";
import { IoMdFlashlight } from "react-icons/io";
import { FaMarker } from "react-icons/fa";
import { IoSyncCircleSharp } from "react-icons/io5";
import { PiShieldWarningDuotone } from "react-icons/pi";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import axios from "axios";
import OptionsDropdown from "./OptionsDropdown";

const Section = () => {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [formValue, setFormValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");

  const handleOpenModal = (type) => {
    setModalType(type);
    setModal(true);
  };

  const handleSubmit = async () => {
    try {
      if (modalType === "condition") {
        const optionNumber = options.findIndex(
          (option) => option === dropdownValue
        );
        const response = await axios.post(
          "https://c4a2-2a09-bac1-5b40-20-00-279-a3.ngrok-free.app/fill_form",
          {
            input_string: formValue,
            option_number: optionNumber,
          }
        );
        console.log("Response:", response.data);
      } else if (modalType === "diagnosis") {
        const response = await axios.post("https://your-api-endpoint/verify", {
          input_string: formValue,
        });
        console.log("Response:", response.data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setModal(false);
  };

  return (
    <section className="bg-black text-white text-center abslute min-h-screen text-center flex mt-14 ">
      <div className="fixed left-96 text-start pt-6 min-h-screen bg-black ml-24 ">
        <h1 className="mt-8 text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
          Hello,Su Kim
        </h1>
        <h1 className="pt-2 text-6xl font-semibold text-neutral-700">
          How can i help u today?
        </h1>
        <div className="text-center flex flex-row gap-1 pt-10 mt-16">
          <div className="min-h-52 w-52 bg-neutral-900 rounded-3xl truncate p-4">
            Explain what the Keto <br />
            diet is in simple terms
            <IoMdFlashlight className="text-2xl relative top-24 left-36" />
          </div>
          <div className="min-h-52 w-52 bg-neutral-900 rounded-3xl truncate p-4">
            Recommend new types <br />
            of water sports,including <br />
            pros & cons
            <FaMarker className="text-2xl relative top-20 left-36" />
          </div>
          <div className="min-h-52 w-52 bg-neutral-900 rounded-3xl truncate p-4">
            Provide questions to help <br />
            me prepare for an <br />
            interview
            <IoSyncCircleSharp className="text-2xl relative top-20 left-36" />
          </div>
          <div className="min-h-52 w-52 bg-neutral-900 rounded-3xl truncate p-4">
            Help create weekil meal <br />
            plan for two
            <FaMarker className="text-2xl relative top-28 left-36" />
          </div>
        </div>
        <div className="text-xs bg-neutral-900 rounded-lg mt-4 p-2 w-full flex">
          <PiShieldWarningDuotone className="relative top-1 " />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.Est sunt
          repudiandae optio nulla distinctio voluptatem! Lorem ipsum dolor sit,
          amet <br />
          consectetur adipisicing elit. Hic, explicabo! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Similique, ipsum!
        </div>

        <button
          onClick={() => handleOpenModal("condition")}
          className="bg-red-600 p-1 ml-40 text-white rounded-4 w-32 mt-4"
        >
          Verify Condition
        </button>
        <button
          onClick={() => handleOpenModal("diagnosis")}
          className="bg-yellow-600 ml-64 p-1 text-white rounded-4 w-32 mt-4 ml-4"
        >
          Verify Diagnosis
        </button>

        <Modal
          className="absolute top-40"
          size="lg"
          isOpen={modal}
          toggle={() => setModal(false)}
        >
          <ModalHeader className="" toggle={() => setModal(false)}>
            {modalType === "condition"
              ? "Verify Condition"
              : "Verify Diagnosis"}
          </ModalHeader>
          <ModalBody>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div className="mb-4">
                <label className="block text-white">Enter Details:</label>
                <input
                  type="text"
                  className="bg-neutral-900 text-white rounded-lg p-2 w-full"
                  value={formValue}
                  onChange={(e) => setFormValue(e.target.value)}
                />
              </div>
              {modalType === "condition" && (
                <div className="mb-4 ">
                  <label className="block text-white ">Select Option:</label>
                  <OptionsDropdown
                    value={dropdownValue}
                    onChange={setDropdownValue}
                  />
                </div>
              )}
              <button
                type="submit"
                className="bg-blue-900 text-white rounded-4 w-32"
              >
                Submit
              </button>
            </form>
          </ModalBody>
        </Modal>
      </div>
    </section>
  );
};

export default Section;
