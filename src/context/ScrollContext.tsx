import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface ScrollContextProps {
  scrollTop: number;
  isAtTop: boolean;
}

/** Scroll offset represents the padding around the app */
const SCROLL_OFFSET = 16;

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const ScrollProvider: FC<PropsWithChildren> = ({ children }) => {
  const [scrollData, setScrollData] = useState<ScrollContextProps>({
    scrollTop: 0,
    isAtTop: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop } = document.documentElement;
      setScrollData({
        scrollTop,
        isAtTop: scrollTop < SCROLL_OFFSET,
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={scrollData}>
      {children}
    </ScrollContext.Provider>
  );
};

/**
 * Custom hook to access the current scroll position and state.
 *
 * Returns the scroll position (`scrollTop`) and a boolean (`isAtTop`) indicating
 * whether the scroll is near the top of the page.
 *
 * The `isAtTop` boolean is offset by 16px to account for the app padding
 *
 * Throws an error if used outside of a `ScrollProvider`.
 *
 * @returns {ScrollContextProps} The current scroll data.
 * @throws {Error} If used outside of a `ScrollProvider`.
 */

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
