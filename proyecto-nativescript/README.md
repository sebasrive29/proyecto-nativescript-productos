# Proyecto NativeScript + Angular — Módulo "Productos"

Basado en el template oficial `template-drawer-navigation-ng` de NativeScript.

## Requisitos previos

- Node.js LTS instalado
- NativeScript CLI: `npm install -g nativescript`
- Para Android: Android Studio + JDK (o usar NativeScript Preview / Playground para probar sin SDK nativo)
- Para iOS: macOS + Xcode

## Instalación

```bash
npm install
```

## Ejecutar

```bash
ns run android
# o
ns run ios
# o, sin SDK nativo instalado, previsualiza con la app "NativeScript Preview" escaneando el QR:
ns preview
```

## Cómo se cumple cada requisito del proyecto

1. **Template drawer-navigation-ng con enrutador modularizado**: cada sección del menú (`home`, `browse`, `search`, `featured`, `settings`, y el nuevo `productos`) es su propio módulo Angular con su propio módulo de ruteo, cargados de forma lazy (`loadChildren`) desde `src/app/app-routing.module.ts`.
2. **2 componentes nuevos**: `src/app/productos/productos.component.ts` (lista) y `src/app/productos/producto-detalle.component.ts` (detalle).
3. **Nuevo módulo de feature**: `src/app/productos/productos.module.ts`.
4. **Submódulo de ruteo del nuevo módulo**: `src/app/productos/productos-routing.module.ts`.
5. **Integración al side drawer**: entrada "Productos" agregada en `src/app/app.component.html`, usando el mismo patrón (`isComponentSelected` / `onNavItemTap`) que las demás secciones.
6. **Nuevo service global**: `src/app/services/productos.service.ts`, con `@Injectable({ providedIn: 'root' })` — el nivel más alto de inyección de dependencias. Se inyecta en `ProductosComponent` y `ProductoDetalleComponent` por constructor.
7. **Uso de `*ngFor`**: en `src/app/productos/productos.component.html`, para pintar la lista de productos.
8. **Sobrecarga de estilos por plataforma**: `productos.component.css` (común) + `productos.component.android.css` + `productos.component.ios.css`. NativeScript detecta el sufijo de plataforma automáticamente.
9. **Ícono personalizado en App_Resources**: se reemplazaron los `ic_launcher.png` de todas las densidades en `App_Resources/Android/src/main/res/mipmap-*` y el set completo de `App_Resources/iOS/Assets.xcassets/AppIcon.appiconset/` por un ícono propio (círculo blanco con "P" sobre degradado morado-azul).
10. **Código exclusivo de Android**: en `src/app/productos/producto-detalle.component.ts`, usando `isAndroid` de `@nativescript/core`, se asigna un valor a `mensajePlataforma` solo si la app corre en Android.

## Estructura relevante

```
App_Resources/                     ← íconos personalizados (Android + iOS)
src/app/
├── app.component.html/.ts         ← side drawer (con entrada "Productos" agregada)
├── app-routing.module.ts          ← ruta lazy hacia ProductosModule agregada
├── productos/                     ← NUEVO módulo de feature
│   ├── productos.module.ts
│   ├── productos-routing.module.ts
│   ├── productos.component.ts/.html/.css/.android.css/.ios.css
│   └── producto-detalle.component.ts/.html/.css
└── services/
    └── productos.service.ts       ← NUEVO service global
```

## Nota importante

Este proyecto fue ensamblado con el código fuente real del template oficial de NativeScript. No fue compilado ni ejecutado en este entorno (requiere Android Studio/Xcode y el NativeScript CLI, que no están disponibles aquí), así que al abrirlo por primera vez corre `npm install` y luego `ns doctor` para confirmar que tu entorno nativo esté bien configurado antes de compilar.
