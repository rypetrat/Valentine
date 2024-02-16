Valentine Project for Mackenzie :)

WebApp that will create a basic webpage with some CSS, Javascript, and HTML that will display a gif create two buttons (yes and no) where if the no button is clicked then the yes button will grow in size and then the no button will change positions indefinitely. Upon clicking yes a new gif will replace the previous and some text displaying how many times the no button is clicked will appear if the no button was interacted with.


- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
