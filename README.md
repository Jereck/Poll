# BAAAD – Project 2: Quick Poll

**BAAAD** or "**B**uild **A**n **A**pp **A** **D**ay" is my challenge to build a new app every day using the C#/.NET stack — until I land my next software developer role.

---

## Project: **Quick Poll**

A lightweight polling app that lets users create polls with multiple options and vote on them in real-time.

### Features
- Create polls with multiple choices
- Users can vote on any poll
- Real-time vote count updates
- Simple and responsive UI
- Built with a clean and modular API + frontend separation

---

## Tech Stack

| Layer        | Tech                      |
|--------------|---------------------------|
| Frontend     | Angular 20                |
| Backend      | ASP.NET Core 9 Web API    |
| Database     | SQLite + EF Core          |
| Styling      | TailwindCSS               |

---

## Project Structure
```
DevSprint-Project1-JobTrackr/
├── API/ # ASP.NET Core Web API
├── client/ # Angular 20 frontend
└── README.md # You're here!
```

---

## Getting Started

### 1. API
```bash
cd API
dotnet ef database update
dotnet run
```

### 2. Client
```bash
cd client
npm install
ng serve
```
App runs at: http://localhost:4200

## Day 2 Reflection
Today’s build was a polling app. I wanted something quick and interactive that also let me practice setting up relationships between entities (Poll and Options) with EF Core. Keeping it lightweight with SQLite made setup easy. The goal was to practice full CRUD operations and nesting objects on creation (a Poll with its Options).

## Connect With Me
* Github: [Here](https://github.com/Jereck)
* LinkedIn: [Here](https://www.linkedin.com/in/jake-reck/)