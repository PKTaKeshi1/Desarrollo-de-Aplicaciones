"""*****************************************
ARCHIVO	: actividad4.py 
AUTOR		: Cristhian Jesus Rodriguez Zea 
FECHA		: 17/10/2025 
DESCRIPCIÓN	: Aplicación Reflex que consume una API pública
********************************************"""

import reflex as rx
import httpx

# 🔹 API pública de ejemplo (usuarios aleatorios)
URL_API = "https://randomuser.me/api/?results=5"

# Estado global para manejar los datos
class EstadoDatosAPI(rx.State):
    datos: list[dict] = []  # 🔹 ahora tiene tipado explícito
    mensaje: str = "Presiona el botón para cargar datos."

    # Método asíncrono que obtiene datos de la API
    async def cargar_datos(self):
        self.mensaje = "Cargando datos..."
        try:
            async with httpx.AsyncClient() as cliente:
                respuesta = await cliente.get(URL_API)
                respuesta.raise_for_status()
                info = respuesta.json()

                # Extraemos solo los datos que necesitamos
                self.datos = [
                    {
                        "nombre": f"{user['name']['first']} {user['name']['last']}",
                        "pais": user["location"]["country"],
                        "email": user["email"],
                    }
                    for user in info["results"]
                ]
                self.mensaje = f"{len(self.datos)} usuarios cargados correctamente."
        except Exception as e:
            self.mensaje = f"Error al obtener datos: {e}"

# 🔹 Componente para mostrar los datos
def mostrar_datos_api():
    return rx.center(
        rx.card(
            rx.vstack(
                rx.heading("Usuarios desde la API", size="6", color="blue.600"),
                rx.button(
                    "Cargar Datos",
                    color_scheme="green",
                    on_click=EstadoDatosAPI.cargar_datos,
                ),
                rx.text(
                    EstadoDatosAPI.mensaje,
                    color="gray.700",
                    padding_top="10px",
                ),
                # Mostrar lista de usuarios si existen
                rx.cond(
                    EstadoDatosAPI.datos,
                    rx.table.root(
                        rx.table.header(
                            rx.table.row(
                                rx.table.column_header_cell("Nombre"),
                                rx.table.column_header_cell("País"),
                                rx.table.column_header_cell("Email"),
                            )
                        ),
                        rx.table.body(
                            rx.foreach(
                                EstadoDatosAPI.datos.to(list[dict]),  # 🔹 se usa .to(list[dict])
                                lambda usuario: rx.table.row(
                                    rx.table.cell(usuario["nombre"]),
                                    rx.table.cell(usuario["pais"]),
                                    rx.table.cell(usuario["email"]),
                                ),
                            )
                        ),
                    ),
                    rx.text("No hay datos para mostrar."),
                ),
                spacing="4",
                align="center",
            ),
            padding="6",
            shadow="md",
            border_radius="10px",
            width="700px",
        ),
        padding="20px",
        height="100vh",
    )

# Página principal
@rx.page(route="/", title="Consumo de API en Reflex")
def index():
    return mostrar_datos_api()

# Crear aplicación
app = rx.App()
app.add_page(index)
