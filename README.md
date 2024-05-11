## Documentación de uso del componente Light_hover_react_component

### Descripción

El componente `Light_hover_react_component` es un componente de React que permite mostrar contenido con un efecto de hover y fondo transparente, con la opción de personalizar el color de fondo.

#### Importar el componente

Importa el componente `Light_hover_react_component` en tu archivo JavaScript o TypeScript donde desees utilizarlo.

#### Ejemplo de uso

A continuación, se muestra cómo puedes utilizar el componente `Light_hover_react_component`:

```javascript
<LightHoverReactComponent>
  <h2>Default</h2>
  <p>Párrafo sobre algo random </p>
  <img
    src='https://medibangpaint.com/wp-content/uploads/2020/09/1.jpg'
    alt='paisaje'
    style={{
      width: 300,
      borderRadius: 5,
    }}
  />
</LightHoverReactComponent>
<LightHoverReactComponent bgColor={'black'}>

  <h2>Black</h2>
  <p>Párrafo sobre algo random </p>
  <img
    src='https://medibangpaint.com/wp-content/uploads/2020/09/1.jpg'
    alt='paisaje'
    style={{
      width: 300,
      borderRadius: 5,
    }}
  />
</LightHoverReactComponent>
<LightHoverReactComponent bgColor={'green'}>

  <h2>Green</h2>
  <p>Párrafo sobre algo random </p>
  <img
    src='https://medibangpaint.com/wp-content/uploads/2020/09/1.jpg'
    alt='paisaje'
    style={{
      width: 300,
      borderRadius: 5,
    }}
  />
</LightHoverReactComponent>
```

Repite este patrón para cada color que desees mostrar

## Colores disponibles

| Color   | Valor RGB              |
| ------- | ---------------------- |
| Default | rgb(128 128 128 / 0.2) |
| Green   | rgb(9 260 9 / 0.3)     |
| Blue    | rgb(9 9 260 / 0.3)     |
| Red     | rgb(260 9 9 / 0.3)     |
| Purple  | rgb(140 9 140 / 0.3)   |
| Orange  | rgb(260 30 9 / 0.3)    |
| Pink    | rgb(255 105 180 / 0.3) |
| Cyan    | rgb(0 255 255 / 0.3)   |
| Magenta | rgb(255 0 255 / 0.3)   |
| Teal    | rgb(0 128 128 / 0.3)   |
| Lime    | rgb(0 255 0 / 0.3)     |
| Indigo  | rgb(75 0 130 / 0.3)    |
| Maroon  | rgb(128 0 0 / 0.3)     |
| Olive   | rgb(128 128 0 / 0.3)   |
| Silver  | rgb(192 192 192 / 0.3) |
| Gold    | rgb(255 233 0 / 0.3)   |
| Black   | rgb(0 0 0 / 0.6)       |
| White   | rgb(255 255 255 / 0.4) |
