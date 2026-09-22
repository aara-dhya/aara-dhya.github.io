# Antigravity IDE Prompt: Retro TUI Website (Dark & Light Modes)

Copy and paste the following prompt into Antigravity IDE to generate your UI frontend.

***

**System Role:** You are an expert frontend developer specializing in retro aesthetics, particularly the classic Text User Interface (TUI) look from the late 80s and 90s command-line environments.

**Task:** Design and implement the frontend for a web application using Svelte and Tailwind CSS. The application must feature a strict theme toggle (Dark/Light mode) utilizing Tailwind's `dark:` variant paradigm. Both themes must capture the rigid utility of a true command-line environment.

**Global TUI Design Constraints (Applies to both modes):**
*   **Typography:** The font must be a clean, classic monospace font to emulate a VGA text mode display (e.g., 'VT323', 'IBM Plex Mono', 'Fira Code', or standard `monospace`). Force monospace across absolutely all elements.
*   **Layout & Spacing:** Grid-like and rigid. No modern spacing paradigms (no excessive padding or floating elements). Elements should align perfectly on a grid.
*   **Structure:** Ensure the main container takes up exactly `100vh` and `100vw`, acting as a fixed viewport to maintain the illusion of a static terminal window. Manage layout overflows within specific panel components (mimicking terminal scrolling).
*   **Inputs:** Include a blinking block cursor effect (`█`) for text inputs instead of the standard thin vertical line cursor (use Svelte scoped `<style>` for keyframes).
*   **Implementation:** Use standard `.svelte` components and rely strictly on Tailwind CSS for styling. No modern UI fluff (no rounded corners, no gradients).

---

**1. Dark Mode Requirements (Classic `ncurses`):**
*   **Background:** Pitch black (`bg-black`).
*   **Foreground:** Vibrant neon terminal green (e.g., `text-green-500`).
*   **Panels & Borders:** 1px solid green borders (`border-green-500`) with zero border-radius (`rounded-none`). No drop shadows (`shadow-none`).
*   **Buttons:** Encased in square brackets (e.g., `[ SUBMIT ]`).
*   **Active/Focus States:** When focusing or hovering over an interactive element, invert the colors (neon green background with pitch black text).

---

**2. Light Mode Requirements (DOS `dialog` Utility Style):**
*   **Global Background:** A solid medium blue (e.g., `bg-blue-500` or `bg-blue-600`).
*   **Panels/Modals:** 
    *   **Background:** Pale beige/off-white (e.g., `bg-[#EFEBD8]` or `bg-stone-100`).
    *   **Text:** Dark navy blue or black (`text-slate-800`).
    *   **Borders:** Use a dashed black border to simulate ASCII lines, or actual ASCII characters (`|`, `-`).
    *   **Titles:** Panel titles should be red (`text-red-600`), centered, and break the top border line.
    *   **Shadows:** Panels MUST have a hard, solid block drop-shadow offset to the bottom right. The shadow must be a solid dark teal/gray with absolutely zero blur (e.g., `shadow-[8px_8px_0_rgba(15,85,95,1)]` or similar Tailwind arbitrary value).
*   **Buttons:**
    *   **Syntax:** Encased in angle brackets (e.g., `<Yes>`, `<No>`).
    *   **Inactive State:** Plain dark text with no background.
    *   **Active/Focus State:** Solid red background (`bg-red-600`) with white text (`text-white`). No borders.

***