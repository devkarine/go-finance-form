import { InputHTMLAttributes } from "react";

export const initialValues = {
  email: '',
  password: '',
  checkBox: false
};

export interface FormProps {
  email: string;
  password: string;
  name?: string;
  confirmPassword?: string;
  checkBox?: boolean;
}

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
//   errors: ErrorMessageType;
}
