import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

interface AutoCompleteProps<T> {
  label: string;
  placeholder: string;
  valueKey: string | number;
  displayKey: string | number;
  array: Array<any>;
  onSelect: (value: any) => void;
  startContentIcon?: any;
}

export default function AutoComplete<T>({
  label,
  placeholder,
  valueKey,
  displayKey,
  array,
  onSelect,
  startContentIcon,
}: AutoCompleteProps<T>) {
  const handleSelect = (value: any) => {
    onSelect(value);
  };

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Autocomplete
        startContent={startContentIcon}
        placeholder={placeholder}
        label={label}
        className="max-w-xs"
        onSelectionChange={handleSelect}
      >
        {array.map((item) => (
          <AutocompleteItem
            key={item[valueKey]}
            value={item[valueKey]}
            textValue={item[displayKey]}
          >
            {item[displayKey]}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
}
