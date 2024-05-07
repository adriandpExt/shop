interface FormInputProps {
  label: string;
  name: string;
  type: string;
  defaultValue: string;
  size: string;
}

export const FormInput = (props: FormInputProps) => {
  const { label, name, type, defaultValue, size } = props;

  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
        placeholder="Search here..."
      />
    </div>
  );
};
export default FormInput;