================================================================
  StudyMind Pro — AI Learning Coach
  README
================================================================

PROJECT OVERVIEW
----------------
StudyMind Pro is a fully self-contained, single-file web application
(studymind-fixed.html) that functions as an AI-powered personal
learning coach. It is built with React 18 (loaded via CDN), Chart.js,
and vanilla CSS — requiring no build tools, no server, and no
installation. Simply open the HTML file in any modern browser.


----------------------------------------------------------------
TECH STACK
----------------------------------------------------------------
- React 18.2.0        (CDN, UMD build — no JSX transpiler needed)
- Chart.js 4.4.1      (CDN — used for progress charts)
- Google Fonts        (Sora, Space Grotesk, JetBrains Mono)
- Vanilla CSS         (fully embedded inside <style> tags)
- No backend          (all data stored in browser localStorage)


----------------------------------------------------------------
HOW TO RUN
----------------------------------------------------------------
1. Download or save "studymind-fixed.html" to your computer.
2. Double-click the file to open it in your browser.
   -- OR --
   Open your browser and drag the file into the address bar.
3. No internet connection is strictly required after first load,
   but Google Fonts and CDN libraries are fetched on startup.
4. All user data is saved automatically to localStorage.


----------------------------------------------------------------
FEATURES
----------------------------------------------------------------

1. SPLASH SCREEN
   - Animated loading screen with 3D rotating logo icon,
     expanding rings, floating particles, and a progress bar.
   - Disappears automatically when the app is ready.

2. AUTHENTICATION & ONBOARDING
   - Multi-step onboarding wizard for new users.
   - Collects: name, target exam/subject, study goal,
     daily study hours, and avatar selection.
   - Supports multiple student profiles (multi-user switching).
   - Login screen with animated background (star field,
     floating orbs, geometric spinning rings).

3. DASHBOARD
   - Overview of study plan, XP level, active subject,
     and daily progress.
   - AI-generated tips and motivational coach messages.
   - Subject switcher for multi-subject tracking.

4. STUDY PLAN
   - AI-generated personalized weekly/daily study plan.
   - Tasks categorized by type: Learn, Practice, Review, Project.
   - Mark tasks complete for XP rewards.
   - Plan regeneration per subject.

5. PROGRESS TRACKER
   - Visual progress charts (Chart.js).
   - Activity heatmap (GitHub-style).
   - XP history and level tracking.
   - Subject-wise stats.

6. QUIZ
   - AI-generated multiple-choice quizzes based on
     the active subject and study plan.
   - Correct/wrong answer highlighting.
   - XP awarded on completion.

7. FOCUS TIMER
   - Pomodoro-style focus timer.
   - SVG animated timer ring with comet sweep effect.
   - XP awarded for completed focus sessions.

8. NOTES
   - Quick notes section linked to active subject.
   - Add, view, and manage study notes.

9. RESOURCES
   - Curated resource suggestions based on subject/profile.
   - AI-assisted resource generation.

10. PROJECT IDEAS
    - AI-generated project ideas relevant to the subject.
    - Helps learners apply knowledge practically.

11. BADGES
    - Achievement badge system.
    - Badges unlock based on XP milestones and task completion.
    - Multi-subject badge tracking.

12. FLOATING AI COACH
    - Always-accessible chat bubble in the bottom-right corner.
    - Full conversational AI coach powered by the Anthropic API.
    - Context-aware: knows your profile, plan, XP, and active tab.
    - Streaming response support with animated typing indicator.
    - Suggested quick-reply chips.

13. NOTIFICATIONS / REMINDER BELL
    - Bell icon in the top bar for study reminders.
    - Alerts based on the study plan schedule.

14. DARK / LIGHT MODE
    - Toggle between dark and light themes via the top bar.
    - Remembers preference across sessions.

15. USER PROFILE EDITOR
    - Edit name, avatar, study goal, and daily hours at any time.

16. TOAST NOTIFICATIONS
    - Non-intrusive pop-up messages for XP gains, task completions,
      errors, and general info.

