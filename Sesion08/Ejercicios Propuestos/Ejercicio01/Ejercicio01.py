import reflex as rx
from typing import List, Dict

class EstadoKanban(rx.State):
    tareas: List[Dict[str, str]] = [
        {"titulo": "Diseñar interfaz", "estado": "Pendiente"},
        {"titulo": "Implementar API", "estado": "En Progreso"},
        {"titulo": "Probar módulo de login", "estado": "Completada"},
        {"titulo": "Escribir documentación", "estado": "Pendiente"},
    ]
    mostrar_solo_pendientes: bool = False

    def mostrar_pendientes(self):
        self.mostrar_solo_pendientes = True

    def mostrar_todas(self):
        self.mostrar_solo_pendientes = False

def tarjeta_tarea(titulo: str, estado: str):

    color = rx.cond(
        estado == "Pendiente",
        "#FFF9E6",        # amarillo muy claro
        rx.cond(estado == "En Progreso", "#E6F5FF", "#F0FFF2"),  
    )

    return rx.box(
        rx.text(titulo, weight="bold", color="#0F172A"),
        rx.text(f"Estado: {estado}", color="#0F172A"),
        bg=color,
        padding="10px",
        margin="5px",
        border_radius="8px",
        shadow="md",
        width="100%",
    )


def columna_kanban(nombre: str, estado_objetivo: str):

    def render_tarea(t):
        return rx.cond(
            rx.cond(
                EstadoKanban.mostrar_solo_pendientes,
                t.estado == "Pendiente",
                True,
            )
            & (t.estado == estado_objetivo),
            tarjeta_tarea(t.titulo, t.estado),
            rx.fragment(),
        )

    return rx.box(
        rx.heading(nombre, size="4", margin_bottom="10px"),
        rx.foreach(EstadoKanban.tareas, render_tarea),
        border="1px solid gray",
        border_radius="8px",
        padding="10px",
        width="250px",
        min_height="200px",
    )

@rx.page(route="/", title="Tablero Kanban")
def index():
    return rx.center(
        rx.vstack(
            rx.heading("Tablero Kanban con Filtro", size="3"),
            rx.hstack(
                rx.button(
                    "Mostrar solo pendientes",
                    bg="#FFF4E6",    
                    color="#92400E",
                    on_click=EstadoKanban.mostrar_pendientes,
                ),
                rx.button(
                    "Mostrar todas",
                    bg="#E6FBF0",    
                    color="#064E3B",
                    on_click=EstadoKanban.mostrar_todas,
                ),
                spacing="4",
            ),
            rx.cond(
                EstadoKanban.mostrar_solo_pendientes,
                rx.text("Mostrando solo tareas pendientes 🔸", color="#92400E"),
                rx.text("Mostrando todas las tareas ✅", color="#064E3B"),
            ),
            rx.hstack(
                columna_kanban("Pendientes", "Pendiente"),
                columna_kanban("En Progreso", "En Progreso"),
                columna_kanban("Completadas", "Completada"),
                spacing="5",
            ),
        ),
        padding="20px",
    )

app = rx.App()
app.add_page(index)
