1. Overall Design Philosophy

Design style should communicate:

technical

minimal

analytical

research-oriented

Think:

OpenAI engineering blog
Stripe engineering
Vercel docs

Avoid:

colorful marketing style

large illustrations

too many animations

Preferred style:

clean
data-driven
code-inspired
2. Page Layout Structure

The website uses one main landing page plus subpages.

Home
Projects
Experience
Achievements
Skills
Resume

Navigation bar always visible at top.

3. Global Layout Grid

Ask Figma to use this grid:

12-column grid
max width: 1100px
centered layout
gutter: 24px

Spacing system:

8px base spacing scale
8 / 16 / 24 / 32 / 48 / 64

Font suggestion:

Headings: Inter / Satoshi
Body: Inter
Code blocks: JetBrains Mono

Color palette:

Background: #0f172a
Card: #1e293b
Text: #e2e8f0
Accent: #38bdf8
4. Navigation Bar Design

Position: top of page

Layout:

[Logo / Name]                [Menu items]

Example:

Ngan Huong Nguyen        Projects | Experience | Achievements | Skills | Resume | GitHub

Behavior:

sticky navigation

highlight current page

GitHub icon on right

5. Home Page Layout

The homepage should contain five sections.

Section 1 — Hero

Large introduction.

Layout:

------------------------------------------------
Ngan Huong Nguyen

Computer Science Student
Optimization • Machine Learning • AI Systems

I build optimization engines, autonomous
data analysis systems, and machine learning
models for real-world decision problems.

[View Projects]  [Download Resume]

------------------------------------------------

Right side can contain:

minimal illustration OR algorithm diagram

Example idea:

graph nodes connected (optimization theme)
Section 2 — Featured Projects

Show three strongest projects.

Layout: grid cards

------------------------------------------------
Featured Projects
------------------------------------------------

[ Project Card ]  [ Project Card ]  [ Project Card ]

Each card includes:

Project Title
Tech Stack
Short description
View Project
GitHub

Example card:

Teacher Allocation Optimizer

C++ • Graph Algorithms

Min-Cost Max-Flow system for optimizing
teacher assignment in mountainous regions.

[Details] [GitHub]

Card visual idea:

small benchmark chart preview
Section 3 — Technical Focus

Show your engineering strengths.

Layout:

------------------------------------------------
Technical Focus
------------------------------------------------

Optimization Algorithms
Min-Cost Max-Flow
Graph theory
Network flow modeling

Machine Learning
Model evaluation
Class imbalance analysis

Data Systems
Automated EDA
Statistical pipelines

This section reassures recruiters quickly.

Section 4 — Experience

Show your experience roles.

Layout:

------------------------------------------------
Experience
------------------------------------------------

Mathematics Research Assistant
Minerva University
Sep 2025 – Present

• Mathematical modeling
• Linearization techniques
• Simulation-based analysis

Programming Student Consultant
YouthSF
Sep 2025 – Present

• Guided 20 students
• Robotics and circuits
• STEAM education

Use timeline style:

vertical line with nodes
Section 5 — Achievements

Display awards visually.

Layout:

------------------------------------------------
Achievements
------------------------------------------------

[ Medal icon ]

First Prize
Phu Tho Province Olympiad
Computer Science

[ Medal icon ]

Silver Medal
Vietnam Northern Summer Camp
Computer Science
6. Projects Page

This page lists all projects.

Layout:

------------------------------------------------
Projects
------------------------------------------------

[Large project card]

Teacher Allocation Optimization System
C++ • Graph Algorithms

Description
Architecture
Results
Demo
GitHub

Each project card links to a full project page.

7. Individual Project Page Layout

Each project page should show engineering depth.

Structure:

Title
Tech Stack
GitHub
Demo
Section: Problem

Example layout:

Problem

Teacher allocation in mountainous regions
creates inefficient travel distance.

Goal:
Minimize travel cost while respecting
teacher availability constraints.
Section: Approach

Explain algorithm.

Example:

Approach

Modeled allocation as a network flow problem.

Algorithm:
Min-Cost Max-Flow

Bellman-Ford used for shortest augmenting path.

Add diagram:

graph nodes
edges with costs
flow visualization
Section: System Architecture

Visual diagram:

Next.js UI
    ↓
Flask API
    ↓
C++ Optimization Engine
    ↓
JSON results
Section: Results

Charts.

Examples:

Greedy vs MCMF cost comparison
Runtime comparison
Distance reduction

Visual type:

line chart
bar chart
Section: Interactive Demo

Allow interaction.

Example UI:

Number of schools slider
Number of teachers slider

Run optimization

Output:

allocation map
total cost
comparison chart
8. Skills Page

Layout:

------------------------------------------------
Technical Skills
------------------------------------------------

Languages
Python
C++
JavaScript
SQL

Machine Learning
Logistic Regression
Evaluation metrics
Class imbalance

Algorithms
Graph algorithms
Optimization
Network flow

Web Development
Next.js
FastAPI
React
Mapbox

Display as skill groups in cards.

9. Resume Page

Embed your CV.

Layout:

------------------------------------------------
Resume
------------------------------------------------

[ PDF preview ]

Download Resume

This will display the same resume content you uploaded .

10. Project Visualization Ideas

Ask Figma to create mock charts for:

Teacher Allocation:

graph network
cost comparison chart

EDA Agent:

dataset profiling dashboard
auto-generated charts

ECG classification:

confusion matrix
ROC curve

Environmental dashboard:

map visualization
temperature vs tree coverage chart
11. Mobile Layout

Responsive layout rules:

desktop: 3-column project grid
tablet: 2-column grid
mobile: single column

Navigation becomes:

hamburger menu
12. Interaction Effects

Keep animations minimal.

Suggested interactions:

card hover
button hover
chart tooltip

Avoid heavy animations.

13. What Makes This Portfolio Strong

The design emphasizes:

engineering thinking
data visualization
algorithmic systems

Instead of:

personal storytelling

This matches your CV profile: optimization + ML + data systems