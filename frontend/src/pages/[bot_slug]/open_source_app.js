import Wrapper from "@/components/Wrapper";
import Sidebar from "@/containers/Sidebar";
import ChatWindow from "@/containers/ChatWindow";

export default function OpenSourceApp() {
  return (
    <>
      <Sidebar />
      <Wrapper>
        <ChatWindow embedding_model="open_source" app_type="os_app" />
      </Wrapper>
    </>
  );
}