17. SIDEBAR CLOCK
    - Live clock and date displayed in the collapsible sidebar.
    - Sidebar can be collapsed to maximize content space.


----------------------------------------------------------------
UI / DESIGN
----------------------------------------------------------------
- Design language: modern, warm dark-first with parchment tones
  in light mode. Primary accent color is burnt orange (#c8440a).
- Fonts: Sora (headings), Space Grotesk (body), JetBrains Mono
  (monospace / code-style labels).
- CSS Variables used throughout for easy theming.
- Full dark mode support via [data-theme=dark] on the root.
- Responsive layout with collapsible sidebar.
- Custom scrollbar styling (thin, minimal).
- Animations: page-in transitions, card pop-ins, XP level-up
  animation, spinner, streamed message pulse, and more.


----------------------------------------------------------------
DATA & STORAGE
----------------------------------------------------------------
- All user data is persisted in the browser's localStorage.
- No data is sent to any server except AI prompts sent to the
  Anthropic API (claude-sonnet model).
- Data includes: profiles, study plans, task completion status,
  notes, XP, activity log, preferences (theme, sidebar state).
- Clearing browser data / localStorage will reset the app.


----------------------------------------------------------------
AI INTEGRATION
----------------------------------------------------------------
- Uses the Anthropic Messages API (/v1/messages).
- Model: claude-sonnet-4-20250514
- API key must be injected at the infrastructure level
  (the fetch call does not include an explicit key in the code,
  relying on the environment/proxy to attach it).
- AI features: study plan generation, quiz generation,
  resource suggestions, project ideas, and the chat coach.
- The Floating AI Coach uses streaming responses for a
  real-time typing effect.


----------------------------------------------------------------
FILE STRUCTURE
----------------------------------------------------------------
studymind-fixed.html          (entire application — single file)
│
├── <head>
│   ├── CDN: React 18, ReactDOM 18, Chart.js 4
│   ├── CDN: Google Fonts (Sora, Space Grotesk, JetBrains Mono)
│   └── <style>: all CSS (CSS variables, dark mode, components)
│
└── <body>
    ├── #root                 (React mount point)
    ├── #app-loader           (loading overlay)
    ├── #app-error            (error display overlay)
    └── <script>              (entire React application as
                               React.createElement() calls)


----------------------------------------------------------------
COMPONENTS (notable)
----------------------------------------------------------------
App                     Root component, routing, global state
Splash                  Animated loading screen
AuthScreen              Login / onboarding flow
OnboardingWizard        Multi-step new-user setup
Dashboard               Main overview tab
StudyPlan               Plan display and task management
Progress                Charts, heatmap, stats
Quiz                    AI quiz with MCQ interface
FocusTimer              Pomodoro-style timer with SVG ring
Notes                   Subject-linked notes
Resources               AI-curated resource list
ProjectIdeas            AI-generated project suggestions
Badges                  Achievement badge display
FloatingAICoach         Persistent chat coach bubble
ReminderBell            Notification bell with dropdown
Toasts                  Toast notification stack
AvatarSVG               SVG avatar renderer
Icon                    Inline SVG icon system


----------------------------------------------------------------
KNOWN NOTES
----------------------------------------------------------------
- The app requires a browser that supports modern CSS
  (custom properties, backdrop-filter, CSS grid).
  Recommended: Chrome 90+, Firefox 90+, Edge 90+, Safari 15+.
- Because it uses UMD React without JSX, all components are
  written with React.createElement() calls — this is intentional
  for a no-build-step single-file approach.
- If the AI features return errors, verify the API key/proxy
  configuration is correctly set up for the Anthropic API.


----------------------------------------------------------------
LICENSE / CREDITS
----------------------------------------------------------------
- Built as a standalone front-end learning tool project.
- Fonts courtesy of Google Fonts.
- Icons: custom inline SVG icon system.
- AI powered by Anthropic Claude.

================================================================
  End of README
================================================================
