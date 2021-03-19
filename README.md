# space

# ClientR (React)
## ESlint + Prettier Setup

### ESlint
https://eslint.org/docs/user-guide/getting-started
```
$ npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D

$ npx eslint --init
```

### Prettier
```
$ npm install prettier

$ npx prettier --check .

$ npx prettier --write .
```

### Connect ESLint and Prettier
https://prettier.io/docs/en/integrating-with-linters.html
```
// Stop all conflict rule about prettier
$ npm install --save-dev eslint-config-prettier

// Show prettier error message to eslint
$ npm install --save-dev eslint-plugin-prettier
```

```
// .eslintrc.js
{
  "extends": ["plugin:prettier/recommended"]
}
```

### VScode
1. install eslint
2. install prettier