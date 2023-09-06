type Prop = {
  placeholder: string;
  type?: string;
  className: string;
  label?: string;
  labelClass?: string;
  onChange?: any
  onKeyUp?: any
};

export default function Input({ placeholder, type, className, label, labelClass, onChange, onKeyUp }: Prop) {
  return (
    <div>
      {label && <label className={labelClass}>{label}</label>}
      <input onKeyUp={onKeyUp} onChange={onChange} type={type} placeholder={placeholder} className={className} />
    </div>
  );
}
