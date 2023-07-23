import Wrapper from "@/components/Wrapper";
import Sidebar from "@/containers/Sidebar";
import ChatWindow from "@/containers/ChatWindow";
import AddSources from "@/containers/AddSources";

export default function OpenSourceApp() {
  return (
    <>
      <Sidebar />
      <Wrapper>
        <AddSources eb_model="open_source" />
        <ChatWindow embedding_model="open_source" app_type="os_app" />
      </Wrapper>
    </>
  );
}
