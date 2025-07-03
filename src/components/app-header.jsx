import AppLogo from "./app-logo";
import ToggleTheme from "./toggle-theme";

export default function AppHeader() {
  return (
    <div className="container ">
      <div className="border border-neutral-200 bg-neutral-50 py-3 px-4 rounded-2xl dark:border-none dark:bg-neutral-800 flex items-center justify-between max-sm:py-2 max-sm:px-3">
        <AppLogo></AppLogo>
        <ToggleTheme></ToggleTheme>
      </div>
    </div>
  );
}
