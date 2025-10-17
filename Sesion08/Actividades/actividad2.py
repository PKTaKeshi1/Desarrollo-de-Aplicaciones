"""*****************************************
ARCHIVO	: actividad2.py 
AUTOR		: Cristhian Jesus Rodriguez Zea 
FECHA		: 17/10/2025 
DESCRIPCIÓN	: Aplicación Reflex que implementa una lista de tareas
                con estado global, permitiendo agregar nuevas tareas.
********************************************"""

import reflex as rx

# ---------- Estado global ----------
class EstadoTareas(rx.State):
    """Estado global que almacena y gestiona la lista de tareas."""
    tareas: list[str] = ["Tarea 1", "Tarea 2"]
    nueva_tarea: str = ""  # Campo temporal para almacenar el texto del input

    def set_nueva_tarea(self, valor: str):
        """Actualiza el texto del input."""
        self.nueva_tarea = valor

    def agregar_tarea(self):
        """Agrega una nueva tarea a la lista."""
        if self.nueva_tarea.strip():  # evita tareas vacías
            self.tareas.append(self.nueva_tarea.strip())
            self.nueva_tarea = ""  # limpia el input


# ---------- Componente: Lista de tareas ----------
def lista_tareas():
    return rx.card(
        rx.vstack(
            rx.heading("Lista de Tareas", size="5", color="teal.700"),
            rx.ordered_list(
                rx.foreach(
                    EstadoTareas.tareas,
                    lambda tarea: rx.list_item(tarea, color="gray.800")
                )
            ),
        ),
        padding="20px",
        box_shadow="md",
        border_radius="lg",
        width="400px",
        bg="white",
    )


# ---------- Componente: Agregar tarea ----------
def agregar_tarea():
    return rx.card(
        rx.vstack(
            rx.input(
                placeholder="Escribe una nueva tarea...",
                value=EstadoTareas.nueva_tarea,
                on_change=EstadoTareas.set_nueva_tarea,
                color_scheme="teal",
            ),
            rx.button(
                "Agregar",
                color_scheme="blue",
                on_click=EstadoTareas.agregar_tarea,
            ),
            spacing="4",
        ),
        padding="20px",
        box_shadow="md",
        border_radius="lg",
        width="400px",
        bg="white",
    )


# ---------- Página principal ----------
def pagina_tareas():
    return rx.center(
        rx.vstack(
            rx.heading(
                "Actividad 2: Lista de Tareas con Estado Global",
                size="6",
                color="blue.800",
            ),
            agregar_tarea(),
            lista_tareas(),
            spacing="6",
        ),
        bg="gray.100",
        min_h="100vh",
    )


# ---------- App principal ----------
app = rx.App()
app.add_page(pagina_tareas, route="/")
