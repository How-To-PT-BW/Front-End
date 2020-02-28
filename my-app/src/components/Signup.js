import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { colors, devices } from "../styledComponents/variables";
import {useForm} from 'react-hook-form';
import {H2} from '../styledComponents/fontStyles';
import DraftArticleLogo from '../images/DraftArticleLogo.png';

const Container = styled.div`
  background-color: ${colors.background3};
  fill: solid ${colors.background3};
  border: 1px solid red;

  @media ${devices.mobile} {
    max-width: 500px;
  }
  @media ${devices.tablet} {
    max-width: 800px;
  }
  @media ${devices.desktop} {
    max-width: 1024px;
  }
`;

const Header = styled.div`
display: flex;
justify-content: center;
align-items:center;
padding: 30px;
` 

function SignUpForm() {

const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation


  return (
    <Container>
      <Header>
        <H2>Sign Up</H2>
      </Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Example</label>
        <input name="example" defaultValue="test" ref={register} />
        <label>ExampleRequired</label>
        <input
          name="exampleRequired"
          ref={register({ required: true, maxLength: 10 })}
        />
        {errors.exampleRequired && <p>This field is required</p>}
        <input type="submit" />
      </form>
    </Container>
  );
};

export default SignUpForm;