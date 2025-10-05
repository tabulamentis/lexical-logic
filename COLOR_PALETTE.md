# Paleta de Colores - Lexical Logic

## 🎨 Colores Principales

### Fondos

| Uso | Color | Hex | Aplicación |
|-----|-------|-----|------------|
| **Fondo Oscuro** | `--bg-dark` | `#1E293B` | Secciones alternas (Hero, Beneficios, Casos de Uso) |
| **Fondo Footer** | `--bg-footer` | `#0F172A` | Solo Footer y Navbar |
| **Fondo Claro** | `--bg-light` | `#FFFFFF` | Secciones principales (Plataformas, Contacto) |
| **Fondo Gris** | `--bg-gray` | `#F8FAFC` | Secciones alternas claras (Cómo funciona, FAQ) |

### Acentos

| Uso | Color | Hex | Aplicación |
|-----|-------|-----|------------|
| **Naranja** | `--orange` | `#F97316` | Botones principales, CTAs, acentos importantes |
| **Azul** | `--blue` | `#3B82F6` | Links, botones secundarios, hover states |

### Texto

| Uso | Color | Hex | Aplicación |
|-----|-------|-----|------------|
| **Texto Oscuro** | `--text-dark` | `#1F2937` | Títulos y texto en fondos claros |
| **Texto Claro** | `--text-light` | `#F1F5F9` | Títulos y texto en fondos oscuros |
| **Texto Muted** | `--text-muted` | `#64748B` | Subtítulos, descripciones, texto secundario |

## 📋 Distribución por Sección

### Secciones OSCURAS (40%)
- **Hero**: `#1E293B` - Fondo oscuro con gradient text
- **Beneficios**: `#1E293B` - Cards oscuras con texto claro
- **Casos de Uso**: `#1E293B` - Cards claras sobre fondo oscuro
- **Footer**: `#0F172A` - Más oscuro para contraste
- **Navbar**: `#1E293B` - Con glassmorphism

### Secciones CLARAS (60%)
- **Plataformas/Services**: `#FFFFFF` - Fondo blanco limpio
- **Cómo funciona**: `#F8FAFC` - Gris muy claro
- **Estadísticas**: `#FFFFFF` - Con gradient decorativo sutil
- **FAQ**: `#F8FAFC` - Gris muy claro
- **Contacto**: `#FFFFFF` - Fondo blanco con gradient sutil
- **CTA Final**: Gradient naranja-azul

## 🎯 Reglas de Uso

### Botones
- **Primario**: `bg-[#F97316] hover:bg-[#EA580C]` - Naranja
- **Secundario**: `border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6]` - Azul

### Links
- **Normal**: `text-[#CBD5E1]` (en oscuro) o `text-[#64748B]` (en claro)
- **Hover**: `hover:text-[#F97316]` (naranja) o `hover:text-[#3B82F6]` (azul)

### Cards
- **Fondo claro**: `bg-white` con `border-[#E2E8F0]`
- **Fondo oscuro**: `bg-[#0F172A]` con `border-[#334155]`
- **Hover**: `hover:border-[#3B82F6]` o `hover:border-[#F97316]`

### Gradients
- **Texto Hero**: `from-[#F97316] to-[#3B82F6]`
- **CTA Final**: `from-[#F97316] via-[#3B82F6] to-[#F97316]`
- **Números Stats**: `from-[#F97316] to-[#3B82F6]`

## 💡 Principios de Diseño

1. **95% Grises, 5% Color**: Mantener el diseño mayormente en grises con toques estratégicos de naranja y azul
2. **Naranja para Acción**: Usar naranja solo en CTAs y elementos que requieren acción
3. **Azul para Navegación**: Usar azul en links, navegación y elementos secundarios
4. **Contraste Alto**: Asegurar legibilidad con suficiente contraste entre texto y fondo
5. **Alternancia**: Alternar fondos claros y oscuros para crear ritmo visual

## 🔧 Variables CSS

```css
:root {
  /* Fondos */
  --bg-dark: #1E293B;
  --bg-footer: #0F172A;
  --bg-light: #FFFFFF;
  --bg-gray: #F8FAFC;
  
  /* Acentos */
  --orange: #F97316;
  --orange-hover: #EA580C;
  --blue: #3B82F6;
  --blue-hover: #2563EB;
  
  /* Texto */
  --text-dark: #1F2937;
  --text-light: #F1F5F9;
  --text-muted: #64748B;
  
  /* Borders */
  --border-light: #E2E8F0;
  --border-dark: #334155;
}
```

## ✅ Checklist de Implementación

- [x] Paleta de colores definida
- [x] Fondos oscuros: 40% del sitio
- [x] Fondos claros: 60% del sitio
- [x] Naranja solo en botones y acentos
- [x] Azul en links y secundarios
- [x] Contraste de texto optimizado
- [x] Gradients aplicados estratégicamente
- [x] Alternancia claro-oscuro implementada
