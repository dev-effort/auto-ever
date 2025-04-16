import styled from "@emotion/styled";
import { LabelHTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<
  LabelHTMLAttributes<HTMLLabelElement> & {
    htmlFor: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
>;

export const Label = ({
  children,
  htmlFor,
  checked,
  onChange,
  ...props
}: Props) => {
  return (
    <Container htmlFor={htmlFor} {...props}>
      <UnvisibleInput
        type="radio"
        id={htmlFor}
        name="filter"
        checked={checked}
        onChange={onChange}
      />
      <LabelText>{children}</LabelText>
    </Container>
  );
};

const Container = styled.label`
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  display: flex;
  height: 48px;
  margin-right: 2px;
  overflow: hidden;
  position: relative;
`;

const UnvisibleInput = styled.input`
  left: -100%;
  position: absolute;
  outline: none;
`;

const LabelText = styled.i`
  align-items: center;
  border-radius: 24px;
  display: flex;
  font-weight: 600;
  justify-content: center;
  letter-spacing: -0.4px;
  min-width: 48px;
  padding: 0 20px;
  font-size: 18px;

  input:checked + & {
    background-color: ${(props) => props.theme.colors.bg.inverse};
    color: #fff;
  }
`;
