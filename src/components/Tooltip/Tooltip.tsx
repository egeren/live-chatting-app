import React, { useState, useEffect, Children, useRef } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

function Tooltip(props: TooltipProps) {
  const container = useRef<HTMLDivElement>(null);
  const tooltip = useRef<HTMLDivElement>(null);

  const handleTooltip = () => {
    if (container.current && tooltip.current) {
      const tooltipEl = tooltip.current;
      const containerBounding = container.current.getBoundingClientRect();

      const centerX =
        containerBounding.left -
        tooltipEl.clientWidth / 2 +
        containerBounding.width / 2;

      tooltipEl.style.top =
        containerBounding.top - tooltipEl.clientHeight - 5 + 'px';
      tooltip.current.style.left = centerX + 'px';
    }
  };
  return (
    <div className="group" ref={container} onMouseEnter={handleTooltip}>
      <p
        className="group-hover:flex hidden fixed bg-[#333] text-white text-sm px-2 py-1 rounded-sm"
        ref={tooltip}
      >
        {props.text}
      </p>
      {props.children}
    </div>
  );
}

export default Tooltip;
