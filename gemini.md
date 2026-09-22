
**Objective:** Build a single-page portfolio website using a retro ncurses TUI (Text User Interface) structural theme.

**Tech Stack:** Svelte, TypeScript (TS), HTML, CSS.

**Important Constraint:** DO NOT include specific color palettes, typography, or detailed UI styling variables. Focus strictly on the HTML structure, Svelte component logic, state management, and the generic layout logic of an ncurses interface. 

## Structure & Layout Reference
The core structural layout should mimic a classic terminal config menu (as seen in the reference `image_0b19ec.png`).
- Implement a main "dialogue box" centered on the screen.
- Inside the dialogue box, render a selectable list of options that the user can navigate.
- Include a structural placeholder for header/footer elements common to TUI dialogs.

## Navigation & State
Since this is a TUI-style app, handle navigation by swapping out the contents of the main dialogue box (SPA routing or simple Svelte state management).

## Screens & Requirements

### 1. Home Page
Display a vertical list of selectable options inside the main dialogue box in this exact order:
1. about me
2. projects
3. github
4. linkedin
5. resume

### 2. About Me View
- **Trigger:** Selecting "about me" from the Home Page.
- **Content:** A placeholder text block for a personal description.
- **Footer:** A button at the bottom labeled `<prev>` that returns the view to the Home Page.

### 3. Projects View
- **Trigger:** Selecting "projects" from the Home Page.
- **Content:** A list of projects formatted as selectable options, just like the Home Page.
- **Interaction:** Selecting a project opens a new "dialogue box" (or replaces the current content) containing:
  - **Project Name:** Must be an anchor tag (`<a>`) that is clickable and redirects to the project's GitHub page.
  - **Description:** A text block explaining the project.
- **Footer:** A `<prev>` button at the bottom to go back to the Home Page (or back to the projects list).

### 4. External Redirects
When these options are selected from the Home Page, they should act as standard links:
- **github:** Redirects immediately to a GitHub profile URL.
- **linkedin:** Redirects immediately to a LinkedIn profile URL.
- **resume:** Redirects immediately to a resume PDF file URL.
