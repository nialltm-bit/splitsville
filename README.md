# Bill Splitter

Photograph a bill, tick the items you had, and see what you owe, including your fair share of any service charge or discount.

- Reads the receipt on your phone. Nothing is uploaded, no account, no cost.
- Tick your items; split shared ones between any number of people.
- Copy your share as text to paste into the group chat.
- Works offline once opened, and can be added to your home screen.

## Install on your phone

Open the link, then:

- **iPhone (Safari):** tap Share, then **Add to Home Screen**.
- **Android (Chrome):** tap the menu, then **Add to Home screen** or **Install app**.

## Tips for a good read

Lay the receipt flat in good light, shoot straight on, and let it fill most of the frame. If the lines don't add up to the printed total, the app tells you so you can fix any misread line with **Edit**.

## How it works

A single static page (`index.html`) with on-device text recognition by [Tesseract.js](https://github.com/naptha/tesseract.js) (Apache 2.0), bundled in `ocr/`. No server, no build step.
