import ToggleSwitch from "./toggle-switch";

export default function ExtensionCard({ extensions, onDeleteExtension, handleToggleExtension }) {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
        {extensions.map((extension) => (
          <article
            key={extension.id}
            className="border border-neutral-200 dark:border-neutral-600 rounded-[1.25rem] p-5 bg-neutral-50 dark:bg-neutral-800 h-56 flex flex-col justify-between"
          >
            <div className="flex gap-4">
              <img
                src={extension.logo}
                alt={`${extension.name} Logo`}
                width={60}
                height={60}
              />
              <div>
                <h2 className="preset-2 text-neutral-900 dark:text-neutral-50">
                  {extension.name}
                </h2>
                <p className="preset-5 text-neutral-600 dark:text-neutral-50">
                  {extension.description}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <button
                onClick={() => onDeleteExtension(extension.id)}
                className="border border-neutral-200 dark:border-neutral-600 rounded-full preset-6 px-4 py-2 cursor-pointer dark:hover:bg-red-400 hover:bg-red-700 hover:dark:text-neutral-900"
              >
                Remove
              </button>
              <ToggleSwitch handleToggleExtension ={handleToggleExtension} checked ={extension.isActive} />
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
