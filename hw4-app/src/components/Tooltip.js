import { useState } from "react";

export const Tooltip = ({ renderTooltip, content }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTooltipShow, setTooltipShow] = useState(false);
  const toggleTooltip = () => setTooltipShow((prev) => !prev);

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <>
      {renderTooltip(toggleTooltip, handleMouseMove)}
      {isTooltipShow && (
        <div className="content" style={{ left: position.x, top: position.y }}>
          {content}
        </div>
      )}
    </>
  );
};
