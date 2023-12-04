"use client";
import React, { FC } from "react";
import PropTypes from 'prop-types';
import "../app/globals.css";
import Button from "./button";

interface ValuesProps {
  logo: string;
  description: string;
  text: string;
}

const Values: FC<ValuesProps> = ({ logo, description, text }) => {
  return (
    <div className="value m-2">
      <img width="40px" className="mb-2" src={logo} alt={`${description} Logo`} />
      <h6 className="fw-bold fs-6">{description}</h6>
      <p className="mt-2 mb-2">{text}</p>
    </div>
  );
}

Values.propTypes = {
  logo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Values;
      
