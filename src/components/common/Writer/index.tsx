import React, { FC, Fragment } from 'react';

interface Props {
  text: string;
}

export const Writer: FC<Props> = (props) => {
  const { text } = props;

  return text.indexOf('\\n') === -1 ? (
    <div className="whitespace-normal">
      {text}
    </div>
  ) : (
    <div>
      {text.split('\\n ').map((line, i, arr) => (
        <Fragment key={line}>
          <div className="_whitespace-nowrap">
            {line}{i < arr.length - 1 ? <br /> : null}
          </div>
        </Fragment>
      ))}
    </div>
  );
};