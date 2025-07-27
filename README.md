# Fumadocs Shadcn/UI Registry Template

This is a template for creating your own component registry for `shadcn/ui`,
seamlessly integrated with [Fumadocs](https://fumadocs.dev/) for documentation.

With this template, you can build, document, and distribute your own reusable
components to any React project that uses `shadcn/ui`.

## Features

- **Custom Component Registry**: Host your own `shadcn/ui` compatible
  components.
- **Integrated Documentation**: Uses [Fumadocs](https://fumadocs.dev/) to
  automatically generate documentation for your components.
- **`shadcn/ui` Compatible**: Components can be added to any `shadcn/ui` project
  using the CLI.
- **Example Components**: Includes examples of simple and complex components,
  with hooks and helper files.

## Getting Started

### 1. Use this Template

Click the "Use this template" button on the GitHub repository page to create
your own repository based on this template.

### 2. Customize Your Registry

Open `registry/registry.json` and customize it to your needs. At the very least,
you should change the `name` and `homepage` fields.

```jsonc
// registry/registry.json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "your-registry-name", // Change this
  "homepage": "https://your-site.com", // Change this
  "items": [
    // ... your components
  ],
}
```

### 3. Add Your Components

Add your components to the `registry/` directory. Each component should have an
entry in the `items` array in `registry/registry.json`.

Follow the structure of the example components provided. You can see the schema
for `registry-item.json` in the
[official `shadcn/ui` documentation](https://ui.shadcn.com/docs/registry/registry-item-json).

### 4. Run the Documentation Site

To see your components in the documentation, run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## Using Your Registry

### 1. Deploy Your Registry

For other people to use your registry, you need to deploy this project to a
public URL (e.g., using Vercel, Netlify, etc.).

The `shadcn/ui` CLI will fetch component information from the deployed site.

### 2. Add Components to Your Project

Once your registry is deployed, you can add components to any `shadcn/ui`
project using the `add` command with the `--registry` flag:

```bash
npx shadcn-ui@latest add <component-name> --registry https://your-registry-url.com
```

Replace `<component-name>` with the name of your component and
`https://your-registry-url.com` with the URL of your deployed registry.

This command will fetch the component from your registry and add it to the
project, just like with the default `shadcn/ui` components.
