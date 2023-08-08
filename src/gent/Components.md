# Responsabilidad de los componentes

- App
  - Info
  - Button (Select All)
  - Gentleman (Card)

Responsabilidad:

- Que renderiza
- Que recibe y como
- Que interacciones tiene

# Info

- p con num de gentelmen pointing you
- recibe el numero de gentelmen por props (desde el padre)

# ButtonAll

- p son el texto 'Select All'
- recibe un metodo 'selectAll' por props (desde el padre)
- click: se ejecuta un método recibido por props

# Gentleman (Card)

- renderiza:
  - los datos de un usuario y su imagen
  - un boton de borrar
  - un boton de seleccionar:
    - si hover en el componente
    - si el personaje esta seleccionado

    - recibe los datos del item por props (desde el padre)
    - recibe un metodo 'select' por props (desde el padre)
    - recibe un metodo 'remove' por props (desde el padre)

- click en borrar: se ejecuta un método recibido por props
- click en seleccionar: se ejecuta un método recibido por props


## App

- define el STATE y sus metodos
  - selectAll
  - select
  - remove

- renderiza:
  - el header
  - Info pasándole por props el número de seleccionados del STATE
  - ButtonAll pasándole por props el método selectAll
  - tantos Gentleman como items del STATE;
    - A cada uno les pasa 1 item, select y remove
