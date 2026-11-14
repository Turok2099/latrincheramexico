import type { Metadata } from "next";
import NotFound from "../not-found";

export const metadata: Metadata = {
  title: "Página no encontrada | La Trinchera México",
  robots: { index: false, follow: false },
};

export default function Custom404() {
  return <NotFound />;
}
