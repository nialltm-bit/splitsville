# Splitsville

Photograph a bill, tick what everyone had, and see exactly who owes what.

- **Reads the receipt on your phone.** Nothing is uploaded, there's no account, and it costs nothing.
- **Split it as a group.** Add people, tick items for each of them, and share items between people. Each person's share adds up to the bill to the penny, with anything nobody has claimed shown separately.
- **Service, discounts and tips** are shared in proportion to what each person had. You can also just split the whole bill equally.
- **Past bills** stay on your phone.
- Works offline once opened, and can be added to your home screen.

## Install on your phone

Open the link, then:

- **iPhone (Safari):** tap Share, then **Add to Home Screen**.
- **Android (Chrome):** tap the menu, then **Add to Home screen** or **Install app**.

## Tips for a good read

Lay the receipt flat in good light, shoot straight on, and let it fill most of the frame. If the lines don't add up to the printed total, the app tells you so you can fix any misread line with **Edit**.

## How it works

A single static page (`index.html`), no server and no build step. Everything runs on the phone:

- **Reading the receipt:** [PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) PP-OCRv5 mobile models (Apache 2.0) via the PaddleOCR.js SDK and ONNX Runtime Web, bundled in `paddle/`. The first scan downloads about 25 MB once; after that it works offline.
- **Fallback:** if PaddleOCR can't run on a device, [Tesseract.js](https://github.com/naptha/tesseract.js) (Apache 2.0) in `ocr/` takes over.
- **Checking:** the printed total is used as a checksum, and the app flags when the lines don't add up.

## Visitor numbers

Visits are counted with [GoatCounter](https://www.goatcounter.com/): no cookies and no personal data. It also counts two anonymous events, `bill-scanned` and `split-with-people`, so it's clear whether visitors actually use the app. Open the site once with `?not-me` on the end to stop counting that device, or `?count-me` to start again.

