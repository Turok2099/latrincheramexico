import type { Metadata } from "next";
import OrganizacionEventosClient from "./OrganizacionEventosClient";

export const metadata: Metadata = {
  title:
    "Empresas Organizadoras de Eventos | Organización de Eventos Empresariales - La Trinchera México",
  description:
    "Somos empresas organizadoras de eventos especializadas en organización de eventos empresariales, eventos sociales y organización de fiestas. Planificación de eventos profesional con más de 10 años de experiencia.",
  keywords: [
    "empresas organizadoras de eventos",
    "organizar eventos",
    "organización de eventos empresariales",
    "organización de fiestas",
    "eventos sociales",
    "planificación de eventos",
    "La Trinchera México",
    "eventos corporativos",
    "organización de bodas",
    "eventos empresariales",
  ],
};

export default function OrganizacionEventosPage() {
  return <OrganizacionEventosClient />;
}
