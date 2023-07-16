import { useState } from "react";

export default function AddSources() {
  const [formData, setFormData] = useState({
    embedding_model: "open_ai",
    youtube_video: "",
    pdf_file: "",
    web_page: "",
    doc_file: "",
    sitemap: "",
    text: "",
    qna_pair: { question: "", answer: "" },
  });
  const [status, setStatus] = useState("");

  const handleAddSources = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const response = await fetch("/api/add_sources", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
    } else {
      setStatus("fail");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleQnAPairChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      qna_pair: {
        ...prevFormData.qna_pair,
        [name]: value,
      },
    }));
  };

  return (
    <>
      <form onSubmit={handleAddSources}>
        <div className="space-y-4 mb-6">
          {/* Embedding Model */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Embedding Model
            </label>
            <select
              name="embedding_model"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.embedding_model}
              onChange={handleInputChange}
            >
              <option value="open_ai">Open AI</option>
              <option value="open_source">Open Source</option>
            </select>
          </div>

          {/* YouTube Video */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              YouTube Video
            </label>
            <input
              type="text"
              name="youtube_video"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter video url here"
              value={formData.youtube_video}
              onChange={handleInputChange}
            />
          </div>

          {/* PDF File */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              PDF File
            </label>
            <input
              type="text"
              name="pdf_file"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter pdf url here"
              value={formData.pdf_file}
              onChange={handleInputChange}
            />
          </div>

          {/* Web Page */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Web Page
            </label>
            <input
              type="text"
              name="web_page"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter webpage url here"
              value={formData.web_page}
              onChange={handleInputChange}
            />
          </div>

          {/* Doc File */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Doc File
            </label>
            <input
              type="text"
              name="doc_file"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter doc file path here"
              value={formData.doc_file}
              onChange={handleInputChange}
            />
          </div>

          {/* Sitemap */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Sitemap
            </label>
            <input
              type="text"
              name="sitemap"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter sitemap url here"
              value={formData.sitemap}
              onChange={handleInputChange}
            />
          </div>

          {/* Text */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Text
            </label>
            <input
              type="text"
              name="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter text here"
              value={formData.text}
              onChange={handleInputChange}
            />
          </div>

          {/* QnA Pair */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              QnA Pair
            </label>
            <div>
              <input
                type="text"
                name="question"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Question"
                value={formData.qna_pair.question}
                onChange={handleQnAPairChange}
              />
              <div className="py-2"></div>
              <input
                type="text"
                name="answer"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Answer"
                value={formData.qna_pair.answer}
                onChange={handleQnAPairChange}
              />
            </div>
          </div>

          {/* Status Messages */}
          {status === "success" && (
            <div className="text-green-600 text-sm font-bold py-1">
              Your data sources have been saved successfully!
            </div>
          )}
          {status === "fail" && (
            <div className="text-red-600 text-sm font-bold py-1">
              An error occurred while adding your data sources!
            </div>
          )}
          {status === "loading" && (
            <div className="text-yellow-600 text-sm font-bold py-1">
              Please wait while we add your data sources!
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
