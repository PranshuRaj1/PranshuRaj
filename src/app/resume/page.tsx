"use client";

import { Box } from "@/components/ui/moving-border";
import { FiDownload } from "react-icons/fi"; // Using the same icon library

const Resume = () => {
  // URL to embed the resume in the iframe
  const resumeEmbedUrl =
    "https://drive.google.com/file/d/1lZAXqJ6jaTUdsT4Q8kGdQEYn9_Yd8tBa/preview";

  // URL for a direct download
  const resumeDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1lZAXqJ6jaTUdsT4Q8kGdQEYn9_Yd8tBa";

  const handleDownload = () => {
    window.open(resumeDownloadUrl, "_blank");
  };

  return (
    <div>
      <Box
        borderRadius="1rem"
        className="bg-white  dark:bg-dark-color-2 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-6 md:p-10 flex flex-col"
        // Increased width for a better resume viewing experience
        containerClassName="m-auto w-[900px] max-w-[95%] h-auto md:my-10"
      >
        {/* Header Section */}
        <div className="flex  justify-between items-center mb-6">
          <h1 className="text-2xl px-5 md:text-4xl font-bold">My Resume </h1> {"  "}
          <button
            onClick={handleDownload}
            className="flex px-5  items-center gap-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <FiDownload className="h-5 w-5" />
            {/* Hides text on small screens to save space */}
            <span className="hidden sm:inline">Download</span>
          </button>
        </div>

        {/* Embedded Resume Viewer */}
        <div className="w-full h-[80vh] border border-neutral-200 dark:border-slate-700 rounded-lg overflow-hidden">
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