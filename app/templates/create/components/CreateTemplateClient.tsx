"use client";

import ChoosePageSize from "./ChoosePageSize";
import Editor from "@/components/editor";
import { useState } from "react";

const CreateTemplateClient = () => {
  const [pageHeight, setPageHeight] = useState("29.7cm");
  const [pageWidth, setPageWidth] = useState("21cm");
  const [pageMargin, setPageMargin] = useState("2cm");
  const [isPageSelected, setIsPageSelected] = useState(false);

  return isPageSelected ? (
    <Editor
      pageHeight={pageHeight}
      pageWidth={pageWidth}
      pageMargin={pageMargin}
      isEditable={true}
    />
  ) : (
    <ChoosePageSize
      setIsPageSelected={setIsPageSelected}
      setPageHeight={setPageHeight}
      setPageWidth={setPageWidth}
      setPageMargin={setPageMargin}
    />
  );
};

export default CreateTemplateClient;
