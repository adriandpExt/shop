interface CheckboxProps {
  label?: string;
  name: string;
  defaultValue?: string;
  size: string;
}

export const FormCheckbox = (props: CheckboxProps) => {
  const { label, name, size } = props;

  return (
    <div className="form-control ">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={false}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
};
export default FormCheckbox;
