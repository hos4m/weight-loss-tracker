import React, { FC } from "react";
import { measurmentEntryType } from "../data/measurements/types";

interface Props {
  measurements: measurmentEntryType[];
}

export const MeasurementsList: FC<Props> = ({ measurements }) => {
  return (
    <>
      {measurements.map(single => {
        return (
          <>
            <div>{single.date}</div>
            <div>
              {single.parts.map(part => (
                <>
                  <div>
                    {part.name}: {part.value}
                  </div>
                </>
              ))}
            </div>
            <hr />
          </>
        );
      })}
    </>
  );
};
