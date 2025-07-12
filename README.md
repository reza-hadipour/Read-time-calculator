# Read Time Calculator

Estimate the time it takes to study or read an article based on its word count.

This lightweight Node.js package calculates the approximate reading duration for a given text input, returning both numeric and formatted time details. Perfect for content platforms, educational tools, blogging engines, or productivity apps.

---

## 🛠️ Installation

```bash
npm install calculate-read-time
```

---

## 🚀 Usage

### ✅ JavaScript Example

```js
const { calculateReadTime } = require('calculate-read-time');

const article = `Your article text goes here...`;
const result = calculateReadTime(article);

console.log(result.timeFormat); // Example: "00:03:15"
console.log(result); // Full breakdown
```

### ✅ TypeScript Example

```ts
import { calculateReadTime } from 'calculate-read-time';

const article = `Your article text goes here...`;
const result = calculateReadTime(article);

console.log(result.timeFormat); // "00:03:15"
console.log(result);
/*
{
  milliseconds: 195000,
  hour: 0,
  minute: 3,
  seconds: 15,
  timeFormat: "00:03:15"
}
*/
```

---

## 📦 Output Structure

```ts
{
  milliseconds: number,
  hour: number,
  minute: number,
  seconds: number,
  timeFormat: string // "hh:mm:ss"
}
```

---

## 📈 How It Works

- Splits the input text by words.
- Assumes an average reading speed of **200 words per minute**.
- Converts estimated time into milliseconds.
- Uses `Date` for formatting into hours, minutes, and seconds.

---

## 💡 Example Use Cases

- Blog engines displaying estimated reading time.
- Study planners or learning dashboards.
- CLI tools for reading efficiency analysis.

---

## 🧪 Testing

You can create your own test file to validate behavior:

```ts
import { calculateReadTime } from 'calculate-read-time';

const result = calculateReadTime("This is a short article for demo purposes.");
console.log(result.timeFormat); // "00:00:01" or similar based on length
```

---

## 📜 License

MIT — feel free to use and contribute!

---

## ✨ Repository and Author

- GitHub Repository: [https://github.com/reza-hadipour/Read-time-calculator](https://github.com/reza-hadipour/Read-time-calculator)
- Author: Reza Hadipour (<Reza.hadipour2002@gmail.com>)

If you find this useful, consider giving it a ⭐ on [npmjs.com](https://www.npmjs.com/package/read-time-calculator)

```

