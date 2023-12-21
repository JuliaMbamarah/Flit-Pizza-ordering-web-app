"use client";
import PropTypes from 'prop-types';
import { FC } from 'react'; 
import "../app/globals.css";

interface ClientProps {
  name: string;
  img: string;
}

const Client: FC<ClientProps> = ({ name, img }) => {
  return (
    <div className="client text-center">
      <img className="rounded-circle mb-2" src={img} alt={`${name} Image`} />
      <h4 className="fs-6 fw-bold">{name}</h4>
      <p className="mt-2 mb-2 text-center">
        Lorem ipsum is simply dummy text of the print book. It has survived not
        only five centuries but also the leap.
      </p>
    </div>
  );
}

Client.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Client;
