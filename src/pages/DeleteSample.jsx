import "../styling/DeleteSample.css";
import "../styling/globals.css";
import "../styling/styleguide.css";
import React, {useState} from "react";
import SingleModal from "./SingleModal";

export default function Sample() {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="shortcut icon" type="image/png" href="https://animaproject.s3.amazonaws.com/home/favicon.png" />
    <meta name="og:type" content="website" />
    <meta name="twitter:card" content="photo" />
    <link rel="stylesheet" type="text/css" href="css/DeleteSample.css" />
    <link rel="stylesheet" type="text/css" href="css/styleguide.css" />
    <link rel="stylesheet" type="text/css" href="css/globals.css" />
    <input type="hidden" id="anPageName" name="page" value="delete-multiple" />
    <div class="delete-multiple screen">
      <div class="frame-627 frame-delete">
        <img
          class="delete_fill0_wght400_grad0_opsz48-1-1"
          src="delete-fill0-wght400-grad0-opsz48--1--1.svg"
          alt="delete_FILL0_wght400_GRAD0_opsz48 (1) 1"
        />
        <div class="frame-628 frame-delete">
          <h1 class="title">Delete GH-1234567?</h1>
          <p class="are-you-sure-you-wan inter-normal-tundora-16px">
            <span class="span0 inter-normal-tundora-16px"
              >Are you sure you want to delete this samples?<br />All associated data will be deleted. </span
            ><span class="span1 inter-semi-bold-tundora-16px">This action cannot be undone.</span>
          </p>
        </div>
      </div>
      <div class="frame-626 frame-delete">
        <div class="back-button"><div class="back inter-semi-bold-blue-dianne-14px">Cancel</div></div>
        <a href="apply-payment-4.html">
          <div class="next-delete">
            <div class="yes-delete-samples inter-semi-bold-white-14px">Yes, delete samples</div>
          </div></a
        >
      </div>
    </div>
    </>
  );
}
