## Using this design system

This is `@repo/ui` from Saepul Malik's portfolio monorepo — a shadcn/Tailwind-v4-style component library. It's small today (`Button` only); build with what's here rather than inventing new components.

### No wrapper/provider needed

`Button` needs no context provider — mount it directly. There is no `ThemeProvider` export; theming is pure CSS custom properties defined on `:root` (see `styles.css`), already active on every preview and in any design you build.

```jsx
<Button variant="default" size="default">
  Click me
</Button>
```

### Styling idiom: Tailwind utility classes over CSS-variable tokens

Don't invent ad-hoc hex colors or spacing — this system's whole visual identity lives in `:root` CSS variables, exposed as standard Tailwind v4 utilities. Real tokens (from `styles.css` → `_ds_bundle.css`):

| Role        | Background       | Foreground/text               |
| ----------- | ---------------- | ----------------------------- |
| Page        | `bg-background`  | `text-foreground`             |
| Card        | `bg-card`        | `text-card-foreground`        |
| Popover     | `bg-popover`     | `text-popover-foreground`     |
| Primary     | `bg-primary`     | `text-primary-foreground`     |
| Secondary   | `bg-secondary`   | `text-secondary-foreground`   |
| Muted       | `bg-muted`       | `text-muted-foreground`       |
| Accent      | `bg-accent`      | `text-accent-foreground`      |
| Destructive | `bg-destructive` | `text-destructive-foreground` |

Other real tokens: `border-border`, `border-input`, `ring-ring`, `rounded-md` / `rounded-lg` (via `--radius-md`/`--radius-lg`), `font-sans` / `font-mono`. Build any new layout markup (divs, sections, headers you compose around `Button`) using these classes, not arbitrary colors — that's what keeps a generated design visually consistent with the rest of the site.

### `Button` API

```ts
interface ButtonProps {
  variant?:
    'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean; // render as a different element (e.g. wrap an <a>) via Radix Slot
  className?: string;
  children?: React.ReactNode;
}
```

Pick `variant`/`size` via props — never hand-roll `bg-*`/`px-*` overrides on a `Button` to fake a variant that already exists (`destructive`, `outline`, `secondary`, `ghost`, `link` are all real).

### Where the truth lives

Read `styles.css` (its `@import` of `_ds_bundle.css`) for the full token list before styling anything non-trivial, and each component's own `.prompt.md` for variant examples pulled directly from its Storybook stories.
