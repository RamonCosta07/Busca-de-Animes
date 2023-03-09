type Props = {
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>
};

const SearchInput = ({ value, onChange }: Props) => {
  return (
    <div>
      <input type="search" value={value} onChange={onChange} />
    </div>
  );
};

export default SearchInput;