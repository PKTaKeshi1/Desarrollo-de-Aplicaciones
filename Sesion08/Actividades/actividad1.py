"""*****************************************
ARCHIVO	: actividad1.py 
AUTOR		: Cristhian Jesus Rodriguez Zea 
FECHA		: 17/10/2025 
DESCRIPCIÓN	: Aplicación Reflex que implementa un contador simple
                con estado local, permitiendo incrementar y disminuir su valor.
********************************************"""

import reflex as rx

# ---------- Estado ----------
class EstadoContador(rx.State):
    conteo: int = 0  # Valor inicial del contador

    def incrementar(self):
        """Aumenta el contador en 1."""
        self.conteo += 1

    def disminuir(self):
        """Disminuye el contador en 1."""
        self.conteo -= 1


# ---------- Componente principal ----------
def contador():
    return rx.center(
        rx.card(
            rx.vstack(
                rx.heading("Contador Simple con Estado Local", size="6"),
                rx.text(f"Valor actual: {EstadoContador.conteo}", font_size="2xl", color="blue.600"),
                rx.hstack(
                    rx.button("Incrementar", color_scheme="green", on_click=EstadoContador.incrementar),
                    rx.button("Disminuir", color_scheme="red", on_click=EstadoContador.disminuir),
                    spacing="4",
                ),
                spacing="6",
            ),
            padding="20px",
            box_shadow="lg",
            border_radius="xl",
            bg="white",
        ),
        bg="gray.100",
        min_h="100vh",
    )


# ---------- Página principal ----------
app = rx.App()
app.add_page(contador, route="/")
