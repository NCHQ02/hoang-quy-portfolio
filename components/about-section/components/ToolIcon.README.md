# ToolIcon Component

Component linh hoạt để hiển thị icons của các tools, hỗ trợ cả text-based và image-based icons.

## 🎨 Cách sử dụng

### 1. Text-based Icon (Adobe Style)

```tsx
<ToolIcon name="Adobe Illustrator" label="Ai" bg="#330000" txt="#FF9A00" />
```

### 2. Image-based Icon (External URL)

```tsx
<ToolIcon name="Figma" icon="https://img.icons8.com/color/96/figma.png" />
```

### 3. Auto Label (từ 2 ký tự đầu của name)

```tsx
<ToolIcon name="Photoshop" bg="#001E36" txt="#31A8FF" />
// Sẽ hiển thị "Ph"
```

## 📝 Props

| Prop    | Type   | Required | Default              | Description                       |
| ------- | ------ | -------- | -------------------- | --------------------------------- |
| `name`  | string | ✅       | -                    | Tên tool (hiển thị trong tooltip) |
| `label` | string | ❌       | 2 ký tự đầu của name | Text hiển thị trong icon          |
| `bg`    | string | ❌       | "#2C2C2E"            | Màu nền (hex color)               |
| `txt`   | string | ❌       | "#FFFFFF"            | Màu chữ (hex color)               |
| `icon`  | string | ❌       | -                    | URL của icon bên ngoài            |

## 🔧 Configuration

Quản lý tools trong file `config/tools.config.ts`:

```tsx
import { DESIGN_TOOLS, DEV_TOOLS } from "./config/tools.config";

// Sử dụng
{
  DESIGN_TOOLS.map((tool) => <ToolIcon key={tool.name} {...tool} />);
}
```

## 🌐 Nguồn Icons

### Icons8 (Recommended)

- URL format: `https://img.icons8.com/{style}/{size}/{name}.png`
- Styles: `color`, `fluency`, `plasticine`, `dusk`, `bubbles`
- Sizes: `48`, `96`, `100`
- Example: `https://img.icons8.com/color/96/figma.png`

### Flaticon

- URL: `https://cdn-icons-png.flaticon.com/512/{id}/{name}.png`

### Simple Icons

- URL: `https://cdn.simpleicons.org/{name}`

## ✨ Features

- ✅ Hover animation (scale + rotate)
- ✅ Tooltip hiển thị tên đầy đủ
- ✅ Hỗ trợ cả text và image icons
- ✅ Auto-generate label từ name
- ✅ Customizable colors
- ✅ Responsive design

## 📦 Example Usage

```tsx
import { ToolIcon } from "./components/ToolIcon";

const MyTools = () => (
  <div className="flex gap-4">
    {/* Adobe Creative Cloud */}
    <ToolIcon name="Illustrator" label="Ai" bg="#330000" txt="#FF9A00" />
    <ToolIcon name="Photoshop" label="Ps" bg="#001E36" txt="#31A8FF" />

    {/* External Icons */}
    <ToolIcon name="Figma" icon="https://img.icons8.com/color/96/figma.png" />
    <ToolIcon
      name="React"
      icon="https://img.icons8.com/color/96/react-native.png"
    />
  </div>
);
```
