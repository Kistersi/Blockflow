# FRAME / STYLE – Foto-Atelier

Responsive Progressive Web App (PWA) for iPhone and iPad.

## Erste Version
- Foto lokal aus der Mediathek auswählen
- Fotostile: Urban B/W, Dark Cinematic, Warm Vintage, Cold Blue, Natural Pro, Soft Mono, Eigener Stil
- Farb- und Schwarz-Weiß-Variante
- Intensität, Helligkeit, Kontrast und Schärfe
- Vorher-/Nachher-Umschaltung
- JPEG-Export
- Hook-Vorschläge passend zum Stil
- Offline-Grundgerüst über Service Worker

## Datenschutz und Grenzen
Die Bildverarbeitung läuft lokal im Browser. Bilder werden in dieser Version nicht an einen Server übertragen. Die Stilbearbeitung nutzt klassische Pixel-/Farbkorrekturen und ist keine generative KI-Retusche. Das Original wird nicht überschrieben.

## Installation auf iPhone/iPad
1. Öffne die veröffentlichte GitHub-Pages-Adresse in Safari.
2. Tippe auf „Teilen“.
3. Wähle „Zum Home-Bildschirm“.
4. Aktiviere „Als Web-App öffnen“, falls angeboten.

## Veröffentlichung
Diese App liegt im Ordner `/frame-style/` des bestehenden Blockflow-Repositories und verändert die vorhandene Spiele-App nicht. GitHub Pages muss für das Repository auf den Branch `main` und den Ordner `/(root)` eingestellt sein.