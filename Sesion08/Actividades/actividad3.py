"""*****************************************
ARCHIVO	: actividad3.py 
AUTOR		: Cristhian Jesus Rodriguez Zea 
FECHA		: 17/10/2025 
DESCRIPCIÓN	: Aplicación Reflex con dos componentes que comparten un estado global.
********************************************"""

import reflex as rx

# Clase de estado para manejar los datos del formulario
class EstadoFormulario(rx.State):
    nombre: str = ""
    email: str = ""
    mensaje: str = ""
    mensaje_sistema: str = ""   # mensaje que se mostrará al usuario
    color_mensaje: str = "black"

    # Métodos para actualizar los campos del formulario
    def set_nombre(self, valor):
        self.nombre = valor

    def set_email(self, valor):
        self.email = valor

    def set_mensaje(self, valor):
        self.mensaje = valor

    # Método para validar y enviar el formulario
    def enviar_formulario(self):
        if not self.nombre or not self.email or not self.mensaje:
            self.mensaje_sistema = "Por favor, completa todos los campos."
            self.color_mensaje = "red"
        elif "@" not in self.email or "." not in self.email:
            self.mensaje_sistema = "Dirección de correo electrónico no válida."
            self.color_mensaje = "red"
        else:
            self.mensaje_sistema = f"Gracias {self.nombre}, tu mensaje fue enviado correctamente."
            self.color_mensaje = "green"
            # Limpiar los campos
            self.nombre = ""
            self.email = ""
            self.mensaje = ""

# Componente principal del formulario
def formulario_contacto():
    return rx.center(
        rx.card(
            rx.vstack(
                rx.heading("Formulario de Contacto", size="6", color="blue.600"),
                rx.input(
                    placeholder="Nombre",
                    value=EstadoFormulario.nombre,
                    on_change=EstadoFormulario.set_nombre,
                ),
                rx.input(
                    placeholder="Correo electrónico",
                    value=EstadoFormulario.email,
                    on_change=EstadoFormulario.set_email,
                ),
                rx.text_area(
                    placeholder="Mensaje",
                    value=EstadoFormulario.mensaje,
                    on_change=EstadoFormulario.set_mensaje,
                ),
                rx.button(
                    "Enviar",
                    color_scheme="green",
                    on_click=EstadoFormulario.enviar_formulario,
                ),
                # Mostrar mensaje de validación o éxito
                rx.text(
                    EstadoFormulario.mensaje_sistema,
                    color=EstadoFormulario.color_mensaje,
                    font_weight="bold",
                    padding_top="10px",
                ),
                spacing="4",
                align="center",
            ),
            padding="6",
            shadow="md",
            border_radius="10px",
            width="400px",
        ),
        padding="20px",
        height="100vh",
    )

# Página principal
@rx.page(route="/", title="Formulario de Contacto")
def index():
    return formulario_contacto()

# Crear aplicación Reflex
app = rx.App()
app.add_page(index)
