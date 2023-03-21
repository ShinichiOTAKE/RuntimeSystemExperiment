import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  portalId: string,
  children: JSX.Element,
};

export const usePortal = ({portalId, children}: Props) => {
  const rootElementRef 
    = useRef(document.querySelector<HTMLElement>(`#${portalId}`)
    || createRootElement(portalId));
  const [isDynamic] = useState(!rootElementRef.current.parentElement);

  useEffect(() => {
    const rootElement = rootElementRef.current;

    if (isDynamic) {
      addRootElement(rootElement);
    };

    return () => {
      if (isDynamic && rootElement?.parentElement) {
        rootElement.parentElement.removeChild(rootElement)
      };
    };
  }, [portalId]);

  return createPortal(
    children,
    rootElementRef.current,
  );
};

const createRootElement = (portalId: string) => {
  const rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", portalId);
  return rootContainer;
};

const addRootElement = (rootElement: HTMLElement) => {
  document.body.appendChild(rootElement);
};