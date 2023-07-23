import Wrapper from "@/components/Wrapper";
import Sidebar from "@/containers/Sidebar";
import CreateBot from "@/components/dashboard/CreateBot";
import SetOpenAIKey from "@/components/dashboard/SetOpenAIKey";
import PurgeChats from "@/components/dashboard/PurgeChats";
import DeleteBot from "@/components/dashboard/DeleteBot";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Wrapper>
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Welcome to Embedchain
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">
            embedchain is a framework to easily create LLM powered bots over any
            dataset
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <SetOpenAIKey />
            <CreateBot />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <DeleteBot />
            <PurgeChats />
          </div>
        </div>
      </Wrapper>
    </>
  );
}
