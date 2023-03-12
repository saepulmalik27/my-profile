import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import React, { Fragment } from "react";

type TListBox = {
  id: string;
  name: string;
  unavailable: boolean;
};

type TSelectListProps = {
  lists: TListBox[];
  selected: TListBox;
  onChange: (list: TListBox) => void;
};

const SelectList: React.FC<TSelectListProps> = ({
  lists,
  selected,
  onChange,
}) => {

  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={onChange}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white dark:bg-gray-800  pl-1 pr-5 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate uppercase">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {lists.map((list, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none  ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900 dark:text-gray-100"
                    }`
                  }
                  value={list}
                >
                  {({ selected }) => {
                    return (
                      <>
                        <span
                          className={`flex truncate uppercase items-center justify-center  ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {list.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    );
                  }}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default SelectList;
