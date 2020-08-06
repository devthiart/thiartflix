/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

//Troco o div por um FormFieldWrapper (Tag que irá embrulhar o retorno).
const WrapperFormField = styled.div`
    position: relative;
    textarea {
        min-height: 150px;
    }
    input[type="color"] {
        padding-left: 56px;
    }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

//Criei um componente para conseguir utilizar o atributo "as" e modificar seu estilo.
const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  /*Se o cursor está no elemento, ele diminui o Label e move para cima */
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
`;

function FormField({
    label, type, name, value, onChange,
}) {
    const fieldId = `id_${name}`;

    //Validação para utilizar o textarea, se o tipo for textarea.
    const isTextArea = type === "textarea";
    const tag = isTextArea ? "textarea" : "input";

    return (
        <WrapperFormField>
            <Label htmlFor={fieldId}>
                <Input
                    as={tag}
                    id={fieldId}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange} 
                />
                <Label.Text>
                    {label}
                    : 
                </Label.Text>
            </Label>
        </WrapperFormField>
    );
}

// Estou setando um valor padrão para as propriedades
FormField.defaultProps = {
    type: 'text',
    value: '',
    onValue: () => {}
};

// Estou "tipando" estas propriedades para receberem apenas um tipo (string, number, func, etc...).
// .isRequired é pra obrigar a tag a setar ela.
FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired ,
    value: PropTypes.string ,
    onChange: PropTypes.func,
};

export default FormField;
