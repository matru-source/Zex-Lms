import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routes } from "./routes";
import { ToastProvider } from "./contexts/ToastContext";
import ToastContainer from "./components/lazy/Toast";

// Clear dark mode and ensure standard clean theme
document.documentElement.classList.remove("dark");
localStorage.removeItem("theme");

const router = createBrowserRouter(routes);

const queryClient = new QueryClient({});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </ToastProvider>
    </QueryClientProvider>
  </StrictMode>
);
