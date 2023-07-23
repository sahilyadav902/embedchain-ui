import Wrapper from "@/components/Wrapper";
import Sidebar from "@/containers/Sidebar";
import ChatWindow from "@/containers/ChatWindow";
import AddSources from "@/containers/AddSources";

export default function App() {
  return (
    <>
      <Sidebar />
      <Wrapper>
        <AddSources eb_model="open_ai" />
        <ChatWindow embedding_model="open_ai" app_type="app" />
      </Wrapper>
    </>
  );
}
