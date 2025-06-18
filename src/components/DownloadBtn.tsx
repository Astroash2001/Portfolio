import React from "react";
import styled, { keyframes } from "styled-components";
import { Download } from "lucide-react";

const auroraAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const ResumeDownloadCard = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <StyledWrapper>
      <div className="card-container">
        <button className="card" onClick={handleDownload}>
          <div className="content">
            <p className="heading">Download Resume</p>
            <p className="small">
              Get my complete professional background and skills
            </p>
          </div>
          <div className="go-corner">
            <div className="go-arrow">
              <Download size={16} />
            </div>
          </div>
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card-container {
    width: 260px; /* Square size - adjust as needed */
    aspect-ratio: 2/1; /* Ensures perfect square */
    margin: 0 auto;
  }

  .card {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, #1a1a2e, #16213e, #1a1a2e);
    background-size: 300% 300%;
    animation: ${auroraAnimation} 8s ease infinite;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: none;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
  }

  .content {
    z-index: 2;
  }

  .card p {
    font-size: 17px;
    font-weight: 400;
    line-height: 1.4;
    color: #f8fafc;
    transition: all 0.3s ease-out;
    margin: 0;
  }

  .card p.small {
    font-size: 14px;
    opacity: 0.9;
    margin-top: 8px;
  }

  .heading {
    font-weight: 600 !important;
    color: #f8fafc !important;
  }

  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 32px;
    height: 32px;
    overflow: hidden;
    top: 0;
    right: 0;
    background-color: #3498db;
    border-radius: 0 12px 0 32px;
    transition: all 0.3s ease;
  }

  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card:before {
    content: "";
    position: absolute;
    z-index: 1;
    top: -16px;
    right: -16px;
    background: #3498db;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.5s ease-out;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  .card:hover:before {
    transform: scale(25);
    background: linear-gradient(135deg, #3498db, #2c3e50);
  }

  .card:hover .go-corner {
    background-color: #2c3e50;
  }
`;

export default ResumeDownloadCard;
