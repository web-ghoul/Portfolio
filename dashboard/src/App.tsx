import { Outlet } from "react-router";
import AppSidebar from "./components/AppSidebar/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

const App = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default App;
