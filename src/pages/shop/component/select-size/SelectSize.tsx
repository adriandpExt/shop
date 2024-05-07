interface SelectSize {
  sizeList: number[];
  size: number;
  setSize: (size: number) => void;
}

export const SelectSize = (props: SelectSize) => {
  const { sizeList, size, setSize } = props;

  return (
    <>  
      <select
        className="select select-info w-full max-w-xs select-md"
        value={size}
        onChange={(event) => {
          const newSize = parseInt(event.target.value, 10);
          setSize(newSize);
        }}
      >
        <option disabled className="text-lg">
          Pick your size
        </option>
        {sizeList.map((item, index) => (
          <option value={item} key={index} className="text-xl">
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectSize;
