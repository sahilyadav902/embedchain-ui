import Wrapper from "@/components/Wrapper";
import Sidebar from "@/components/Sidebar";
import ChatWindow from "@/containers/ChatWindow";

export default function App() {
  return (
    <>
      <Sidebar />
      <Wrapper>
        <ChatWindow embedding_model="open_ai" app_type="app" />
      </Wrapper>
    </>
  );
}
