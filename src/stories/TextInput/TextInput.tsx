import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div``

const Label = styled.label`
  color: #989dab;
  display: block;
  margin-bottom: 4px;
`
const Input = styled.input`
  padding: 0.5em;
  background: white;
  border: 1px solid lightgray;
  border-radius: 3.5px;
  outline: none;
  color: #3b414a;
  &:focus {
    border: 1px solid #2460e4;
  }
`

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

function TextInput({ name, label, ...rest }: TextInputProps) {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input type="text" name={name} {...rest} />
    </InputWrapper>
  )
}

export default TextInput
