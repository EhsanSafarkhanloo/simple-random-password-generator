# Simple Random Password Generator

Welcome to the **Simple Random Password Generator**! This repository contains a straightforward and easy-to-use password generator built with TypeScript.

## Features

- **Highly Customizable:** Generate passwords with options to include lowercase letters, uppercase letters, numbers, and special characters.
- **TypeScript:** Leverage the power and safety of TypeScript to generate secure passwords.
- **Easy to Use:** Simple API for generating random passwords with desired criteria.

### Installation

1. Install:

   ```bash
   npm i xsimple-random-password-generator

   ```

1. Usage:

   ```sh
   import { generateRandomPassword } from "xsimple-random-password-generator";

   // 1: simple usage
   console.log(generateRandomPassword()) // 9wpsSX=8

   // 2: with length and specials controls
   const strongPasswordWithCustomParameters = genereatePassword({
      length: 12,
      includeNumbers: false,
      includeLowercase: true
      includeUppercase: true
      includeSpecialChars: false
   })

   console.log(strongPasswordWithCustomParameters) // eXVQfaBxNj2z
   ```
