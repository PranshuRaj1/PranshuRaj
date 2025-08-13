"use client";

import { Box } from "@/components/ui/moving-border";
import { FiDownload } from "react-icons/fi";

const Resume = () => {
  const resumeEmbedUrl =
    "https://drive.google.com/file/d/1lZAXqJ6jaTUdsT4Q8kGdQEYn9_Yd8tBa/preview";

  const resumeDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1lZAXqJ6jaTUdsT4Q8kGdQEYn9_Yd8tBa";

  const handleDownload = () => {
    window.open(resumeDownloadUrl, "_blank");
  };

  return (
    <div>
      <Box
        borderRadius="1rem"
        className="bg-white dark:bg-dark-color-2 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-4 md:p-8 flex flex-col"
        containerClassName="m-auto w-full max-w-[900px] h-auto my-6 md:my-10"
      >
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h1 className="text-xl px-2 md:text-4xl font-bold text-center w-full">
            My Resume
          </h1>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <FiDownload className="h-5 w-5" />
            <span className="hidden sm:inline">Download</span>
          </button>
        </div>

        <div className="w-full h-[52vh] md:h-[80vh] border border-neutral-200 dark:border-slate-700 rounded-lg overflow-hidden">
          <iframe
            src={resumeEmbedUrl}
            title="Resume"
            className="w-full h-full"
            allow="autoplay"
          ></iframe>
        </div>
      </Box>
    </div>
  );
};

export default Resume;