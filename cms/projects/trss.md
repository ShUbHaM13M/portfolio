---
slug: trss
name: TRSS - Terminal RSS Reader
description: A keyboard-driven RSS reader for the terminal, built with Rust and Ratatui. It stores feeds, articles, favourites, and readlist entries in a local SQLite database.
images:
  - /projects/trss/trss.png
  - /projects/trss/trss-article.png
  - /projects/trss/trss-theme-selector.png
githubLink: https://github.com/ShUbHaM13M/trss
technologies:
  - label:
      - Rust
    accentColor: '#DEA584'
    textColor: '#F8EDFF'
    fieldGroup: customTag
  - label:
      - Ratatui
    accentColor: '#654ff0'
    textColor: '#F8EDFF'
    fieldGroup: customTag
  - label:
      - SQLite
    accentColor: '#2F6792'
    textColor: '#F8EDFF'
    fieldGroup: customTag
  - label:
      - RSS
    accentColor: '#F26522'
    textColor: '#F8EDFF'
    fieldGroup: customTag
type: Project
---

**TRSS** is a keyboard-driven RSS reader for the terminal, written in Rust with [Ratatui](https://ratatui.rs/). Add RSS feeds, browse and search their articles, and read article content in the terminal. Feed data and reading preferences are stored locally in SQLite.

## Features

- Add and remove RSS feeds by URL, then refresh feeds on demand or enable background sync.
- Search articles and browse feeds from the terminal interface.
- Save articles to Favourites or the Readlist.
- Render article HTML content with readable formatting in the terminal.
- Choose built-in themes or define custom themes, and configure keyboard bindings in `trss_config.json`.
- Persist feeds, articles, settings, themes, favourites, and readlist entries locally.

## Built with

- **Rust** for the application.
- **Ratatui** for the terminal user interface.
- **SQLite** for local persistence, accessed through the `async-sqlite` crate (which uses `rusqlite`). The application creates a `trss.db` file in its working directory; the standalone `sqlite3` command-line program is only needed if you want to inspect that database manually.
- **`rss`** to parse RSS feeds and **`reqwest`** to retrieve them over HTTP.
- **Tokio** for asynchronous tasks, including background feed updates.
- **`serde` / `serde_json`** for configuration, and **`tl`** for parsing article HTML.

## Run from source

```bash
git clone https://github.com/ShUbHaM13M/trss.git
cd trss
cargo build --release
cargo run
```

The release binary is available at `target/release/trss` after building. TRSS creates and initializes `trss.db` in the working directory on startup.

## Configuration

An optional `trss_config.json` in the working directory can define themes and key bindings. The repository includes an example configuration with several themes and bindings. For example:

```json
{
  "themes": {},
  "keymap": {
    "home": { "down": ["j", "Down"], "quit": ["q", "Esc"] },
    "article": { "back": ["Esc", "h"] }
  }
}
```

Omitted themes and bindings use the built-in defaults. If the config file cannot be read, TRSS reports the error in the terminal and falls back to built-in themes and key bindings. The project roadmap includes further UI improvements, customizable refresh settings, and feed categories and tags.
