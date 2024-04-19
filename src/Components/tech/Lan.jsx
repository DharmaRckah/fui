import React, { useEffect } from "react";

const TranslateWidget = ({ width, height }) => {
  useEffect(() => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout:
            window.google.translate.TranslateElement.InlineLayout.VERTICAL, // Use VERTICAL layout
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = googleTranslateElementInit;

    return () => {
      //   delete window.googleTranslateElementInit;
      //   document.body.removeChild(script);
    };
  }, []);

  const style = {
    width: width || "100%", // Default width is 100%
    height: height || "300px", // Default height is 300px
  };

  return <div id="google_translate_element"></div>;
};

export default TranslateWidget;
