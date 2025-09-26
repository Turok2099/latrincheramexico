import type { Metadata } from "next";
import OrganizacionEventosClient from "./OrganizacionEventosClient";

export const metadata: Metadata = {
  title: "Organización de Eventos - La Trinchera México",
  description:
    "Servicios completos de organización de eventos. Bodas, eventos empresariales, graduaciones, catering, fotografía y más.",
};

export default function OrganizacionEventosPage() {
  return <OrganizacionEventosClient />;
}
