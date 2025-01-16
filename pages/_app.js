import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { MaterialDesignContent, SnackbarProvider } from "notistack";
import styled from "styled-components"; // Or "styled-components"

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-success": {
    backgroundColor: "#2D7738",
  },
  "&.notistack-MuiContent-error": {
    backgroundColor: "#970C0C",
  },
}));

export default function App({ Component, pageProps }) {
  return (
    <>
      <SnackbarProvider
        autoHideDuration={3000}
        Components={{
          success: StyledMaterialDesignContent,
          error: StyledMaterialDesignContent,
        }}
      >
        <Navbar />
        <Component {...pageProps} />
      </SnackbarProvider>
    </>
  );
}
