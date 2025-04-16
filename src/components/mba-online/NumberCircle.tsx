import React from "react";

interface NumberCircleProps {
  id: string;
}

export function NumberCircle({ id }: NumberCircleProps) {
  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "rgba(217,217,217,0.2)",
          borderRadius: "50%",
          marginBottom: "10px",
        }}
        id={`filter${id}_d_161_3274`}
        className="number-circle"
      />
    </div>
  );
}
