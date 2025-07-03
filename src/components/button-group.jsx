const buttons = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Inactive",
    value: "inactive",
  },
];

export default function ButtonGroup() {
  return (
    <div className="button-group space-x-3">
      {buttons.map((button) => (
        <button
          key={button.value}
          className="preset-3 border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-50 px-5 py-2 rounded-full hover:bg-red-700 dark:hover:bg-red-400 hover:text-white cursor-pointer "
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}
