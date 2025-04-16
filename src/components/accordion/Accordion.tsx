import styled from "@emotion/styled";
import { useRef, useState, useLayoutEffect } from "react";

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
};

export const AccordionContent = ({ isOpen, children }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      const scrollHeight = contentRef.current.scrollHeight;
      setHeight(isOpen ? scrollHeight : 0);
    }
  }, [isOpen, children]);

  return (
    <AccordionWrapper style={{ height: height === 0 ? "0px" : height }}>
      <div ref={contentRef}>{children}</div>
    </AccordionWrapper>
  );
};

const AccordionWrapper = styled.div`
  overflow: hidden;
  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;
