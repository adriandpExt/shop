import { ReactElement } from "react";

interface InputFieldProps {
  name: string;
  placeholder?: string;
  inputType?: string;
  icons?: ReactElement;
  label?: string;
  textarea?: boolean;
}

const InputField = (props: InputFieldProps) => {
  const {
    name,
    placeholder = "Please enter...",
    inputType = "text",
    icons,
    label,
    textarea = false,
  } = props;

  return (
    <div>
      {textarea ? (
        <>
          <p className="font-semibold text-sm pb-1 block text-accent-content">
            {label}
          </p>
          <textarea
            className="input-bordered w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            name={name}
            placeholder={placeholder}
            rows={4}
          ></textarea>
        </>
      ) : (
        <>
          <p className="font-semibold text-sm pb-1 block text-accent-content">
            {label}
          </p>

          <div className="flex items-center gap-2">
            {icons}

            <input
              type={inputType}
              className="input-bordered w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder={placeholder}
              name={name}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default InputField;
