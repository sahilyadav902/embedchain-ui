import Wrapper from "@/components/Wrapper";
import Sidebar from "@/components/Sidebar";
import AddSources from "@/containers/AddSources";

export default function Sources() {
  return (
    <>
      <Sidebar />
      <Wrapper>
        <div className="">
          <p className="mb-6 text-lg font-bold text-gray-800 lg:text-2xl">
            Add data sources for your bot here!
          </p>
        </div>
        <AddSources />
      </Wrapper>
    </>
  );
}
