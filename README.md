# Mortal Sopranos

A complete, compact three-stage browser arcade brawler, with solo and two-player local co-op. Playable characters: Tony, Carmela, Artie, and Junior. Carmela fights with a vacuum and throws a cordless phone for her “Some Pulp” special.

[Play in your browser](https://oxsnard.github.io/mortal-sopranos/) · [Source on GitHub](https://github.com/oxsnard/mortal-sopranos)

## Play locally

Requires Node.js 18 or newer. From this folder, run `npm start`, then open http://127.0.0.1:4173. Or double-click `Play Mortal Sopranos.cmd`. No package install or build is needed. Serve `dist/` with any static HTTP server for other environments. Opening index.html directly as a file is not supported because the game uses ES modules.

Select P1 or P2, click a character, and choose Start Solo or 2 Player Co-op. Both players can choose the same character. The second player uses the same device; online multiplayer is not included.

| Action | P1 | P2 | Standard gamepad |
|---|---|---|---|
| Move | WASD | Arrow keys | Left stick / D-pad |
| Hit / weapon | F | J | X |
| Kick | G | K | B |
| Jump | Space | Right Shift | A |
| Block (hold) | R | O | LB |
| Special | H | L | Y |
| Pause | Escape | Escape | Start |
| Sound | M | M | Header button |

Touch controls are provided for P1 on small screens and touch devices. Desktop with a keyboard or gamepad gives the best experience. Two gamepads map to P1 and P2 in connected order. Some keyboards limit simultaneous key presses; gamepads avoid keyboard rollover limitations.

## Game

- Three neighborhoods: Satriale’s, Bada Bing, and Vesuvio; three enemy blocks each.
- Bosses: Paulie, Silvio, and Christopher.
- Tony’s shoulder charge, Carmela’s phone projectile, Artie’s flying skillet, and Junior’s cane sweep.
- Lane-based combat, jump attacks, frontal blocking, combos, telegraphed enemy attacks, health and cash pickups.
- Three lives per player, two shared continues, a win screen, restart, pause on lost focus, sound toggle, fullscreen, and persistent local high score.
- Three original synthesized 16-bit-inspired compositions with bass, chords, melody, percussion, and synthesized combat sounds. These are original mood-inspired pieces, not arrangements or recordings of the television soundtrack.
- Generated digitized photographic sprite atlases with four poses per character; pose changes and procedural movement provide animation. This is a small fan-made arcade game, not a production-scale licensed game or footage-based motion-capture project.

## Development

`npm test` runs the engine’s gameplay regression tests, including a combat-driven full-campaign simulation.

GitHub Pages publishes `dist/` using `.github/workflows/pages.yml`. Every push to `main` first runs the gameplay tests, then deploys on success. In repository Settings → Pages, the source is GitHub Actions.

`dist/engine.mjs` contains deterministic game logic with no browser dependencies. `dist/main.mjs` handles canvas rendering, UI, input, and asset loading. `dist/audio.mjs` contains the Web Audio synthesizer and original compositions. `server.mjs` is the dependency-free local server.

Graphics live in `dist/assets/`. The included artwork was generated with the built-in image generation tool. See `ASSET-PROMPTS.txt` for the generation prompts. Google Fonts enhance the interface when connected; local fallback fonts keep it playable without them. No remote game code, analytics, or paid services are needed to play.

Unofficial fan project based on fictional characters and locations from The Sopranos. Not affiliated with or endorsed by the show’s rights holders.
