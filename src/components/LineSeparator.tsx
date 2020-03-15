import React, { FC } from "react";

interface Props {
  color?: string;
  size?: number;
}

export const LineSeparator: FC<Props> = ({ color, size }) => {
  return (
    <div
      style={{
        width: "100%",
        height: 0,
        margin: "10px 0",
        border: `${size}px dashed ${color}`,
        borderRadius: `${size}px`
      }}
    />
  );
};

LineSeparator.defaultProps = {
  color: "#EEE",
  size: 2
};
