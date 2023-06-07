import { useState, CSSProperties, useRef, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

type LoadingButtonPropsType = {
  width?: string;
  textColor?: string;
  hoverTextColor?: string;
  paddingTopBottom?: number;
  fontWeight?: number;
  fontSize?: number;
  lineHeight?: number;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  boxShadow?: string;
  border?: string;
  borderRadius?: number;
  onClickHandler: () => void;
  resetButton?: boolean;
  buttonText: string;
};

const LoadingButton = ({
  width = "auto",
  textColor = "white",
  hoverTextColor = "black",
  paddingTopBottom = 16,
  fontWeight = 500,
  fontSize = 16,
  lineHeight = 18,
  backgroundColor = "black",
  hoverBackgroundColor = "gray",
  boxShadow = "0px 1px 2px rgba(16, 24, 40, 0.05)",
  border = "none",
  borderRadius = 8,
  onClickHandler,
  resetButton,
  buttonText = "Submit",
}: LoadingButtonPropsType) => {
  const [buttonHeight, setButtonHeight] = useState(0);
  const [actionLoading, setActionLoading] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonBackgroundColor, setButtonBackgroundColor] =
    useState(backgroundColor);
  const [buttonFontColor, setButtonFontColor] = useState(textColor);

  const buttonStyle = {
    width: width,
    color: `${buttonFontColor}`,
    padding: `${paddingTopBottom}px 20px`,
    fontWeight: `${fontWeight}`,
    fontSize: `${fontSize}px`,
    lineHeight: `${lineHeight}px`,
    background: `${buttonBackgroundColor}`,
    boxShadow: boxShadow,
    border,
    borderRadius: `${borderRadius}px`,
    cursor: actionLoading ? "not-allowed" : "pointer",
    transition: "all ease 0.2s",
    fontFamily: "inherit",
    height: "50px",
  };

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    height: `${buttonHeight / 2}px`,
  };

  const handleMouseEnter = () => {
    setButtonBackgroundColor(hoverBackgroundColor);
    setButtonFontColor(hoverTextColor);
  };

  const handleMouseLeave = () => {
    setButtonBackgroundColor(backgroundColor);
    setButtonFontColor(textColor);
  };

  const handleOnClick = () => {
    setActionLoading(true);
    onClickHandler();
  };

  useEffect(() => {
    if (buttonRef.current && !actionLoading) {
      const HTMLButtonHeight = buttonRef.current.offsetHeight;
      setButtonHeight(HTMLButtonHeight);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (resetButton) {
      setActionLoading(false);
      setButtonBackgroundColor(backgroundColor);
      setButtonFontColor(textColor);
    }
  }, [backgroundColor, resetButton, textColor]);

  return (
    <>
      <button
        className="LoadingButton"
        onClick={() => handleOnClick()}
        style={buttonStyle}
        disabled={actionLoading}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={buttonRef}
      >
        {actionLoading ? (
          <ClipLoader
            color={"white"}
            loading={actionLoading}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          buttonText
        )}
      </button>
    </>
  );
};

export default LoadingButton;
