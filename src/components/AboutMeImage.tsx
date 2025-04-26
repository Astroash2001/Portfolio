import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card2">
          <img src="dp2.jpg" alt="Profile img" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 450px;
    height: 600px;
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    border-radius: 20px;
    transition: all 0.3s;
  }

  .card2 {
    width: 450px;
    height: 600px;
    background-color: #1a1a1a;
    border-radius: 20px;
    transition: all 0.2s;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card2 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  .card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }

  .card:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
`;

export default Card;
