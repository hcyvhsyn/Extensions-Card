import { Header, Main } from "./app-layout";
import "./App.css";
import AppHeader from "./components/app-header";
import ButtonGroup from "./components/button-group";
import ExtensionCard from "./components/extension-card";
import ExtensionHeader from "./components/extension-header";
import ExtensionsCards from "./components/extensions-cards";
import H1 from "./components/h1";

import data from "../src/library/data.json";
import { useState } from "react";

function App() {
  const [extensions, setExtensions] = useState(data);

  function handleDeleteExtension(idToDelete) {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((extension) => extension.id !== idToDelete)
    );
  }

  function handleToggleExtension(idToToggle) {
    setExtensions((prevExtensions) =>
      prevExtensions.map((extension) =>
        extension.id === idToToggle
          ? { ...extension, isActive: !extension.isActive }
          : extension
      )
    );
  }
  return (
    <>
      <div className="max-w-4xl mx-auto px-4">
        <Header>
          <AppHeader></AppHeader>
        </Header>
        <Main>
          <ExtensionHeader>
            <H1></H1>
            <ButtonGroup></ButtonGroup>
          </ExtensionHeader>
          <ExtensionsCards>
            <ExtensionCard
              handleToggleExtension={handleToggleExtension}
              onDeleteExtension={handleDeleteExtension}
              extensions={extensions}
            ></ExtensionCard>
          </ExtensionsCards>
        </Main>
      </div>
    </>
  );
}

export default App;
