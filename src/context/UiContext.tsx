import React, { ReactNode, useContext, useState } from "react";

export interface UiProviderProps {
  children?: ReactNode;
}

export interface UiContextModel {
  currentModel: string;
  handleModelChange: (newModel: string) => void;
  currentTexture: string;
  handleTextureChange: (newTexture: string) => void;
}

export const UiContext = React.createContext<UiContextModel>(
  {} as UiContextModel
);

export const UiProvider = ({ children }: UiProviderProps) => {
  const [currentModel, setCurrentModel] = useState<string>("old_cap");

  const [currentTexture, setCurrentTexture] = useState<string>("1.jpg");

  function handleTextureChange(newTexture: string) {
    setCurrentTexture(newTexture);
  }

  function handleModelChange(newModel: string) {
    setCurrentModel(newModel);
  }

  const values = {
    currentModel,
    currentTexture,
    handleTextureChange,
    handleModelChange,
  };

  return <UiContext.Provider value={values}>{children}</UiContext.Provider>;
};

export function useUiContext() {
  return useContext(UiContext);
}
