# Web dev portfolio built with Astro
Web portfolio designed in [Figma](https://www.figma.com) and built from scratch with [Astro](https://astro.build), [Tailwindcss](https://tailwindcss.com), [Flowbite](https://flowbite.com) and some components with [React](https://react.dev). Also supports i18n for english and spanish.

## Project Structure

```text
/
├── public/
├── src/
├── components
│   ├── Button.tsx
│   ├── Footer.astro
│   ├── Header.astro
│   ├── SectionContainer.astro
│   ├── SkillCard.astro
│   └── ...
├── i18n
│   ├── ui.ts
│   └── utils.ts
├── icons
│   ├── TriangleDown.svg
│   └── ...
├── images
│   └── ...
├── layouts
│   └── Default.astro
├── pages
│   ├── en
│   │   └── index.astro
│   ├── es
│   │   └── index.astro
│   └── index.astro
├── sections
│   ├── About.astro
│   ├── Contact.astro
│   ├── Experience.astro
│   ├── Hero.astro
│   ├── Skills.astro
│   └── Works.astro
├── types
│   └── index.ts
└── utils
    └── ...

```

## 🧞 Commands
The project currently support two languages: English and Spanish
```text
/
└─── src/
  └── i18n/
     └── ui.ts
     └── utils.ts
```

The ui file contains dictionaries of terms to translate the labels for UI.
The utils folder contain a function to detect the current language based on the url and one to get translations strings for different parts of the UI.

You can check the [i18n section](https://docs.astro.build/en/recipes/i18n/) for more information

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## License

This portfolio and all its contents are available under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute the code and resources in this portfolio for any purpose, including commercial use. Attribution is appreciated but not required.

If you use this portfolio as a base for your own or find it useful, I would love to hear about it. You can reach out to me through [LinkedIn](https://www.linkedin.com/in/roy-palomino-rojas-6770a9184/).

I hope you find this portfolio helpful and inspiring for creating your own!
