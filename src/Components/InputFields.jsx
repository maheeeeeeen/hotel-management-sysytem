import React from "react";
import styled from "styled-components";


export const Input = ({ placeholder, type, register, name, options, id }) => {
  return (
    <StyledWrapper>
      <input
        readOnly={!!id}
        className="input"
        placeholder={placeholder}
        type={type}
        {...(register ? register(name, options) : {})}
      />
    </StyledWrapper>
  );
};
export const FileInput = ({ name, onChange, multiple = true }) => {
  return (
    <StyledWrapper>
      <input
        className="input"
        type="file"
        name={name}
        accept="image/*"
        onChange={onChange}
        multiple={multiple} // Allow multiple file selection
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input {
    border: 2px solid transparent;
    width: 100%;
    height: 2.5em;
    padding-left: 0.8em;
    outline: none;
    overflow: hidden;
    background-color: #f3f3f3;
    border-radius: 10px;
    transition: all 0.5s;
  }

  .input:hover,
  .input:focus {
    border: 2px solid #4a9dec;
    box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
    background-color: white;
  }
`;
