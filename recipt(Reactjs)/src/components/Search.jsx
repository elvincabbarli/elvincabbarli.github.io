import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'

function Search() {

    const [input , setInput] = useState('');
    const navigate = useNavigate();

    const submitEventHandler = (e) =>{
        e.preventDefault()
        navigate('/searched/' + input)
    }

  return (
    <FormStyle action="" onSubmit={submitEventHandler}>
      <div>
        < FaSearch></FaSearch>
        <input value={input} onChange={(e) => {setInput(e.target.value)}} type="text" />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0 5rem;

  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    color: #fff;
    border-radius: 1rem;
    outline: none;
    font-size: 1.5rem;
    padding: 1rem 3rem;
    background: linear-gradient(35deg, #494949, #313131);
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #fff;
  }
`;

export default Search;
