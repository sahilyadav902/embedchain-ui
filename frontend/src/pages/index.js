import Wrapper from "@/components/Wrapper";
import Sidebar from "@/components/Sidebar";
import CreateBot from "@/components/dashboard/CreateBot";
import SetOpenAIKey from "@/components/dashboard/SetOpenAIKey";
import PurgeChats from "@/components/dashboard/PurgeChats";
import DeleteBot from "@/components/dashboard/DeleteBot";
import PurgeDB from "@/components/dashboard/PurgeDB";

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
        <SetOpenAIKey />
        <CreateBot />
        <DeleteBot />
        <PurgeChats />
        <PurgeDB />
      </Wrapper>
    </>
  );
}
