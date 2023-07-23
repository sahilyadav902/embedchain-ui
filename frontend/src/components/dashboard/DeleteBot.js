import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function DeleteBot() {
  const [bots, setBots] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBots = async () => {
      const response = await fetch("/api/get_bots");
      const data = await response.json();
      setBots(data);
    };
    fetchBots();
  }, []);

  const handleDeleteBot = async (event) => {
    event.preventDefault();
    const selectedBotSlug = event.target.bot_name.value;
    if (selectedBotSlug === "none") {
      return;
    }
    const response = await fetch("/api/delete_bot", {
      method: "POST",
      body: JSON.stringify({ slug: selectedBotSlug }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      router.reload();
    }
  };

  return (
    <>
      <div className="w-full">
        {/* Delete Bot */}
        <h2 className="pt-6 text-2xl font-bold text-gray-800">
          Delete your bots
        </h2>
        <form className="py-2" onSubmit={handleDeleteBot}>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              List of Bots
            </label>
            <select
              name="bot_name"
              defaultValue="none"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="none">Select a Bot</option>
              {bots.map((bot) => (
                <option key={bot.slug} value={bot.slug}>
                  {bot.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="text-white bg-red-600 hover:bg-red-600/90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Delete
          </button>
        </form>
      </div>
    </>
  );
}
