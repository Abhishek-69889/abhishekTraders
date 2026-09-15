import { useEffect } from "react";

const useProtect = () => {
  useEffect(() => {
    // 1. Disable Right Click
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // 2. Disable Copy / Cut
    const handleCopy = (e) => e.preventDefault();
    document.addEventListener("copy", handleCopy);
    document.addEventListener("cut", handleCopy);

    // 3. Disable Inspect Shortcuts
    const handleKeyDown = (e) => {
      // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.ctrlKey && (e.key === "u" || e.key === "U" || e.key === "s" || e.key === "S"))
      ) {
        e.preventDefault();
        return false;
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // 4. DevTools detection - blank page if open
    const detectDevTools = setInterval(() => {
      const threshold = 160;
      const widthDiff = window.outerWidth - window.innerWidth > threshold;
      const heightDiff = window.outerHeight - window.innerHeight > threshold;
      if (widthDiff || heightDiff) {
        document.body.innerHTML = "<div style='display:flex;height:100vh;align-items:center;justify-content:center;font-family:sans-serif;'><h2>Inspect is disabled for Abhishek Traders</h2></div>";
      }
    }, 1000);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCopy);
      document.removeEventListener("keydown", handleKeyDown);
      clearInterval(detectDevTools);
    };
  }, []);
};

export default useProtect;