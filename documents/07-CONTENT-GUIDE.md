# ✏️ Content Guide

## How to Update Content in "Figma in MacOS"

---

## 1. Quick Reference

| Content Type       | File Location                   |
| ------------------ | ------------------------------- |
| Author Name & Role | `constants.ts`                  |
| Navigation Items   | `constants.ts`                  |
| Hero Section       | `components/Hero.tsx`           |
| About Me           | `components/About.tsx`          |
| Projects           | `components/Projects.tsx`       |
| Project Details    | `components/ProjectDetail*.tsx` |
| Skills & Services  | `components/SkillsServices.tsx` |
| Testimonials       | `components/Testimonials.tsx`   |
| Resume/CV          | `components/Resume.tsx`         |
| Contact Info       | `components/Contact.tsx`        |
| SEO & Meta         | `index.html`                    |

---

## 2. Basic Information

### constants.ts

```typescript
export const AUTHOR_NAME = "HOANG QUY";
export const AUTHOR_ROLE = "Automation Marketing Specialist";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
```

**To update:**

- Change `AUTHOR_NAME` to your name (UPPERCASE preferred)
- Update `AUTHOR_ROLE` to your title
- Modify `NAV_ITEMS` to add/remove sections

---

## 3. Hero Section

### File: `components/Hero.tsx`

#### Typing Effect Words

```typescript
// Line ~322
const roles = ["MARKETING", "DATA", "AI", "AUTOMATION"];
```

**To update:** Replace array items with your specialties.

#### Status Pill

```tsx
// Line ~401
<span className="text-xs font-medium text-gray-300">
  Open For Freelance Projects
</span>
// ...
<span className="text-[10px] text-gray-500 font-mono">HCM CITY</span>
<span className="text-[10px] text-gray-500 font-mono">VN</span>
```

**To update:**

- Change availability status
- Update location

#### Description Text

```tsx
// Line ~487-498
Bridging the gap between <span>Design</span> and <span>Engineering</span>.
I build pixel-perfect digital experiences that live on the web.
```

**To update:** Modify your personal tagline.

---

## 4. About Section

### File: `components/About.tsx`

Look for content blocks containing:

- Personal bio/story
- Stats/metrics ("Local Variables")
- Timeline/history ("Version History")

**Common patterns to update:**

```tsx
// Stats example
{ label: "Years Experience", value: "5+" }
{ label: "Projects Completed", value: "50+" }
{ label: "Happy Clients", value: "30+" }
```

---

## 5. Projects Section

### File: `components/Projects.tsx`

#### Project Cards

Each project typically has:

```tsx
{
  id: "project-n8n",
  title: "n8n Automation",
  description: "Building automated workflows...",
  tags: ["n8n", "Automation", "Integration"],
  image: "/path/to/image.jpg"
}
```

**To add a new project:**

1. Add project data to the projects array
2. Create corresponding `ProjectDetail[Name].tsx`
3. Add view state in `App.tsx`
4. Add case in App's conditional rendering

---

## 6. Project Details

### Files: `components/ProjectDetail*.tsx`

Each detail page contains:

- Header with title and description
- Problem statement
- Solution approach
- Technologies used
- Results/metrics
- Images/screenshots

**To update:** Modify content within each file directly.

---

## 7. Skills & Services

### File: `components/SkillsServices.tsx`

#### Skill Tags

```tsx
const skills = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "language" },
  { name: "n8n", category: "automation" },
  // ...
];
```

#### Services

```tsx
const services = [
  {
    title: "Marketing Automation",
    description: "...",
    icon: "🤖",
  },
  // ...
];
```

---

## 8. Testimonials

### File: `components/Testimonials.tsx`

```tsx
const testimonials = [
  {
    name: "John Doe",
    role: "CEO at Company",
    content: "Working with Hoang was amazing...",
    avatar: "/path/to/avatar.jpg",
  },
  // ...
];
```

**To add:** Add new testimonial objects to the array.

---

## 9. Resume/CV

### File: `components/Resume.tsx`

Contains:

- Work experience entries
- Education
- Certifications
- Download link for PDF

Update the content arrays and ensure PDF is in `/public`.

---

## 10. Contact Information

### File: `components/Contact.tsx`

```tsx
const contactInfo = {
  email: "your@email.com",
  phone: "+84 xxx xxx xxx",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
};
```

---

## 11. SEO & Meta Tags

### File: `index.html`

```html
<title>Hoang Quy Portfolio | Automation Marketing Specialist</title>
<meta
  name="description"
  content="Hoang Quy Portfolio | Automation Marketing Specialist"
/>
<meta
  name="keywords"
  content="Hoang Quy, Portfolio, Automation Marketing Specialist"
/>
<meta name="author" content="Hoang Quy" />
```

**Also update:**

- Open Graph tags for social sharing
- Twitter Card tags
- Favicon

---

## 12. Images & Assets

### Location: `/public`

Place your images here:

- `/public/projects/` - Project screenshots
- `/public/avatars/` - Profile pictures
- `/public/resume.pdf` - Downloadable CV

**Image Optimization Tips:**

- Use WebP format when possible
- Compress images before adding
- Use descriptive filenames

---

## 13. Widget Content

### Hero Widgets

In `Hero.tsx`, modify widget content:

```tsx
// Music Widget
<span className="text-xs font-bold text-white truncate">
  Deep Focus.mp3
</span>
<span className="text-[10px] text-gray-400">Lo-Fi Radio</span>

// Code Widget
const Portfolio = {
  magic: true,
  style: 'Creative Chaos',
  impact: Infinity
};

// Comment Widget
<div>Can we make the logo bigger? 🫠</div>
```

---

## 14. Adding New Sections

1. Create new component in `/components`
2. Import in `App.tsx`
3. Add to component tree
4. Add navigation item in `constants.ts`
5. Update Dock if needed

---

## 15. Content Checklist

Before going live, verify:

- [ ] All personal information is accurate
- [ ] Project descriptions are complete
- [ ] Images load correctly
- [ ] Links work properly
- [ ] Contact info is current
- [ ] Resume PDF is up-to-date
- [ ] Social links are correct
- [ ] SEO meta tags are filled
- [ ] No placeholder/lorem ipsum text

---

_Content Guide v1.0 - December 2024_
